from flask import Flask, render_template, request, jsonify, send_file
import pandas as pd
import logging
from jinja2 import Template
import weasyprint
import io
import zipfile
from datetime import datetime

app = Flask(__name__)
logging.basicConfig(level=logging.DEBUG)

@app.route('/', methods=['GET', 'POST'])
def upload_file():
    if request.method == 'POST':
        try:
            if 'excel_file' not in request.files or 'template_file' not in request.files:
                app.logger.error('Missing required files')
                return jsonify({'error': 'Both Excel and HTML template files are required', 'success': False}), 400

            excel_file = request.files['excel_file']
            template_file = request.files['template_file']

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

                        filename = f'document_{index + 1}.pdf'
                        zf.writestr(filename, pdf)

                        app.logger.info(f'Processed document {index + 1}')

                    except Exception as e:
                        app.logger.error(f'Error processing row {index + 1}: {str(e)}')
                        continue

            memory_file.seek(0)
            timestamp = datetime.now().strftime('%Y%m%d_%H%M%S')

            return send_file(
                memory_file,
                mimetype='application/zip',
                as_attachment=True,
                download_name=f'documents_{timestamp}.zip'
            )

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
