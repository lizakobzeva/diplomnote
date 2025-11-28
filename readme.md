### Backend

## Функциональность

- Загрузка Excel-файла (.xlsx) с данными
- Загрузка HTML-шаблона для генерации PDF
- Просмотр полей из Excel-файла
- Генерация PDF-документов для каждой строки Excel-файла
- Автоматическая упаковка всех сгенерированных PDF в ZIP-архив

## Требования

- Python 3.8+
- Flask
- Pandas
- WeasyPrint
- Flask-CORS
- openpyxl


## Установка и запуск

1. Создайте виртуальное окружение:
```bash
cd backend
python -m venv venv
```

2. Активируйте виртуальное окружение:
- Windows:
```bash
venv\Scripts\activate
```
- Linux/MacOS:
```bash
source venv/bin/activate
```

3. Установите зависимости, при необходимости. Проверьте актуальность настроек почты в config.py

4. Запустите сервер:
```bash
python app.py
```
Бэкенд будет доступен по адресу: http://localhost:5000

