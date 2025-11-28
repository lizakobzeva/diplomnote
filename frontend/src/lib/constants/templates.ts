import img1 from '../../assets/template1.jpg'
import img2 from '../../assets/template2.jpg'
import { ITemplate } from '../types'

export const TEMPLATES: ITemplate[] =[{
    name: 'первый шаблон',
    img:img1,
    template: `
<!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Грамота Сириуса</title>
    <link href="https://fonts.googleapis.com/css2?family=Quicksand:wght@400;500;600;700&family=Raleway:wght@300;400;500&display=swap" rel="stylesheet">
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        
        body {
            background: linear-gradient(135deg, #ffecb3 0%, #ffcc80 100%);
            min-height: 100vh;
            display: flex;
            justify-content: center;
            align-items: center;
            font-family: 'Raleway', sans-serif;
            padding: 20px;
            color: #5d4037;
        }
        
        .certificate {
            width: 850px;
            max-width: 95%;
            background: 
                radial-gradient(circle at 20% 80%, rgba(255, 152, 0, 0.15) 0%, transparent 50%),
                radial-gradient(circle at 80% 20%, rgba(255, 87, 34, 0.15) 0%, transparent 50%),
                linear-gradient(135deg, #ffffff 0%, #fff3e0 100%);
            border: 4px solid #ff9800;
            padding: 50px 40px;
            text-align: center;
            box-shadow: 
                0 15px 35px rgba(255, 152, 0, 0.25),
                0 5px 15px rgba(0, 0, 0, 0.1);
            position: relative;
            overflow: hidden;
        }
        
        .sirius-logo {
            position: absolute;
            width: 120px;
            height: 120px;
            z-index: 1;
            opacity: 0.9;
        }
        
        .logo-top-left {
            top: 30px;
            left: 30px;
        }
        
        .logo-top-right {
            top: 30px;
            right: 30px;
        }
        
        .logo-bottom-left {
            bottom: 30px;
            left: 30px;
        }
        
        .logo-bottom-right {
            bottom: 30px;
            right: 30px;
        }
        
        .logo-center {
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            width: 180px;
            height: 180px;
            opacity: 0.07;
            z-index: 0;
        }
        
        .sirius-star {
            fill: none;
            stroke: #ff5722;
            stroke-width: 3;
        }
        
        .sirius-text {
            font-family: 'Quicksand', sans-serif;
            font-size: 14px;
            font-weight: 700;
            fill: #ff5722;
            text-anchor: middle;
        }
        
        .header {
            margin-bottom: 40px;
            position: relative;
            z-index: 1;
        }
        
        .title {
            font-family: 'Quicksand', sans-serif;
            font-size: 52px;
            font-weight: 700;
            background: linear-gradient(135deg, #e65100 0%, #ff6d00 50%, #ff9800 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            margin-bottom: 15px;
            letter-spacing: 3px;
            text-shadow: 2px 2px 4px rgba(0,0,0,0.1);
        }
        
        .subtitle {
            font-size: 26px;
            color: #ff5722;
            font-weight: 600;
            position: relative;
            display: inline-block;
            padding: 0 20px;
        }
        
        .subtitle:before, .subtitle:after {
            content: "✦";
            position: absolute;
            top: 50%;
            transform: translateY(-50%);
            color: #ff9800;
            font-size: 20px;
        }
        
        .subtitle:before {
            left: -15px;
        }
        
        .subtitle:after {
            right: -15px;
        }
        
        .energy-line {
            width: 80%;
            height: 3px;
            background: linear-gradient(to right, transparent, #ff9800, #ff5722, #ff9800, transparent);
            margin: 30px auto;
            position: relative;
            border-radius: 2px;
        }
        
        .recipient {
        font-family: 'Quicksand', sans-serif;
            font-size: 38px;
            font-weight: 700;
            color: #5d4037;
            margin: 40px 0 30px;
            padding: 25px;
            background: rgba(255, 152, 0, 0.1);
            border-radius: 12px;
            display: inline-block;
            position: relative;
            z-index: 1;
            box-shadow: 0 5px 15px rgba(255, 152, 0, 0.2);
        }
        
        .artistic-underline {
            width: 60%;
            height: 2px;
            background: linear-gradient(to right, transparent, #ff9800, #ff5722, #ff9800, transparent);
            margin: 10px auto 30px;
            border-radius: 1px;
        }
        
        .details {
            font-size: 22px;
            line-height: 1.7;
            color: #6d4c41;
            margin-bottom: 30px;
            position: relative;
            z-index: 1;
            font-weight: 500;
        }
        
        .award-info {
            margin: 40px 0;
            padding: 30px;
            background: rgba(255, 152, 0, 0.15);
            border-radius: 12px;
            position: relative;
            z-index: 1;
            border: 2px solid rgba(255, 152, 0, 0.3);
            box-shadow: 0 5px 15px rgba(255, 152, 0, 0.15);
        }
        
        .award-title {
            font-family: 'Quicksand', sans-serif;
            font-size: 28px;
            font-weight: 700;
            color: #e65100;
            margin-bottom: 15px;
        }
        
        .award-desc {
            font-size: 20px;
            color: #6d4c41;
            line-height: 1.6;
        }
        
        .signature {
            margin-top: 50px;
            font-size: 18px;
            color: #6d4c41;
            position: relative;
            z-index: 1;
        }
        
        .signature-name {
            font-weight: 700;
            margin-top: 10px;
            font-size: 22px;
            color: #5d4037;
            font-family: 'Quicksand', sans-serif;
        }
        
        .signature-line {
            width: 250px;
            height: 2px;
            background: linear-gradient(to right, #ff9800, #ff5722);
            margin: 5px auto;
            border-radius: 1px;
        }
        
        .date {
            margin-top: 30px;
            font-size: 18px;
            color: #8d6e63;
            position: relative;
            z-index: 1;
            font-weight: 500;
        }
        
        .creative-dots {
            position: absolute;
            width: 100%;
            height: 100%;
            top: 0;
            left: 0;
            pointer-events: none;
            z-index: 0;
        }
        
        .dot {
            position: absolute;
            width: 8px;
            height: 8px;
            background: #ff9800;
            border-radius: 50%;
            opacity: 0.4;
        }
        
        .harp-symbol {
            position: absolute;
            width: 100px;
            height: 150px;
            opacity: 0.1;
            z-index: 0;
        }
        
        .harp-left {
            top: 100px;
            left: 60px;
            transform: rotate(-5deg);
        }
        
        .harp-right {
            bottom: 100px;
            right: 60px;
            transform: rotate(5deg);
        }
        
        .harp-line {
            stroke: #ff5722;
            stroke-width: 2;
            fill: none;
        }
        
        @media (max-width: 768px) {
            .certificate {
                padding: 40px 25px;
            }
            
            .title {
                font-size: 42px;
            }
            
            .subtitle {
                font-size: 22px;
            }
            
            .recipient {
                font-size: 30px;
                padding: 20px;
            }
            
            .sirius-logo {
                width: 80px;
                height: 80px;
            }
            
            .logo-center {
                width: 120px;
                height: 120px;
            }
                .logo-top-left, .logo-top-right, .logo-bottom-left, .logo-bottom-right {
                display: none;
            }
        }
    </style>
</head>
<body>
    <div class="certificate">

        <!-- Символы арфы -->
        <svg class="harp-symbol harp-left" viewBox="0 0 100 150">
            <path class="harp-line" d="M30,20 L30,130 M70,20 L70,130 M30,20 Q50,40 70,20 M30,130 Q50,110 70,130" />
            <line class="harp-line" x1="35" y1="40" x2="65" y2="40" />
            <line class="harp-line" x1="35" y1="60" x2="65" y2="60" />
            <line class="harp-line" x1="35" y1="80" x2="65" y2="80" />
            <line class="harp-line" x1="35" y1="100" x2="65" y2="100" />
        </svg>
        
        <svg class="harp-symbol harp-right" viewBox="0 0 100 150">
            <path class="harp-line" d="M30,20 L30,130 M70,20 L70,130 M30,20 Q50,40 70,20 M30,130 Q50,110 70,130" />
            <line class="harp-line" x1="35" y1="40" x2="65" y2="40" />
            <line class="harp-line" x1="35" y1="60" x2="65" y2="60" />
            <line class="harp-line" x1="35" y1="80" x2="65" y2="80" />
            <line class="harp-line" x1="35" y1="100" x2="65" y2="100" />
        </svg>
        
        <!-- Декоративные точки -->
        <div class="creative-dots">
            <div class="dot" style="top: 15%; left: 10%;"></div>
            <div class="dot" style="top: 25%; left: 85%;"></div>
            <div class="dot" style="top: 65%; left: 15%;"></div>
            <div class="dot" style="top: 75%; left: 90%;"></div>
            <div class="dot" style="top: 40%; left: 5%;"></div>
            <div class="dot" style="top: 50%; left: 95%;"></div>
            <div class="dot" style="top: 85%; left: 20%;"></div>
            <div class="dot" style="top: 10%; left: 70%;"></div>
        </div>
        
        <div class="header">
            <h1 class="title">ГРАМОТА</h1>
            <div class="subtitle">в области музыкального искусства</div>
        </div>
        
        <div class="energy-line"></div>
        
        <div class="recipient">АНАСТАСИЯ КУЗНЕЦОВА</div>
        <div class="artistic-underline"></div>
        
        <div class="details">
            Награждается за выдающиеся достижения<br>
            в области музыкального искусства, высокое исполнительское мастерство<br>
            и творческий подход к исполнению произведений
        </div>
        
        <div class="award-info">
            <div class="award-title">Международный конкурс "Волшебные струны"</div>
            <div class="award-desc">
                Лауреат I степени в номинации "Инструментальное исполнение"<br>
                Специальный приз "Сириус" за артистизм и эмоциональность
            </div>
        </div>
        
        <div class="energy-line"></div>
        
        <div class="signature">
            Председатель жюри<br>
            <div class="signature-line"></div>
            <div class="signature-name">А.С. МЕЛОДИН</div>
        </div>
        
        <div class="date">15 ноября 2023 года</div>
    </div>
</body>
</html>
        `
}, {
    name: 'второй шаблон',
    img: img2,
    template:`<!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Научная грамота</title>
    <link href="https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@300;400;500;600&family=Inter:wght@300;400;500;600&display=swap" rel="stylesheet">
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        
        body {
            background: linear-gradient(135deg, #e0f7fa 0%, #b2ebf2 100%);
            min-height: 100vh;
            display: flex;
            justify-content: center;
            align-items: center;
            font-family: 'Inter', sans-serif;
            padding: 20px;
            color: #006064;
        }
        
        .certificate {
            width: 800px;
            max-width: 95%;
            background: 
                radial-gradient(circle at 20% 80%, rgba(0, 150, 136, 0.1) 0%, transparent 50%),
                radial-gradient(circle at 80% 20%, rgba(0, 188, 212, 0.1) 0%, transparent 50%),
                linear-gradient(135deg, #ffffff 0%, #fafafa 100%);
            border: 2px solid #00897b;
            padding: 50px 40px;
            text-align: center;
            box-shadow: 
                0 10px 30px rgba(0, 150, 136, 0.15),
                0 5px 15px rgba(0, 0, 0, 0.05);
            position: relative;
            overflow: hidden;
        }
        
        .binary-pattern {
            position: absolute;
            width: 100%;
            height: 100%;
            top: 0;
            left: 0;
            opacity: 0.03;
            z-index: 0;
            font-family: 'Roboto Mono', monospace;
            font-size: 14px;
            color: #00897b;
            pointer-events: none;
        }
        
        .digital-element {
            position: absolute;
            z-index: 0;
            opacity: 0.1;
            font-family: 'Roboto Mono', monospace;
            font-weight: 600;
            color: #00897b;
        }
        
        .digital-1 {
            top: 60px;
            left: 60px;
            font-size: 40px;
            transform: rotate(-15deg);
        }
        
        .digital-0 {
            bottom: 60px;
            right: 60px;
            font-size: 40px;
            transform: rotate(15deg);
        }
        
        .code-snippet {
            position: absolute;
            top: 120px;
            right: 50px;
            font-family: 'Roboto Mono', monospace;
            font-size: 12px;
            color: #00897b;
            opacity: 0.05;
            text-align: left;
            line-height: 1.4;
        }
        
        .geometric-border {
            position: absolute;
            width: 100%;
            height: 100%;
            top: 0;
            left: 0;
            pointer-events: none;
            z-index: 0;
        }
        
        .border-corner {
            position: absolute;
            width: 30px;
            height: 30px;
        }
        
        .corner-tl {
            top: 20px;
            left: 20px;
            border-top: 2px solid #00897b;
            border-left: 2px solid #00897b;
        }
        
        .corner-tr {
            top: 20px;
            right: 20px;
            border-top: 2px solid #00897b;
            border-right: 2px solid #00897b;
        }
        
        .corner-bl {
            bottom: 20px;
            left: 20px;
            border-bottom: 2px solid #00897b;
            border-left: 2px solid #00897b;
        }
        
        .corner-br {
            bottom: 20px;
            right: 20px;
            border-bottom: 2px solid #00897b;
            border-right: 2px solid #00897b;
        }
        
        .header {
            margin-bottom: 40px;
            position: relative;
            z-index: 1;
        }
        
        .title {
            font-family: 'Roboto Mono', monospace;
            font-size: 48px;
            font-weight: 600;
            color: #00897b;
            margin-bottom: 15px;

letter-spacing: 2px;
        }
        
        .subtitle {
            font-size: 22px;
            color: #00695c;
            font-weight: 500;
            position: relative;
            display: inline-block;
            padding: 0 15px;
        }
        
        .subtitle:before, .subtitle:after {
            content: "//";
            position: absolute;
            top: 50%;
            transform: translateY(-50%);
            color: #4db6ac;
            font-family: 'Roboto Mono', monospace;
            font-size: 16px;
        }
        
        .subtitle:before {
            left: -20px;
        }
        
        .subtitle:after {
            right: -20px;
        }
        
        .divider {
            width: 70%;
            height: 1px;
            background: linear-gradient(to right, transparent, #00897b, transparent);
            margin: 30px auto;
            position: relative;
        }
        
        .divider:before {
            content: "●";
            position: absolute;
            top: -6px;
            left: 50%;
            transform: translateX(-50%);
            background: white;
            padding: 0 10px;
            color: #00897b;
            font-size: 12px;
        }
        
        .recipient {
            font-family: 'Inter', sans-serif;
            font-size: 36px;
            font-weight: 600;
            color: #004d40;
            margin: 40px 0 30px;
            padding: 20px;
            display: inline-block;
            position: relative;
            z-index: 1;
        }
        
        .recipient:before, .recipient:after {
            content: "";
            position: absolute;
            left: 0;
            right: 0;
            height: 1px;
            background: #80cbc4;
        }
        
        .recipient:before {
            top: 0;
        }
        
        .recipient:after {
            bottom: 0;
        }
        
        .details {
            font-size: 20px;
            line-height: 1.7;
            color: #00695c;
            margin-bottom: 30px;
            position: relative;
            z-index: 1;
            font-weight: 400;
        }
        
        .achievement-box {
            margin: 40px 0;
            padding: 25px;
            background: rgba(0, 150, 136, 0.08);
            border-radius: 8px;
            position: relative;
            z-index: 1;
            border-left: 4px solid #00897b;
        }
        
        .achievement-title {
            font-family: 'Roboto Mono', monospace;
            font-size: 24px;
            font-weight: 600;
            color: #00796b;
            margin-bottom: 10px;
        }
        
        .achievement-desc {
            font-size: 18px;
            color: #00695c;
            line-height: 1.6;
        }
        
        .signature {
            margin-top: 50px;
            font-size: 18px;
            color: #00695c;
            position: relative;
            z-index: 1;
        }
        
        .signature-name {
            font-weight: 600;
            margin-top: 10px;
            font-size: 20px;
            color: #004d40;
            font-family: 'Inter', sans-serif;
        }
        
        .signature-line {
            width: 200px;
            height: 1px;
            background: #00897b;
            margin: 5px auto;
        }
        
        .date {
            margin-top: 30px;
            font-size: 16px;
            color: #00796b;
            position: relative;
            z-index: 1;
            font-family: 'Roboto Mono', monospace;
        }
        
        .scientific-symbols {
            position: absolute;
            width: 100%;
            height: 100%;
            top: 0;
            left: 0;
            pointer-events: none;
            z-index: 0;
        }
        
        .symbol {
            position: absolute;
            font-family: 'Roboto Mono', monospace;
            color: #4db6ac;
            opacity: 0.1;
            font-size: 24px;
        }
        
        @media (max-width: 768px) {
            .certificate {

padding: 40px 25px;
            }
            
            .title {
                font-size: 38px;
            }
            
            .subtitle {
                font-size: 18px;
            }
            
            .recipient {
                font-size: 28px;
                padding: 15px;
            }
            
            .digital-1, .digital-0 {
                display: none;
            }
            
            .code-snippet {
                display: none;
            }
        }
    </style>
</head>
<body>
    <div class="certificate">
        <!-- Бинарный паттерн фона -->
        <div class="binary-pattern">
            01010101 01101110 01101100 01101111 01100011 01101011 01101001 01101110 01100111 00100000 01110000 01101111 01110100 01100101 01101110 01110100 01101001 01100001 01101100
        </div>
        
        <!-- Геометрическая рамка -->
        <div class="geometric-border">
            <div class="border-corner corner-tl"></div>
            <div class="border-corner corner-tr"></div>
            <div class="border-corner corner-bl"></div>
            <div class="border-corner corner-br"></div>
        </div>
        
        <!-- Цифровые элементы -->
        <div class="digital-element digital-1">1</div>
        <div class="digital-element digital-0">0</div>
        
        <!-- Фрагмент кода -->
        <div class="code-snippet">
            if (knowledge > 0) {<br>
            &nbsp;&nbsp;progress = true;<br>
            }<br>
            while (curiosity) {<br>
            &nbsp;&nbsp;discover();<br>
            }
        </div>
        
        <!-- Научные символы -->
        <div class="scientific-symbols">
            <div class="symbol" style="top: 15%; left: 10%;">∑</div>
            <div class="symbol" style="top: 25%; left: 85%;">π</div>
            <div class="symbol" style="top: 65%; left: 15%;">∞</div>
            <div class="symbol" style="top: 75%; left: 90%;">∆</div>
            <div class="symbol" style="top: 40%; left: 5%;">∫</div>
            <div class="symbol" style="top: 50%; left: 95%;">∂</div>
        </div>
        
        <div class="header">
            <h1 class="title">ГРАМОТА</h1>
            <div class="subtitle">в области научных достижений</div>
        </div>
        
        <div class="divider"></div>
        
        <div class="recipient">ДАНИИЛ ПОПОВ</div>
        
        <div class="details">
            Награждается за выдающиеся успехи в научно-исследовательской деятельности,<br>
            разработку инновационных решений и значительный вклад в развитие науки
        </div>
        
        <div class="achievement-box">
            <div class="achievement-title">Всероссийская олимпиада по информатике</div>
            <div class="achievement-desc">
                Победитель в номинации "Лучший алгоритмический проект"<br>
                Разработка эффективного алгоритма оптимизации вычислительных процессов
            </div>
        </div>
        
        <div class="divider"></div>
        
        <div class="signature">
            Научный руководитель<br>
            <div class="signature-line"></div>
            <div class="signature-name">ПРОФ. М.В. ЛОГИНОВ</div>
        </div>
        
        <div class="date">20 декабря 2023</div>
    </div>
</body>
</html>`
}]