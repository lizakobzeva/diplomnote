from flask import Flask, render_template, request, jsonify, send_file
import pandas as pd
import logging
from jinja2 import Template
import weasyprint
import io
import zipfile
from datetime import datetime
from email.mime.multipart import MIMEMultipart
from email.mime.application import MIMEApplication
from email.mime.text import MIMEText
import smtplib
from typing import Dict, List
import json
from config import MAIL_CONFIG

app = Flask(__name__)
logging.basicConfig(level=logging.DEBUG)

app.config.update(MAIL_CONFIG)

def send_pdf_by_email(email: str, pdf_content: bytes, index: int) -> Dict:
    try:
        msg = MIMEMultipart()
        msg['Subject'] = f'Your Certificate #{index}'
        msg['From'] = app.config['MAIL_DEFAULT_SENDER']
        msg['To'] = email

        text = "Please find your certificate attached."
        msg.attach(MIMEText(text))

        pdf_attachment = MIMEApplication(pdf_content, _subtype='pdf')
        pdf_attachment.add_header('Content-Disposition', 'attachment',
                                  filename=f'certificate_{index}.pdf')
        msg.attach(pdf_attachment)

        with smtplib.SMTP(app.config['MAIL_SERVER'], app.config['MAIL_PORT']) as server:
            server.starttls()
            server.login(app.config['MAIL_USERNAME'], app.config['MAIL_PASSWORD'])
            server.send_message(msg)

        return {'success': True, 'message': f'Email sent successfully to {email}'}
    except Exception as e:
        return {'success': False, 'message': f'Failed to send email to {email}: {str(e)}'}

@app.route('/', methods=['GET', 'POST'])
def upload_file():
    if request.method == 'POST':
        try:
            if 'excel_file' not in request.files or 'template_file' not in request.files:
                app.logger.error('Missing required files')
                return jsonify({'error': 'Both Excel and HTML template files are required', 'success': False}), 400

            excel_file = request.files['excel_file']
            template_file = request.files['template_file']
            delivery_method = request.form.get('delivery_method', 'zip')

            if not excel_file.filename.endswith('.xlsx'):
                return jsonify({'error': 'Invalid Excel file format', 'success': False}), 400
            if not template_file.filename.endswith('.html'):
                return jsonify({'error': 'Invalid template file format', 'success': False}), 400

            df = pd.read_excel(excel_file)
            template_content = template_file.read().decode('utf-8')
            template = Template(template_content)

            if df.empty:
                return jsonify({'error': 'Excel file is empty', 'success': False}), 400

            memory_file = io.BytesIO()
            email_results = []

            with zipfile.ZipFile(memory_file, 'w') as zf:
                for index, row in df.iterrows():
                    try:
                        data = {}
                        for column in df.columns:
                            value = row[column]
                            if pd.isna(value):
                                data[column] = ''
                            elif isinstance(value, pd.Timestamp):
                                data[column] = value.strftime('%Y-%m-%d')
                            else:
                                data[column] = str(value)

                        rendered_html = template.render(**data)
                        pdf = weasyprint.HTML(string=rendered_html).write_pdf()

                        if delivery_method == 'email':
                            if 'email' in row and pd.notna(row['email']):
                                email_result = send_pdf_by_email(
                                    row['email'],
                                    pdf,
                                    index + 1
                                )
                                email_results.append(email_result)
                            else:
                                email_results.append({
                                    'success': False,
                                    'message': f'No email provided for row {index + 1}'
                                })

                        filename = f'document_{index + 1}.pdf'
                        zf.writestr(filename, pdf)
                        app.logger.info(f'Processed document {index + 1}')

                    except Exception as e:
                        app.logger.error(f'Error processing row {index + 1}: {str(e)}')
                        if delivery_method == 'email':
                            email_results.append({
                                'success': False,
                                'message': f'Error processing row {index + 1}: {str(e)}'
                            })
                        continue

            memory_file.seek(0)
            timestamp = datetime.now().strftime('%Y%m%d_%H%M%S')

            response = send_file(
                memory_file,
                mimetype='application/zip',
                as_attachment=True,
                download_name=f'documents_{timestamp}.zip'
            )

            if delivery_method == 'email':
                response.headers['X-Email-Results'] = json.dumps(email_results)

            return response

        except Exception as e:
            app.logger.error(f'Error: {str(e)}')
            return jsonify({'error': str(e), 'success': False}), 500

    return render_template('index.html')

@app.route('/get_fields', methods=['POST'])
def get_fields():
    try:
        if 'excel_file' not in request.files:
            return jsonify({'error': 'Excel file is required', 'success': False}), 400

        excel_file = request.files['excel_file']
        if not excel_file.filename.endswith('.xlsx'):
            return jsonify({'error': 'Invalid file format', 'success': False}), 400

        df = pd.read_excel(excel_file)
        if df.empty:
            return jsonify({'error': 'Excel file is empty', 'success': False}), 400

        columns = df.columns.tolist()
        first_row = df.iloc[0].to_dict()

        processed_row = {}
        for key, value in first_row.items():
            if pd.isna(value):
                processed_row[key] = ''
            elif isinstance(value, pd.Timestamp):
                processed_row[key] = value.strftime('%Y-%m-%d')
            else:
                processed_row[key] = str(value)

        return jsonify({
            'success': True,
            'columns': columns,
            'first_row': processed_row
        })

    except Exception as e:
        app.logger.error(f'Error: {str(e)}')
        return jsonify({'error': str(e), 'success': False}), 500

if __name__ == '__main__':
    app.run(debug=True)
