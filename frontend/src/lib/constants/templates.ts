import img1 from '../../assets/template1.jpg'
import img2 from '../../assets/template2.jpg'
import img3 from '../../assets/template3.png'
import img4 from '../../assets/template4.png'
import img5 from '../../assets/template5.png'
import { ITemplate } from '../types'

export const TEMPLATES: ITemplate[] =[{
    name: 'Музыкальная грамота',
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
        
        <div class="recipient">{{fio}}</div>
        <div class="artistic-underline"></div>
        
        <div class="details">
            Награждается за выдающиеся достижения<br>
            в области музыкального искусства, высокое исполнительское мастерство<br>
            и творческий подход к исполнению произведений
        </div>
        
        <div class="award-info">
            <div class="award-title">Международный конкурс "Волшебные струны"</div>
            <div class="award-desc">
                {{role}} {{rank}} степени в номинации "Инструментальное исполнение"<br>
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
    name: 'Грамота за выступление',
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
        
        <div class="recipient">{{fio}}</div>
        
        <div class="details">
            Награждается за выдающиеся успехи в научно-исследовательской деятельности,<br>
            разработку инновационных решений и значительный вклад в развитие науки
        </div>
        
        <div class="achievement-box">
            <div class="achievement-title">Всероссийская олимпиада по информатике</div>
            <div class="achievement-desc">
                {{role}} в номинации "Лучший алгоритмический проект"<br>
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
},{
    name: 'Наука', 
    img: img3,
    template: `
<!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://fonts.googleapis.com/css?family=JejuMyeongjo&display=swap" rel="stylesheet" />
    <title>Грамота</title>
    <style>
        * {
            box-sizing: border-box;
            margin: 0;
            padding: 0;
        }
        
        body {
            font-family: 'JejuMyeongjo', serif;
            background: rgba(229,243,241,0.93);
            display: flex;
            justify-content: center;
            align-items: center;
            min-height: 100vh;
            padding: 20px;
        }
        .certificate-container {
            width: 100%;
            max-width: 1200px;
            height: auto;
            min-height: 800px;
            aspect-ratio: 4 / 5;
            background: linear-gradient(to bottom, 
              rgba(229,243,241,0.93) 0%, 
              rgba(210,235,231,0.93) 30%, 
              rgba(190,225,220,0.93) 70%, 
              rgba(229,243,241,0.93) 100%);
            position: relative;
            overflow: hidden;
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
            margin: 0 auto;
        }

        /* Фоновые круги - адаптивные */
        .circle-bg {
            background: rgba(255,255,255,0.5);
            border-radius: 100%;
            position: absolute;
        }
        
        .circle-bg-1 { width: 20.83%; height: 14.7%; top: -6.13%; left: -4.34%; }
        .circle-bg-2 { width: 15.63%; height: 11.37%; top: 4.83%; left: 49.48%; }
        .circle-bg-3 { width: 23.44%; height: 16.37%; top: 14.83%; left: -25.68%; }
        .circle-bg-4 { width: 20.83%; height: 14.7%; top: 14.83%; left: 14.79%; }
        .circle-bg-5 { width: 15.63%; height: 11.37%; top: 24.83%; left: 41.67%; }
        .circle-bg-6 { width: 20.83%; height: 14.7%; top: 29.83%; left: -3.44%; }
        .circle-bg-7 { width: 13.02%; height: 9.7%; top: 29.83%; left: 71.77%; }
        .circle-bg-8 { width: 18.23%; height: 13.03%; top: 39.73%; left: 23.44%; }
        .circle-bg-9 { width: 13.02%; height: 9.7%; top: 42.9%; left: 54.74%; }
        .circle-bg-10 { width: 20.83%; height: 14.7%; top: 47.9%; left: -3.44%; }
        .circle-bg-11 { width: 15.63%; height: 11.37%; top: 57.17%; left: 24.17%; }
        .circle-bg-12 { width: 10.42%; height: 8.03%; top: 57.17%; left: 74.38%; }
        .circle-bg-13 { width: 13.02%; height: 9.7%; top: 60.97%; left: 49.48%; }
        .circle-bg-14 { width: 18.23%; height: 13.03%; top: 65.97%; left: -1.46%; }
        .circle-bg-15 { width: 13.02%; height: 9.7%; top: 76.53%; left: 33.85%; }
        .circle-bg-16 { width: 10.42%; height: 8.03%; top: 76.93%; left: 63.96%; }
        .circle-bg-17 { width: 13.02%; height: 9.7%; top: 85.27%; left: 6.98%; }
        .circle-bg-18 { width: 23.44%; height: 16.37%; top: 38.63%; left: -29.27%; }
        .circle-bg-19 { width: 20.83%; height: 14.7%; top: 56.93%; left: -27.97%; }
        .circle-bg-20 { width: 10.42%; height: 8.03%; top: 94.6%; left: 32.92%; }
        .circle-bg-21 { width: 15.63%; height: 11.37%; top: 84.6%; left: -22.76%; }
        .circle-bg-22 { width: 13.02%; height: 9.7%; top: 98.37%; left: -7.14%; }
        
        /* Текстовые элементы - адаптивные */
        .title {
            color: rgba(72,55,55,1);
            position: absolute;
            top: 7%;
            left: 0;
            width: 100%;
            font-weight: normal;
            font-size: clamp(2rem, 8vw, 8rem);
            text-align: center;
            margin: 0;
        }
        
        .award-text {
            color: rgba(72,55,55,1);
            position: absolute;
            top: 24%;
            left: 50%;
            transform: translateX(-50%);
            font-weight: normal;
            font-size: clamp(1.2rem, 3.5vw, 3.5rem);
            text-align: center;
            width: 80%;
            max-width: 500px;
        }
        
        .recipient-name {
            color: rgba(72,55,55,1);
            position: absolute;
            top: 30%;



            left: 0;
            width: 100%;
            font-weight: normal;
            font-size: clamp(1.5rem, 4.5vw, 4.5rem);
            text-align: center;
            padding: 0 5%;
        }
        
        .role {
            color: rgba(72,55,55,1);
            position: absolute;
            top: 43%;
            left: 50%;
            transform: translateX(-50%);
            font-weight: normal;
            font-size: clamp(1.2rem, 3.5vw, 3.5rem);
            text-align: center;
            width: 80%;
            max-width: 300px;
        }
        
        .location {
            color: rgba(72,55,55,1);
            position: absolute;
            top: 63%;
            left: 50%;
            transform: translateX(-50%);
            font-weight: normal;
            font-size: clamp(1.3rem, 4vw, 4rem);
            text-align: center;
            width: 80%;
            max-width: 450px;
        }
        
        .signatory {
            color: rgba(72,55,55,1);
            position: absolute;
            top: 85%;
            left: 5%;
            font-weight: normal;
            font-size: clamp(1.2rem, 3.5vw, 3.5rem);
            text-align: center;
            width: 40%;
            max-width: 350px;
        }
        
        .signature-line-1 {
            width: 70%;
            height: 3px;
            background: rgba(13,210,249,1);
            position: absolute;
            top: 36%;
            left: 15%;
        }
        
        .signature-line-2 {
            width: 25%;
            height: 3px;
            background: rgba(13,210,249,1);
            position: absolute;
            top: 88%;
            left: 50%;
            transform: translateX(-50%);
        }
        
        .stamp {
            width: 20%;
            aspect-ratio: 1;
            background: transparent;
            position: absolute;
            top: 74%;
            left: 70%;
            transform: rotate(-45deg);
            border: 2px dashed rgba(13,210,249,1);
            display: flex;
            justify-content: center;
            align-items: center;
            font-size: clamp(0.5rem, 1.5vw, 1.2rem);
            color: rgba(72,55,55,0.7);
        }
        
        .stamp::after {
            content: "Печать";
            transform: rotate(45deg);
        }
        
        /* Стили для рисунка */
        .decoration-image {
            position: absolute;
            width: 60%;
            height: auto;
            opacity: 0.4;
            transform: rotate(-45deg);
        }
        
        .decoration-left {
            top: 45%;
            left: 60%;
        }
     
        /* Медиа-запросы для очень маленьких экранов */
        @media (max-width: 480px) {
            .certificate-container {
                aspect-ratio: 3 / 4;
            }
            
            .title {
                top: 5%;
            }
            
            .award-text {
                top: 20%;
            }
            
            .recipient-name {
                top: 28%;
            }
            
            .signature-line-1 {
                top: 32%;
            }
            
            .role {
                top: 40%;
            }
            
            .location {
                top: 58%;
            }
            
            .stamp {
                top: 70%;
            }
            
            .signatory {
                top: 82%;
            }
            
            .signature-line-2 {
                top: 85%;
            }
            
            .decoration-image {
                width: 20%;
            }
        }
    </style>
</head>
<body>
    <div class="certificate-container">
        <!-- Фоновые круги -->
        <div class="circle-bg circle-bg-1"></div>
        <div class="circle-bg circle-bg-2"></div>
        <div class="circle-bg circle-bg-3"></div>
        <div class="circle-bg circle-bg-4"></div>
        <div class="circle-bg circle-bg-5"></div>
        <div class="circle-bg circle-bg-6"></div>
        <div class="circle-bg circle-bg-7"></div>



        <div class="circle-bg circle-bg-8"></div>
        <div class="circle-bg circle-bg-9"></div>
        <div class="circle-bg circle-bg-10"></div>
        <div class="circle-bg circle-bg-11"></div>
        <div class="circle-bg circle-bg-12"></div>
        <div class="circle-bg circle-bg-13"></div>
        <div class="circle-bg circle-bg-14"></div>
        <div class="circle-bg circle-bg-15"></div>
        <div class="circle-bg circle-bg-16"></div>
        <div class="circle-bg circle-bg-17"></div>
        <div class="circle-bg circle-bg-18"></div>
        <div class="circle-bg circle-bg-19"></div>
        <div class="circle-bg circle-bg-20"></div>
        <div class="circle-bg circle-bg-21"></div>
        <div class="circle-bg circle-bg-22"></div>
        
        <img class="decoration-image decoration-left" width="512" height="512" alt="" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAgAAAAIACAYAAAD0eNT6AAAACXBIWXMAAA7DAAAOwwHHb6hkAAAAGXRFWHRTb2Z0d2FyZQB3d3cuaW5rc2NhcGUub3Jnm+48GgAAIABJREFUeJzs3Xe4JFW19/HvmRyYyJDzgGQGJQlIFDGARAUkikQRBV/FhOiAoqCIXlS8oqISVAQUJCgIApIEgSHnNOQ0icnx9PvHOn05nDmhu9baVdXdv8/z7Afk3uq9qk9X7V279l4bREREmsdRwClFByEiIiL52RSYC1RQJ0BERKQljAGexRr/alEnQEREpIn1A/7Ouxt/dQJERESa3Kl03/irEyAiItKkPgQspvcOgDoBIiIiTWQN4C36bvzVCRAREWkSQ4B7qb3xVydARESkCfyG+ht/dQJEREQa2FFkb/zVCRAREWlAnZP9qBMgIiLSArpL9qNOgIiISBPrLdmPOgEiIiJN6lTSNP7qBIiIiJRUrcl+1AkQERFpEqtTX7IfdQJEREQa3BDgHvJr/NUJEBERKQFPsh91AkRERBpQRLIfdQJEREQaSGSyH3UCREREGkCKZD/qBIiIiJRYymQ/6gSIiIiU1ETiGuwXAz+rWr6e7tRFRERaU2SynxuAocBVQZ+nkQAREZEEIpP9vACM6/jcQagTICIiUkqRyX7mA1t0+Xx1AkREREooMtnPUT3UoU6AiIhIiUQm+7moj7rUCRARESmBwdj7+ohGeBI26a+WOlMsM9TqABERkTqsAtyBr/GdBoyvo06NBIiIiJTAAOBMsjW6S4DdMtSpToCIiEhJHATMpr4G91RHfeoEiIiIlMT6wKPU1tDeAPR31qdOgIiISEmMAC6j9wa2c7IfL3UCRERESqINOBFYyNINa3fJfrzUCRARESmRHYDXeHej2lOyHy91AkREREqk81LBCxPXpU6AiIhIiQzCku0MyaEuJQsSERFpURoJEBERaVHqBIiIiNRpbNEBBNHrABERkRp9CJgBfKroQIJoJEBERKQPqwNv8U4jdx7WgDY6dQJERER6MAS4h6UbuduBlQuMK4o6ASIiIt34DT03cm8CuxQXWhh1AkRERDo5lL4buUXA17A0v41MnQARERFgU2AutTd0fwNGFxJpHHUCRESkpY0BnqX+hu5JYOMC4o2kToCIiLSkfvjWyM+i8ZcKqhMgIiItZyIxjd1PgAE5xx5JyYJERKRlfAhYTExDdwPQP9/ww2kkQEREml7XZD+e8gIwLt/wk1EnQEREmlZPyX6ylPnAFvmGn5w6ASIi0pR6S/ZTbzkq59jz0jCdgEZPyCAiIn1bAVgHWK7j30cDC4Hp2MY9rwMPAvN6+YwjgPOD4vktcGTQZ5XRYOAK4GPBn/sN4MzgzxQRkSYyCsvO92vgCWp7wlwI/Bf4KbAX1ohVbYZ1DiKeZCdhrxKanVYHiIhIbjYDfgXMxt/QTMc6A1sBzwV8XgWYCqyV7OzLR50AERFJamvgVuIbmsiyBNgt1RdQYuoEiIhIuNHA74B2im/g+yqnJfoOGoE6ASIiEmYb4CWKb9hrKddhqYNbmToBIiLidiSwgOIb9lrKZGDZJN9C41EnQEREMvsKjTHkX8FWDjRbsh8vdQJERKRux1N8o15PadZkP14NkyxIRESKtz+N8+RfIS5pULPSSICIiPRpQ2AWxTfqtZZJwNAk30RzUSdARER6NAC4j+Ib9VrLNGB8km+iOel1gIiIdOubFN+o11NOTfItNDeNBIiIyLssD8yk+Ea9nrIA20tA6qORABER+T8/o/gGPWsnYI8E30ezy3UkQNsBi4iU07LAi8CwwM98ANv29zXsiXNFYFtgzcA6qhYCnwSuTvDZzUxbCYuItLiTiHn6mwucBazaS12bAn8mfpmhRgKy0ZwAEZEWNgn/Df9+6nu63wF4I6BedQL81AkQEWlBa+C/0d8IDM9Q9+rA4wH1qxPgNwR4DnUCRERaxlH4bvDPAeMc9a8APOKMobtOgFYH1G4kcDnxjX+1aHWAiEgJnY/v5r5zQAzqBBRnA+Ax0jX+i4Cv5XY2IiJSs3vIfnP/Z2AcK6HXAXk7BJhDusb/JWDr3M5GRETqMp3sN/hDg2PRSEA+BmDL9FI1/BXgFmzpp4iIlNBwfDf5FRLEpJGAtFYD/kO6hr8dOAPon9cJiYhI/VYi+41+dsK4NBKQxo5YYqZUjf9MLCGTiIiU3Bpkv9m/mDg2jQTEacOy8y0mXeP/EPCevE5IRER8yjoCUKWRAL/US/wqwB/IlgdCREQKsgy+G/9yOcSokYDsJgBPk67hXwAcn9vZiIhIKM8qgENyilEjAfU7GBulSdX4vwxsk9vZiIhIOM8+ANfmGKdGAmozCDiXdA1/BfgXsHxeJyQiIml4MwFum2OsGgno3SrAnaRr+NuBc4CBeZ2QiIikcyy+RuFRbKJZXjQS0L1dgDdJ1/jPAPbO7WxERCS5NfE3Dldj2eXyok7AO7TET0REMnsIfyNxKeoE5G0UcCXpGv4KcDEwLK8TEhGRfH2FmMbicvJ9P9zKcwK0i5+IiLgtD8wlpuHQSEB62sVPRETC/IK4BkQjAWloFz8REQk1APgLsQ2JRgJirYp28RMRkUD9gT+SplHRSECMHdEufiIiEihl469OgF8bcCI2IS/V3+dxbEKhiIi0iDwaf3UCstMufiIiEi7Pxl+dgPppiZ+IiIQrovFXJ6B22sVPRETCFdn4qxPQOy3xExGRJMrQ+KsT0D3t4iciIkmUqfFXJ+DddiT9Er9POGMUEZEGVMbGX50ALfETEZGEytz4t3InYARa4iciIokMAC4jvmFJkY62ldIGTwCeCq67axzH1/+ViIhIM0j15H9Wx+efnuCzW2EkQEv8REQkmdSNf5U6AbV3ArTET0REksqr8a9SJ6DvToCW+ImISFKp3vl/v496UzzZNsucgFOAN4M/t3OZAeyd4PsQEZEGkfeTf1caCci/aImfiEiLK7rxr1InIL+iJX4iIi2uLI1/lToBaYt28RMRkdI1/lXqBKQpWuInIiL0x4aBy9b4V6kTEFtuQUv8RERaXtkb/yp1AvylusQvzxURIiJSQo3S+FepE5C9aBc/EREBGq/xr1InoP6iJX4iIgI0buNfpU5A7UVL/EREBGj8xr9KnYDei5b4iYjI/2mWxr9KnYDui5b4iYjI/xmA5cSPbjD7yu2fmvYOWLpsl2PsIiJSYs325N+VRgLeXX6eY9wiIlJSzfrk35VGAt4pM4AhOcYtIiIl0yqNf5U6Ae8UbesrItKimn3YvyfN8DpgZeAVZ8x6DSAi0oJa7cm/q2YYCdgeWOKI994cYxURkRJo1Sf/rpphJOASR6wLgWE5xioiIgVq9Sf/rhp9JGCCM9Ztc4pTREQKpCf/7jX6SMAzjjj3ySlGEREpiJ78e9fIIwEXO2I8Iof4RESkIHryr02jjgT80BHflxLHJiIiBdGTf30acSTA03H5ZsK4RESkIMOAa9CTf70abSTgt464PpsoJhERKcgY4HbU+GfVSJ2A+x0x7ZsgHhERKcjqwGPEN2DNOuzfk0Z4HbAy0O6IZ/vAWEREpEAbAS+hxj9K2TsB3vhWDopDREQKdBAwEzX+0craCVgdmOOI4Wln/SIiUrAhwDnEN1IVWuedf1/KNidgCPBfZ/2/yVi3iIiUwAbAw6Rp/Fv9yb+rFCMBVwEj6oxjFPD3gLo/XWe9IiJSAv2BzwOzUeOfpxSdgEeoPSf/DsDjAXXOAUZn+QJERKQ4WwP3kabhV+PftxSdgAr2VH8osEKX+lbEntavC6xLw/8iIg1kHPBrfHvAq/GPkaoTUC1zsdUc8xJ9/hbxX4mIiEQbDnwZmEraRud7eZ1Qk0jdCUhVbk/xZYiISJyRwMnAW6RvFL6R0zk1m9sovkGvp7RT+3wDERHJ2TjgNGA6+TQIX8jntJrORIpv0Ostv0/xRYiISHb9gd2Ay4AF5NMYzAcOzOPkmlAjNv4vY3tEiIhICayHTbx7mXwbg6nYkjKpXyM2/guBD6T4MkREpDYDgJ2BHwFPUExj8ATW8ZD6NWLjXwGOSfFliIhIz/oDmwBHA5eQz3v93sqV2ORCqV+jNv7fSvFllF1b0QGIdGM4loFrTEfp6d9HAst0HDMMGNzx76OAfh1lVA31tQNvd/lvb3f895nYmvLqP2cBizv+uaDjv8/o+OesTmVGx2fMwoYWxbRhG7RsjCXr2RrYinI0uIuBU7HXDZViQ2lIE7Hvr5FUgK8AZxcdSBHUAZC8jQZWBdbo+OeqWIOwWse/r4Zt4tFMFmAdgVo6CzM7lbc7SvV/z8878IwGYJnaqn/f9bF8/Ot3lOHFhdajycDBwJ0Fx9GoGrHxn4ONOv2p6ECKog6ApLAydqNft+Of62GN/BqU8+bfKBbyTmdgeqd/n8s7IxJzscxo87Eb3ELeGbWYgY1qzOCdUY2etPFOHvQBvLMZy0hsVGVUx/+9+u/LYn/3VbDGv5/zXPN0EbbMr+sokNSmERv/R4D9sT0DRCSDYdjw7THAL4A7sJto0e/zVFRqKS9iywolu4kU/3esp8zGEkdVXxeKSA36AxOwxv63wKPYU2XRF7SKSr1lEXAO5Zh30MgmEv+3uQb4OfE7OM4Ffoa9YhSRPgwDPozlPr8JG0Yu+satouItN2MrDsRnIvF/m6uAQR2fPxb4KnAv9toq62dOwvaIWD7BdyDSNAZhSU9OBW4lv0xrKip5lEnAXkiEicT/fTo3/l2tBhwLnAfcRc+vGacBdwO/Az4DrBV2xiJNaFXswroamzBW9E1aRSW6PADsjSY8R5lI/N+ot8a/JwOwiafjgeWAoY5zEmkJ/YD3A6cD91P8zVlFJVV5ENgXNfyRJhL/d8rS+ItIjdqwRv/HwEsUf2NWUUlVFmFZ/HajsZYhNoKJxP+91PiLJLIZ8APgeYq/MauopCwvYKlcV0FSmEj830yNv0iw5YEvYUkuir4pq6ikLLOxbYF3R0/7KU0k/m+nxl8kSH/gQ8ClWNa3om/MKiqpyhTgQmA/3tkDQtL5GvF/w7+jJDwibisD3wFeo/gbs4pKirIYuA/bFnh7rLMr+ZhI/N9TT/4iTptjT0F62ldptrIQS/xyJrAHtuOj5E9P/i1CS2Qaw0DgU8AJwBYFx5KXWcBb2MY1M7DNb3r694XY5jfzOo6tboJT/ZzFfdTVeeObqtGd/nsb1hi1dfnvQ7F0siN4Z1OcEZ3+2wjUiPXkdWyuysNYWumHsKV72jq5WBOJ39jnauCT6G9bOuoAlNtQ4EjgJGwnvWYxE1uS+BLwckd5EXil07/PLiy6eF07BdWd9EZ0KiN5Z3e96v+uHlP974002W0+9nes/o0nd/z7c1hjP7WwyKQnavxbjDoA5TQK+BzwRRo3h/UCbKvNp4AngSc6/vk0vW9DKz1bhnc6BdVteUd3/PdB2P4Ngzv9cygwpNM/h3T5b9X/357MxLYNro6oVLcZXoB10Kb1UN4C3gw5Y8mLGn+Rgo0GvosNbRf9Prae8hZwPZZ34GBgYyxVp4iU30Ti7wma8CdSo2HA17Fh0aIb877KfOBO4H+Ag4B1EnwfIpIPNf4iBRkIHIO9+y66Ye+pLOLdM7O1h7pIc9Bsf5ECtGGz+p+n+Aa+u/IIcBawC/a+WESai578RQqwFXAHxTfynctcbBOVo7G9t0WkeanxF8nZysB52Kzqohv8Cjaz+2rgMGxWuYg0Pw37i+RoEHAKtmyq6EZ/HvBnYE80tC/SavTkL5Kj7bEsZ0U2+kuA24ETgWXTnq6IlJSe/EVysizwW6Cd4hr+l4HTgNUTn6uIlJue/EVychiWBa2op/3rgH1QIh4RUeMvkouVgWsopuGfCfwEGJ/8LEWkUajxF8nBfsAU8m/4X8Pyd49NfoYi0kj0zl8kseWBv5B/w/8wcAiWSVBEpDM9+Ysktif5v+t/GBttaKRtYUUkP2r8RRIaDPyUfGf4P4Rtq6mGX0R68i3U+Isksx4wifwa/mexPQPU8ItIb05Cjb9IMocBs8in4Z+KTeLRhBsR6csRxI9IasKfCDAU+D35NPxzgO8Bo/I4MRFpeAcQv7+InvxFsJ3x/ks+jf/VwJq5nJWINIPtsP099OQvEuwj2FB86ob/yY66RERqtS7xuUf05C8trw17/76YtA3/HCyJj3rbIlKPEcRvMqYnf2l5w4G/kv6p/3o03C8i9WsDrkBP/iKhVgHuI23DPw34DHYRi4jU62TU+IuEmgC8QNrG/xpg1bxOSESazpbAQjTsLxJmL2A2aZ/6P5Xb2YhIMxqJJQbTk79IkC8Rv4a2c7kZW0ooIuJxAXH3pRtQ4y8trA04k3QN/yJshn//nM5HRJrXbsTdm+7BVhGItKQBwPmka/yfADbP7WxEujcU2ATYBvgQsBP2u1ypwJikfiOBF4m5Nz0NrJBv+CLlMRz4B+ka/z8Ay+R2NiLvWAk4BvgTMJnec8O/DdwGnAZsi1allNnPiLk3vYKWHksLGwfcRZqGfz7wufxORQSwhnt3bDa3J3HVs8ApwNh8w5c+TMBeJ3rvT7M6PkukJa0EPEaaxn8ytjxHJE+7AvcT+1ueCXwXGJbjeUjPbiHm73poznGLlMZqwFOkafyvRU9Nkq9xwCWk+T137tR+NKfzke7tRczf8rd5By5SFmsAz5DmJnkO0C+/UxFhW+ImhPVV2oEz0EqWIrRhs/W9f8Mn0Yx/aVFrAc8Rf2OcDxye32mIAPZEGL31ay3lKmxFgeRnH/x/t3nApnkHLlIGGwCvEn8zfAP4QI7nIQJwCOl3p+yt3Iw6AXlpI2Zux4l5By5SButgS16ib4IPoWU0kr/diM3/nrVcgV4H5GFfYu5VA/IOXKRoq5NmU59/ondpkr91gBkU3/hXy3fSnm7LawMewPc3asfmioi0lJVIM9v/IpQ3W/I3CJhE8Y1+57IE2CXlSbe4j+L/G52fe9QiBRsHPEL8DU8z/aUoX6f4Br+78gwwJOF5t7Ir8f1tpgLL5R61SIFGAfcR/6SjSTRSlJVJu0W1t3wz3am3rFXwZ/07KfeoRQo0HLiD2JvbAuCAPE9CpIuzKb6R761MRXNion0L39/kLbQPibSQQcCNxN7Y5gMfz/MkRLoYTbmf/qvlS6m+gBbUH//k5VNyj1qkIG3A74m9oc0BPpzjOYh052jiftNLsD0wbgLuJnZFwUOpvoAWtDu+v8XbWMdRpCV8m9jGfxa2X7pI0f6N//c8DfgaS+/9PgDr5N4eUEcF2CT21FvW5fj+DqfnH7JIMQ6h973O6y0z0LpZKYdl8Cf9uRebUNabNmwin/c6+rL7jGUovlc+C4Dlc49apAA7Yu/pIxt/beUrZfERfL/np6hvd8qJzvquyXqi8n/2xPc3+Ev+IYvkb23gTeIa/znADrmegUjvvoLvN71dnfW1YSMGWet7IdNZSme/xfc33y3/kEXytSyxWf4WoP3OpXx+Tfbf9M0Z6/Tknm8HhmWsV2z2v+eh5mW0P4M0uUHETVqqYO9YtdRPyuhqsv+uv5ixzmH4thleK2O9YiOQnnvZ9/IPWZpJI6S5PZu4LXiXAAejd5dSTp7kOk9kPG4u8JKjXiUEym4v5/EXhEQhLavsHYCDgM8HfVYF+CxwWdDniUTzbOE633HsXMexAx3HtroPOo59HHstKpJZmTsAE7B3olFOAH4T+Hki0WY7jl3ZcWxfywZ7M8txbCsbiS+PwrVRgYiUzWjgaeLe+5+Vb/gimVxC9t941s7tBEedFbQGPSvv1r875h+ySHptwF+Ja/yvRjNlpTF8j+y/8+nUlwOg6ueOOt/OUJ8Yz996Bnr1Ik3KuytW53IPtmOgSCM4FN/v/bw669sMX+bBuzOdpQDcSvbv/ZIC4hVJbhdspn5E4/8cGp6UxrI2/t99rel518a/A91PHOfaygbjW3p5TP4hi6Q1FktsEdH4TwM2yDd8kRCT8f/+f8fSGwFV9cOWwk4JqGePoHNuNVvh+94n5B+ySFqXEdP4LwB2zjl2kShnE3MdzAb+DHwO2Bt7vXAmli8g4vNnYBvZSP2OIPv3PhPNaZIm8xlibkoV4PicYxeJtClx10LKoiW12f2Y7N/7DQXEK5LMWths4oib0h9yjl0khX9TfAPfW2kHNk929s3vn2T/7r9bQLzSpDyZxyL0By7GkmJ4PQQcHfA50QZiSVrGAuOwHAfV/74M1vmZjSVUmQ68gs1hkNb1Pcq9U+U1wH1FB9HANnIcq5UX0jS+TcwTyXRgnZxj76oNWB+bYPVj4DrgGWAR9Z/PXOxd7VXAGR2fuTHlztwosa6l+Cf97soifBnsWt1YfN//6vmHLBJvK7I1jt0NRxY1G3lZ4HDs1cPrPcQXWWYA/8A6TlujyUDNbB2sI1h0g9+1nJnypFuAZwfA2diDhkhDGwA8QMwN6Ts5xz4cm7R4IzEdGE+ZAvwJOBB7nSDN5bMU3+B3Lg+imf9enhUAeu0iTeGbxNyQbiS/YfH1gP8lbsJidJmLLaX8BDAo0Xcg+buQ4n9bFayzuXbic20Fp5L9b/DH/MMVifUefFmwqmU6+bwP2xy4krgMhXmUN4AfYt+1NLaB2GufIn9Pc4FtU59oi/gt2f8O3y4gXpEwbcDNxNyU9ksc67rApdgcg6Ib9KylHZuMuEvwdyP5Go79HYv4Dc0Adkp+hq3jBrL/LfYvIF6RMEcRc1P6fcIYh2HLsBYExVqWch9wAFpJ0KgGYil+8/zNvAC8N4+TayFPkf3v8f4C4pUmlueM0hWAx4Exzs95HrspzXRHtLSdsJvsmgk+uywexnZcvAq7qUhjOQL4GdZRTekqbLJrnjkpBmKvrdbrKMthk1tHY6/gZmFzcF7Hlsk+id0P2nOM0aMNmEP2iZSrYfuliDScS/A/kSwGPpAgtsFYDvZGes/vLf8Fto/48iR3q5BucuCrwGH5nQrrAl/B5jnMyhDvW8DlwHHASjnGncUKZP+7LME6SCIN5yPE3JxSpMFcDfhPUHyNWK6muUc8mtl2WMMZMU/lZeCLpB9ZoKOOY4E7A+LuXBYDf8felZcxR8bGZD+31wqIV8RtAPAo/ov7QeJ7wLsAUwNia/QyB/g6xaeGlmzWwZaXPUh9nYG3sKVlu5PP334k8A3gzTpizFqeweYclWlJrCcJ0L0FxCvi9jn8F/Ni4ifAHA4sDIitmcqDwBaO71SKtxzwceAk4FwsUdQ12IqW87EJrodhe8rnOSF0P/LJltm1PI2NQJbB3mQ/j6sKiFfEZTT2lOG9iM8JjusrATE1a1kEnI7eN0qMNSnH7oZ/5J2NuIpyJNnjP7+AeEVczsZ/4b4IjAiM6YsBMbVCuQclEhKfvSjXK7YXgG2SnnHvPA8ePy4gXmlyKd/7jQeOD/icL2CzgyOcCPwk6LPq0Y5NsnoBW8Y0D1vGOBjr3FSXOo3DshuWYcOPLbDcAccDFxUcizSe7wCnUI7fctXqwC3Yk/jFBdTvWQL9dlgUIjn4K/4e+6WB8XyefLL6tQOPAOdh71rXo76JSEOxPAf7AxOB67FdwIp8cvpFnecgras/tmdG0U/7fV2jX031BfTC8738vwLiFclkJ/wX6QxsvXOEA0jf+N8PfAlYOSjmzgZiS75OAW7P4Vy6K3ckOjdpHm3ABRTfwNdavpbma+jRRY5YD885VpHM7sZ/cZ4QFMumpHuCXoRlDtw4KNZarYHdvB50xJ6lvApslcP5SWM6i+Ib9XpKO/Y6IC+XOmLdN8c4RTLbHf+F+Tgxs9CXBZ4LiKe7hv+3lGN71I2wocU55HPTnAccmMuZSSOJWO5bRFkE7Jzg++jO1Y44P5xTjCIuEU//uwfE0Z8026iWda38KGyS40ukv2m2A2eijYXETMC2DC66Mc9aXiefNMKenQB3yiE+EZc98F+M/wqK5QcBsXQu84FvUv718YOBz2KpQ1PfOC8jn9SxUl7DsWQ7RTfi3nI96Vcs3OaIr8jliyI1+S++i3AxsElAHFt3fFbUzeEVYMuAuPI0HJsn8DZpb5wPYMurpDWdSfGNd1Q5OPi76eoeR2ybJ45NxGUv/BfgLwPiGILNIYi6KfyXxp79viK2JDHlToevor3KW9EGwALif0+LgZuxzsVx2JLYA7GlvD/G8uKnWAnzGvYqLZWHHbFFPBiJJNGGr3dbwRLjrBgQy/edcXQufyX73t1lsz3wFOk6AfOAQ3I7GymDK4n9Dd0PfBqbvNuX1bAkYZODY0ix42jVY4641ksYl4jLPvgvvFMC4tiUuA1+rsPepzeTIdhTVeTrka7lHDQ5sBVsTNxT+GSs85jldzME+DIwLSiW6aQbBfB0AMYniknEzTvzfyq2VahHf2CSM45quZ7ma/w724q0owFXEbt/g5TPxcRdaxGb9IzHN8TeuXwjIJ7uqAMgTWd7/BfcyQFxHBsQRwXrzLTCzPZRxKRr7qk8gm5azWoM9srH+xv5ObH7kYwArg2I6xnSrAjwdADKkHNEZCneRmQK/qfFEcQse3sDWNUZSyNpw3IHRL026VqmAh/M7WwkL5/F/9v4C2ka2aHE5CL5QILYPB0A7cwppbMm/vfJXw+I4wxnDBUsI9hOAbE0ou2xmfwpOgELsQZDmsct+H4T95F2lG1V/L/nnyeIy9MBWDdBPCIu/4PvIot4+l+TmOHIrzjjaHSrEjeHortyLmm3n5Z8DMO39G8J8L4c4jzAEWMFW0oczdMBWD9BPCKZjcKfZCZiS85LnDFUgLuwSYStbgjwB9J1Am4FlsvtbCSFj+D7DVyQU5xtwH+csUa/DvRMUtwwOBYRly/hu7imYNnqPLbEvxRpPrq4OmsDTifdlsNPo++7kZ1G9r/9EmCtHGP9mCPWCpaAKJInV8qE4FhEMuuPf5e90wPiiNjs51sBcTSj/Um3wctMLHOkNJ4/k/3v/p+cY+2PPWhkjffbwfF49gJQpk0pDW/a3wX40+tu44yhAjwBDHLG0czeT7rJgYvRvItG9ADZ/+YRE37rdaEj3ouDY/mnI5adgmMRycyzr3XhSF4gAAAgAElEQVSFmPeAnoupWvYIiKPZrYx/k6feyh9pnnTLrWA62f/WRWxoc6gj3juCY7nKEcvHgmMRyWRFbMmc56a/hTOGDzjrrwA3OWNoJUOAi0jXCfgPMftASFpt+Jb9euf8ZLGlI96Hg2PxvD7ZNzgWkUy+ge9mf3NADP9yxrAEeG9AHK2kDduvIdXkwJewFMVSXsPJ/vedU0C8YMuEs8Y8OTiWCxyxpN6qWKQm3q1293TWv62z/gpwvjOGVrYPMIs0nYD5wFH5nYrUaQzZ/7bTC4gXbGQpa8yvBcdyniMWXRdSuB3w3eCfxr9TnDf18Fz8ExBb3QTit2HtXM6juTdjalSDyP43XVhAvADr1BFjd/erSJ7EaScExyJSd2N8pLO+87Ah5KzWxb987H+xme2S3UPYhK5bEn3+McCdwBqJPl+yWUj2hnwgsEJgLLVa3XHsrLAozHzHsZooK+Hq6QCMBD7pqGsx/mU1X8Y3gjAH+KEzBjFTgV2xFL8pbAbcC+yS6PMlm6mOY/NIAdyVZ67PtLAojDoAUir1NKYH4NvA4xrgdcfxy2NLejzOxXb8kxiLgc9jWzEvSvD544DrgK8l+GzJ5hnHsUUsu/XMOXoqLAozz3GsOgBSqBvwvdfd3Vm/JwVpBRvOUx76dD6MPTGlmhdwEWl3kJPa/Jrsf8OXSbMFcE+Wxbdk+cTgeE50xPLT4FhEaua9kF7DtxPcIGz0wNOAnOGoX2qzLpZdMVUn4H5sUpcU5wR8f8M8E9p82Rlr9OunYx2x/Do4FpGaHYnvQvq+s/79nfXPB1ZyxiC1GYEv41lfZSbwqdzORrraFN/f7yHy2XlzNL59ABYQn7joMEc8fwiORaRm15H9h9uO/6nNm/hHved89QfOJF0noIKWChalDXgT39/uiBziPNsZ4y0JYtrXEc/fEsQj0qex2NKfrD/cfzvrXwdf9rl2tP1sUQ7CJj6l6gTcB6yd29lIlWeDnQowGxtJSGVvLNunJ8YUG1Xt4ojnlgTxiPTpCHwX0vHO+n/krP8qZ/3i8wFs5UWqTsB0LDuh5GdX/H+3ydjKnmgT8GeqXAyskiA2z74EkxLEI9Knv5P9R7sEX9a9Ifje41Ww7IVSrNWAu0nXCWgHfoK2ds5LP+BF/H+3Z4gdnduOmM7mPwNj6mw9R0zPJopJpEejsckwWX+0tzrr/6Sj7grwoLP+SIOADbANbz6E7e+9ObBqgTHlaTC+XOi1lHuA8XmdUIvzbgpWLTPw5wfoh+Wj8Lyq7Fy8+5X0xLMvwZREMYn0yDv7/gvO+q9w1u99/eAxFpv1ewGWU7y3bVRnYVvifh/YGf9+CWV2NLYqI1UnYCr2DljSGkls3ocbyJYpcBdsLkhUHA+QLlfBMEdcRe2lIC3sfLL/YNuxod+sxuBrKGYDoxz1Z7UDcDm+2F8CvkcxudPzsBnwPOk6ARVsotoyeZ1QizqV2L/ZEmz4/XP0PjK2PpYd8q7g+ivAJ7J/HTXxjFIoG6DkyvOe73Zn3Z6kGRXyX/r3fuA2Z8xdy1zs3fboHM8jL+PwZ5fsqzyHTUKUNIaRdlfIF7HZ738DrsbuKd4liL2VGyO/nB545jStmEN8IgBshO9i+qKz/lud9W/hrL9WywC/xL/sqLfyGrBfTueTp2q+AM8yz77KIuxJNY/kM61oL9L97fIsC7A5Oqk954hxvRziEwHg/+G7oNZ01L0GvkbhAUfd9dgYeNwRZ73lf7GVEc3mU9grm5Tf3W34fpPSs4spvgH3lrw2nLrfEeNWOcUo4sr+94Szbm/n4yRn/bXYCZvBnPeN6haKmduQ2iak3UegArwNHJLXCbWQ4cBjFN+IZy1/J7+Jt/92xPmhnGKUFjcEmEP2H+o5zvo9F8kS0i+t+yhpZ7L3VSbRnJ2AZbCc56m/v8uwVRoSZ2OK6RB7yzPYfJS8ePbJ2DfHOKWFfRjfRbWbo+5x9L5krq+SeiLP1qQfrq6l/JvmfB0ANgE0ZQrhCjbBbNe8TqhF7Ej6v1tkeRPbwTJPntcln8k5VmlRPyT7j3Q+vl20PuOouwIc7qi7L8sDrzjjiyznJTzXom0IPEr67/BSbLtribE3vuRheZUp2HLUvJ2bMd4K/onVIjW5new/0n856/Yk/5mHJShJoQ1bo1z0jatraeatcUcAl5D+O3wVJQ+KtDM236Loa6On8gq2Z0ARvl9jjN2VbxcQr7SYwfiG8b7qqHsovrkH1zjq7sunHXGlLFNo/ifY48hnaPnPpNmgphVtBrxA8ddH13IPxabf9qRQPquAeKXFbI3vAvNs8/kRZ91HOeruzQjS7mjnLT9NdN5l8j4spXLq73I6cExO59TsRmETLou+PqrlPOwBp0jH44tfJKkvkv0HOgVfHu2zHHUvIV2mrK844sqjzCfN9qVlMxJ7Ss/jO70WXyprMW3Y/g9TKe76eBbfxORIh5L9PC4pIF5pMZeS/Qd6tbNuT5KMO5x192Qg9o64yAa+lvKDROdfRvthT+qpv9M5WIKYZt6cKS/jsPTci8jvmpgFnEa5cujvTfbzubaAeKXFvET2H+jJjnqXw5dON1Umrz0cMXVXnsKS+dxF7FPRq7RWutvxWKcvj4bkNoqbNNZs1sKGslPm0ZgBfJd81/fX6oNkPy/v9uoivVoN34W3s6PuTznr3sRRd28iZqHPBk4HVu/y2f2xtdPXB9RRofXWtffHOn55LDtbhCW4asYETEUYjc21uJ2YvSCWdHzWMZR7F8gtyH6OeaU4lxa1P9l/nIvxXXi/dtT9Gmn28O6Hb/euCvbEX8smHsfhHx5t1VnCWwFPkr4TUMFGWg4i3Z7xrWgl4GBs+/FJ1JZoazo2ivZTbFi9UXbMXJfsv73nCohXWognAdD9zro9eeAvdtbdk00dMVU7JvVMJDvOWd89WU+0CQzHhpbz6ARUsNc4783jxFrU6sDm2JD5nsDHsdGyzWnspZorkv03N6WAeKWF/IPsP85zHfUui28Y8HBH3b3xzNitkC13t+dvMI/WmgfQnY+Q36TNJcCFaJ92qd1wsv/eFhYQr7QQzwRAzy5ruzvqrZBuudZ3HTE9RrZh4g846qygLW/BnhA9m67UW2YDp9K8ezNILM+rPv3GJInR+G6CGzjq/o6j3icd9fbFMy/hjIx19sOXdGibjPU2mzbgSPJZLlgtzwIHoPkB0rtpZP+NrVBAvNKkOq9v9syiX4BlactqW8exdzqO7csIx7FZOybt2MTBrDwxN5MKNqlsA+DynOocj60aeQjLVSDSnZmOY3V9S5jOHYCNHZ/zOLYKIGsMWzrqvstxbF8GOI6d5zh2ruPYgY5jm9HrWGO8J7YJTB42xhJq3Q5sl1Od0jg8HYBUm51JC4rqADzsOHZdfD/qlB2A2Y5jV3Yc60nrO8txbDO7Gkvmc0GOdX4AS95yOenyVEjjUQdASiGqA/Co41jP5kGzgEccx/dlhuPYrEmRVsI3n8ITc7Obhq0Y2QnfK6t6tAGfAB7EOiFF7EEv5eLppOsVgITp3AHYyPE5nhEAT4rVe7ClWKk86zj2w8AaGY47kuy556sT0aR3/8bW8P+AtL+fztqwtez3oo5Aq9MIgJTKOHyzn7umuK3H1Y56U2e+29URWwX4K/XNCB+P3Ryy1vdi1hNtYdtiSzbzWilQLe3YUsXt05+ilIxnddFxBcQrTc6Tn3oGvmVPLzjqPtRRby1G4U/Pewa1fT8rYq8zPHX9yXe6LWswcAq2+1/eHYEKtpJlH7TrYKs4m+y/lVSbnkkL25fsP8i7HfWOwZcB0DN/oFZ3OeKrlr/Qe7Kij+NLwlQtR4eccetaE7iCYjoBFWzp6DHAsMTnKcWaSPbfyPcKiFea3JfI/oP8s6PebR31LgAGOequ1VcdMXYu87COwPHYkrSDsBvB/UGfvwglCYnyMWySYFEdgWnAj4C1U5+oFOLLZP9t/KSAeKXJnUP2H+QPHPV6cu0/5Ki3HqtgOQ6KagxqLdek+gJa1GDgm9iM7aL+pkuAa7EOiV4PNI/jyf6b+N8C4pUmVb2prOH4jBccx3qecDwrD+rxCjaZr+x+WnQATWYBNty6HvB77FVV3voBuwF/x0YkvoVvwq2UgydJmPYCkDDVDsCajs/wdADWcRyb1zpusIagkmN99fov8M+ig2hSrwKfwbJV/rvAOMZje2Y8j2UYPAbbWU4az3zHseoASDjPhimeBEJ3OupNvQKgqwscsaYs7VhiG8nHJ4BnKP7vXsGu218Bu6BtoBvJPmT/m19ZQLzSxEbiuwl5MlO97qjXs4FQFssDUx3xpiq/T3jO0r2BwOeA1yj+718tbwDnAjui+QJ58Nz3Pkb2v/N1jnpFlrI+2X+MUx31DnfUW6GYGe8fx7dsMbo8g+UqkGIMxyYKzqD430Ln8grWGfgYMDTZ2beWIdhIyxlYBtLJjs/aiex/21sc9YosxbMU735HvWs76i1yw5uzeokrzzIbpZMti2Wx38Vciv9ddC1zsGybx9J7Lgp5tzYsXfRJwPUs/bf17Cz5frL/PT15V0SWsifZf4yeiWfbOepNuQFQX9qwYfcib+oLsac7KZcVgR9TXEbBWq+dn2FzGZZL8zU0pDZsP5TjsIyab9D79/iao65N+/js3sqDjnpFlnI42X+Mlzjq3c9R742OeiMMwm4SRdzA52GZG6W8VsAS+cym+Aa/t9KOLaf9KXY9rpHiyyipAcBWWBK0vwFTqO+7e9NR93p11tW5POmoV2QpniyAv3DU+wVHvRc56o3SD19O7yzlTWCHPE5OQiwP/BDfBk95lzex5EOnAXtg21M3uiHYfidHY3Mj7sDfOZviiGdNR72THfWKvMsAbCfArDwXgefG4hl+i9KOpfS8AzgfGJ24vtuAA/G9e5R8vYmlkv4+8FngBMrfoC6HJR/ardN/mwY83lGewHZPfALLAVJEgqSejMPmFlXLethw+/rYvS6SZ9ml5zvTCg8JMwCbwJSVZxWAZxb/645jo/0Vy2fwQ+AQfDsjdmc69jT2c/Lbu15izQDOxPK4H4x1HDcsNKL6jAU+0FE6W4x1xl8EXsY6py9i1+dU7Lc7o1PJ8vvtjy1VXq5TWQEbXVkOWBlLkjSefFfEeBpidQCkNC4j+3CUJxnPXxz1HuSoN6XNsPNagn8odgqW+jX1yILkrw1bUnoTxQ/551lmYqMJzwHPdipPAvdiy1qf7fj/8SQny6N4ViKt5Kj3VUe9Ikvx3IR26+bzanWDo96yz4BfHTgZu6nV0xl4G9uOdj+U8rNVrIuNDkyj+EZNpfYyp7s/Zo1WcNRbptFPaXBtWB75LTMevw1wV8Zj78Zm4WaxHfbuvRGMBbYGNgDWwt5TjsA2m5mNXdBPYrOxJ2HDqtJ6RmCvkI4DNik4FunbfLInWRoHvJXx2Clo+aYEepDsvdEJjnofd9SrG6Q0s+2BCyn/MsJWLnN7/Ov1bayjXs+8K5F36Yetac9qoePYkY5jZzqOFSm724DDsCe9/bG8F5VCI5KuPBP5NAlQSqFROwBFpgIWycs8bJLurtiytlOxCXRSPE8j7lnNow6AhCmyA+Cpd7bjWJFG9Dy2HHRtbM7OD1FnoEgaAZCm0FfO697K8o56PUvldBGImI2wkYEnKP69eCuVaTX8bXri2QnVs/pA5F3asPW2Wdeaj8ESfNSrH9mHwdrxZeESaVbjsfS9H8dSRntG2aR3U8meRXUs2SfzzURbgEsgz85lwzLWOchR54KMdYq0klHAJ7E01a9Q/BNzs5Wsy/jAdo0sol6RdxmA7ykha2PsycutdfIifXsbuLyjgI0ObIel890Vy0kh2Xkm8hVxzxVZygB879MrGY/zDOErH75I/Z7rKBd2/O/x2GuCrbGd8iYAA4sJrSFlvfdBcROvRd5lAPaDypp2dhCWEatenlmwev8v4lftEPy+438PxjoBW3SU92G76GXNdldGLwEPYcnPHsTmL12f8bM8T+IaAZBSKKoDUNTFIyLdWwDc01Gq+gFrYGmsN8Q6BOtjrw9WIn7nywhzsU2FupYHWXrm/saOejyz8Qc7jtUIgISpdgCyytoYL8aG8rM8zQ/oOE6vAkTSasfyDzwP/L3L/20QsCqwGtZJWB2b3LZsRxnX8c+xwDLOOOZjs99nYauW3ugor3T882XgTeAF6tstzxOXpwOgVwBSCkV1AOioN+vw4mB8ubhFxGch77xG6MsAbLOjNt5Zcjya7kcQFvFOoq+3sUY/VaM33HFsUR0AvQKQMI3aARiEOgAijWIx9uQOvgQ60TwjAJ5spBoBkFLoR3Hv47PMHahqpolJIlIMzwiA5wEk65wrUAdAAnlHADyTWTwX0GjgNcfxZTMK2AabaLUusCb27nQ4drOYiw05TsOGXJ8AHgPuQiMhIlkVNQcga+ZV8D04ibxLkR2A6WRPRjLGUW9ZbAgcjCVl2YxsEyIXAHcD1wF/AF4Mi06k+RXVAfDcv952HCvyLv2wLUez8vyQp/f9/5Kk3iINAo7Cllo9CpyM7eyWNbfBYCyZy/exmdo3YelftVmSSN/GOo4tagTAc98UeZd+ZN+UAmyZT1at1AEYBJwIPAv8Gku0Eq0fsDO2f/wjwCGoIyDSG89upp7JjEU9OIm8Sz98P2RPD7pVOgA7AfcD/4Otm87DBsBFwH+BrXKqU6TRLOc41rMpj0YApBQadQTA03PPy3Dgd8DN2Pv+ImwO3AmcgW8DJpFmVFQHwPMAk2X7dZFuFdkBmOI4Nq8n6aw2wGboH15wHGDzC74O3IGtLhARU9T9SyMAUgpFdgDqSdnZ1SqOY1P7INb4e/KMp7AV8B9skxcR8Y0kvuk4Vh0AKYUi5wC87Di2rCMABwD/AEYWHUgPVsReSexYdCAiBRuAryH2dAD0CkBKocgRgGbrAOwJXEz5dyschXVSPlB0ICIFWoHsq2Tm40sFrA6AlMIAfB0Az1D8q0CFbFuKjsAasrIkxdgJ+DONM9FuKPA3YHvg8YJjkXwNB96f8djZ2MqSZrCG41jP+//qvSurMu2lIE1gRawhzlKW4HvifctR9+aOeiOtiV2UWc+jyPIMvpuRNJ5NyP57ebiAeFM5kOzfw72Oejdw1OtJ2iaylH7YftpZ80v3wzcc/5Lj2HUdx0YZiKXgbaS8BJ2tjSUmEmk1azqO9aTcXt1xrOe1qchS+mE9S09D7BlKe8Zx7Hscx0Y5Ddi26CCc9gOOKDoIkZx57lvPO44t6oFJZCnVSTCTHZ/huZCechxbdAdgQ+CkgmOIcha+pCgijcZz35rsOHY1x7HqAEio6qS1Fxyfsabj2Kcdxxb9CuBc7BVApPnAjdjufo8Br2M7/g0FVgYmALtjk/ciJxyOxTYUOjrwM0XKbE3HsZMdx2oEQErnFLJPTPmdo95tHPXOpLjNbnatMcZay7PAYdgM7VqMBb6Azd+IimExxY+qSHqaBGjZMeeR/XvYxFH3dY56j3XUK9KjQ8n+o7zJUe84R70Vimuwbqkxvr7KLOAEsq+kGAF8F1gUFM/5GeOQxqEOgN03PNfJCEfdjzrq3c1Rr8hSqsPIkx2f4WmEp2B5CLImFHofvtcIWbyfmEx6k4G9gIccnzEL+BbWIbkUX2ZGsI7gt/ClaRbpznjg9xmPfY7YfTU2cBw7FbvusvLkTnnFcaxIj1bH1yP2LIP7l6Pe7zvqzeqXjnirZRLxk+7WweZyeGP7SnBcUi5FjQB46n3EUW93vu6IxZMDYKSj3gr+Dr7Iu1Tfob9C9lwA4Nv45gHHsXlvbDME2N/5Ga9jT/6e7US780zH585xfs6nA2IRKbONHMc+4TjWM1o6B2UBlGDVDsASfD9sTwfgfsexeXcAPoRvtGMRsA/pZvM+AHzG+Rkb4RsiFSk7z+/bMxqxvuNYT/IhkW51nkXvGd4ragRgBSybXV4+6Dz+PGyr4JQuwzb78fCep0hZ9cPXAfDcJz1Ll9UBkHCdOwCPOj7H0wF4HJjrOD7PXe08DeNs4PSoQPrwNWxUJyt1AKRZrQcMcxzv6QB4RgA8I7Qi3SrDCMASfMNqeXUAhuJb//srbN1+Hh4GrnYcn3W3OJGy28px7Nv4Xt+t5zjWkzVVpFuds8l5GuGxWKa6rMvH/kP2CzOvDsB78CUe+mtUIDW6Atg747ErA8vg2/Ncymk2cHPGY5+LDKQgWzuOfQSbjZ/FADQCICXWBswg+xKV3R117+eot518lsd4YnwDyz6Wp7H4EgRtlnO80tzKsgxwkiOO/3XUu5Gj3gq+/AEi3er8RFvBNw9gG8exdziObSMmMU9fVnYcezu+d/JZTMN34/TkLBcpo6H4Xld6rqcJjmNnoeRckkDXIW3PD9zTAXgV3xabH3YcWytP+s+8sxVG1Os5X5Ey2gzfBl73OI7d1HGs59WDSI+6dgAmOT5rK3zD3J5RgI84jq2Vp0GcHhZFfTyJQ9QBkGbjef8/D9+SZc8IgCdduEiPunYA/uP4rGXwzZK/3XHsWqTfGMgzATDv4f+IevOesyCSmmd5673AQsfxmzuO9XQ8RHrU3SuAmY7P87wG+JfjWEj/GsAzI35kWBT1GeU41rPhiUjZDAC2dxzveUAZDyzvOP5Bx7EiPeraAWjH957L0wF4BnjWcfxHHcfWwtMBWCssivqMdxzr6QiKlM3W+F5reTJ4evJqtNM82zBLyQzo5r/dCeyS8fM8HQCAfwLHZTx2V+xJO1XD9abj2CIS6wzB994xerMiaW3Pkn21jneDK7B9PLKq4Hs96kk+9AzKxyE5+hi+9aqe5XJ7O+v27tTXm62csW2YMLbu7OGMd9mc4xVJ6TayXwveJDx3Ouq+0Fm3SI+6m9h2N74lJ5538TdhyWuy2sdxbF+edB6/V0gUtdvTcezUjiLSDEbgG4W703HsUHxJtTwjDyKZPE72HusfnXXf6qj7bWCws/7ePOeI7QVsWD4PK2KT+LLGemNOcYrk4ZP4RsM+5aj7g8663+uoW6RXPS1t8/R4d+3lc2vxN8exI/G96+vLzY5jVwc+HxVIH07FlmVm5V2RIVIm+zqOXYLNTcpqR8exc4hNgyxSk0Pw9Vq3cNS9prPuix119+VgZ2zTSJ/T+7349gCooN0ApXkMxkYGs14LnochgFscdXseOEQyWx5bfpL1h3uKs/4HHHXPIV0Wu7HAfEdsFeA+fPuR92ZZbLa1J75XUBIgaR4fx3c9fMtR9xAsg2DWus9w1C3Sp56G6t8E7nd8rjcpzxWOY4cBn3DW35NpwLXOz9gMOJ/4RnYY9r151v4D/IHiMheKRPNODL7Ocey2+Ob93OI4VsTlDLL3XBfhy0Ln2Tq0Qtp32Hs6Y6uWfwCjg2JaDRtZiIjLs1uaSJn0xx5msl4Lb+Gbz3SWo+4FwHBH3SIuO+FrSLxr8p9y1L0EaxRT6I+tC45obJ/AlyQEYDfgtaB4rnfGIlIm3pwm3vlEDzvqvs1Zt4jLIHxLyS511n+qo+4KMNFZf28Od8bWubRj31W9mxltgY10RMVRwZcrXaRsLsV3PXhWD6zqrPtUR90iIa4m+w94Dr4hrDXxTUR8Fd/e370ZiCUGimx827EkTN/A5gl0fXc4Aku1fDq+J4ueyg0RX4xISXgn7M7EkvhkdYyj7gq+5YMiIT6P70f8SWf9tzvrT5kZ8MPO2PoqS7BJhy91/DNlXQuA9WO/HpFCee9dFzjrv9JR91zSJjQTqck6+C6iS5z1H+us35PAoxbeIcaylO9HfzEiBfNOit3NUfdwrBHPWrd3pZFImPvJ/kOeg2/N+xh8w3jtwLqO+vsyFkvxW3QD7ikP4hvqFCmbCfiuian4Xh/u76z/s466RWpWyxKXyx2fPwz4iOP46fhSA7cBxzuO78s04AB8GxgVaTZ2s5pXdCAigT7nPP4vFLsp2T+cx4uEWQ9fb/YPzvp3dtY/BxjnjKEvxztjLKIswrKkiTSTsdg177k2dnbU7009/ICjbpEkHsLXAI901N0GPOaov4IvnWetvuuMMc/SDhyZ5msQKdQp+K6NyfiydO7hrP+7jrpFkvg2vh/1Mc76T3DW/wbp33O3AT9xxplX439iou9ApEiDsOW/nuvjZGcMlzjr10ZcUjre1wB3O+sfhb2v9sRwnDOGWp2IL39ByrIIOCLdqYsU6nB818cCYAVH/SPxzf5/CV/qYZFkHsF3cU1w1v9rZ/3Pki4xUFcH4suimKK8ju/dpkiZteHbRbQC/MkZw5HO+s921i+SzKn4ftw/cda/Kf4n66OcMdRjXfw3pKhyM7By2tMVKdTe+K+THZwx3Oysf2tn/SLJrIOvAX4Le0fncZ2j/gq2Zj/PDFsDsVcCRY0GTOuoP3rrYZEyiXj6f7Tjc7JaA8vembX+yc76RZK7Bd9F5k0NvIuz/gr5zQXobC1seNFzg6inzAfOJf3yR5Ey2A//NePNHeBdBfQDZ/0iyR2K70cekZr3XmcML7P0Rjt5WQ/4Hb6JQr2VGcCP0XC/tI5++OcnTcU228pqAPCKM4YtHPWL5GIolp3P80P3TgY8wFl/BfiSMwavUdiEoZuwmceec5kNXIVl9CuqYyNSlAPx3w9OdcbwCWf9TzjrF8nNL/H92H/trL8/NqPfE8M0YFlnHFGGYTsLno6lXX4YS83bXdyzgEnY64RvAdvjn1ch0qgG4d+WeyaWPdDjn84YTnLWL5KbLfH92OcByztj8C63qQDnOGNIbQC2GdIaHf/U+mCRdzsJ/33gh84Y1sY3t2chvtwDIrnzzrid6Ky/P/6e/yJgI2ccIlKM5bE5L96HEe98mXOcMVzhrF8kd1/E96N/A//76sOcMVSwd+ci0njOx3/9/9wZwxj8S3z3cMYgkruIHbe8KWn7A487Y6hg799FpHFsjn9J7ULs9ZrH15wxvIq96hNpOL/A9+N/CH/ii085Yw5GTg4AABSBSURBVKgAT6PZ8yKNog24Hf91/1NnHIOwJcWeGE5zxiBSmPfg74Xv6YyhH/CgM4YK2oJTpFEcg/96n4E/SdannTEsBFZxxiBSqKvxXQST8I8CfNAZQwVbi7+BMw4RSWtl/HlIKsBXnXH0w0YwPTH80RmDSOEiGt+9A+K4JiCOf6Nc3CJldiX+6/wlLKGZx/4BcWzjjEGkFO7HdyE8hH+N+wbYsj7vRXm0Mw4RSeMg/Nd3BTjYGUcb/teOk5wxiJTGp/FflPsGxPGzgDhmY4k9RKQ8xmFLh73X9yT8DxvetL8V7J4p0hQGYctZPBfEw/gvzHHEvB+8KSAWEYnzV/zXdTuWOtsjYtvhF1H6bmky38B/gXq3CgY4PiCOCnBiQCwi4nccMdf0bwJiiXj3f0JAHCKlMgJ4C9+F8Rj+pBj9gLudcVSwJEfrOmMREZ+Nidk6+w38G/4MAp5xxvEmtvmXSNP5Ov4L9fiAOCYQMyHwQZQgSKQoQ4jJ8VHBJhB6nRgQx8kBcYiU0nD8E3Wm4u+pA/zEGUe1lH3HQJFm5d12vFquC4hlBP5729vA6IBYRErrq/gv2LMD4hiBrff1xtIO7BMQj4jU7gBiGv85wPiAeM4IiOX0gDhESi1iFGABlmbYa09nHNUyDVgzIB4R6dsEbDluxLXrzfgHdu175yFMw3YOFGl6J+G/cK8MiuX3AbFUgLuAwUExiUj3lgWeJeaavQ3bMdTrioBY9O5fWsYw4HX8F82uAbGMAl4IiKWCdSZEJI3+wD+IuVZnEDNqt2tALG9iryRFWsYX8F84DwIDA2LZBXuXH3FjiVilICJL+xEx12iFmFn/g4EnA2JRThFpOQOBx/FfPF8PiucXAbFUsC08dwyKSUTMIcQ1/hcHxRSR3OxFtJRYWtTH8V9Ac4F1AmJZBng6IJ4KNqS3RkBMIgI7YxN/I67N57HXfl5rEjMR8dCAWEQa1nX4L6KbidmmdwIwLyCeCvAIWtMr4rUhNkM+4ppcQszoXBtwfUA8d6HtxaXFbUhMVr7DguI5ISCWarkRbeohktUq2BB51PX4jaC4jgyIpR3YLigekYYWkdFrCrB8QCxtxOwsVi1/Qr18kXqNBO4n7jq8kpjrcCViRiQuCohFpCkshy3L8V5UFwbFMwaYHBBPtXwvKC6RVjAYuIG46+8x4pbZRTwczAVWD4pHpClEpAiuYBMLI2yDzeiPuglpeaBI3wYSk1inWt4G1g+K7cCgmL4VFI9I0xgEPIr/4noTWDEopqh9xivYO7+jg+ISaUb9gD8Qe819Iii2VbCNyLwxPYmW/Yl0a2tspq73IvsHce/do3YcqwCLsacIEXm3NuA84q61CvDdoNj6Af8KiKcd+GBQTCJNKarBPTYonkHA7UExVbDXCnsFxSbSDNqAnxPb+F+JNdwRvhYU02+D4hFpWiOBl/FfbHOA9YJiWoGYrYOrZT7w0aDYRBrdWcQ2/ndj+41EeB8xSYimYJOdRaQP+xJzI7iHmL0CALbAv+Vn106ARgKklbUBPyO28X+WmOXAYFuXPxYU16eDYhJpCVcSc+FFLsH7OPYeP+pmtRjdGKQ19QfOJ7bxn0LcqB/YngERcV2LcoGI1GVlYDr+i28J8LHAuI4NiKlzaQc+HxifSNkNBP5M7HU0j9jMep8Lims6sGpgXCItI2oZ3hRi9v6u+mFQXJ07AV8KjE+krAYTu86/ev0cHBjjltgruojYDgmMS6SltAHXEHMhPgAMDYzrT0FxdS6noqFCaV6jgZuIv25OCIxxDPBcUFxXBsYl0pJWxJL7RFyQvwmMazBpbmYXoA2EpPmsSUyir67l5MAY+2E5RCLiepO4yYgiLW0v4m4YRwXGNQy4NTC2arkdGBcYp0iRtgReJ/46OT04zqhXe+3AnsGxibS0XxFzcc7HbkhRRmHLDaNvbk8D7wmMU6QIe2M5OaKvj58Gx3lYiWMTaXnDsTzaERfoZGKH58YBDwfF1rm8gaVHFmlE/4+Y1N5dy6+InSuzLXGT/h5Auf5FkticuB367sE6FVGWJy5pSOcyHzgxME6R1IYQv8a/Wi7DcghEWYO41xOzgQ0CYxORLk4h7mbyF+LyhYOt940apehazkdPFlJ+a2NPwSmugT8CAwJjXSY41iMCYxORbvQDriPuov1RcHzLk+4GeD8wPjhekSi7A9NI89u/kNjGfyCx95GLAmMTkV6MJW6tbgU4Pji+McB/AuPrXGZgE6tEyqIN2zEvxfv+CnAusSN1bcDvAuN7kLjNh0SkBu8lbnOexcQv21mGmD3EuyvtwDlYLgKRIq1GmnwY1XJmgph/EBjfNOy1h4jk7EjiLuSZWKci0jBihxm7loeBCcExi9Tqk8BU0v2+v50g5hMC44veZ0RE6vRr4i7o14ndTQzsKf3ywBi7lrnYZkJKISx5GYW98071m16M7QMSbX9iX1OckiBGEanDEGIT8bxE7MZBYO8vfxQYY3flH1jaZJGUtgeeJ93veDawR4K4dwMWBMZ5Bep0i5TC6sBbxF3cz2DbEUc7irg8Bt2V6VjOgMgJUyJgOTPOxJ7OU/1+X8VyfUTbBdsuOCrOSdgcHxEpie2Jy+ZVwdbzr5Agzg8DbwfG2V25FSUkkTgfB14g7W/2YSwpT7RtgFmBcb6KTXwUkZL5FDZDPupifxBbchhtE9LfUBdiT2xaKSBZrYitv0/5O60AN2DzCqK9j9i8BHOBrRLEKSJBJhJ7c7qTNMN9q5JmE6Gu5WFghwTxS/MagE0snUH63+cviE3wU/VeYhv/JcC+CeIUkUBtwAXE3qTuIM0TymBsPX/qm2wFuBqtV5a+fQh4iPS/x3nYMt4UtiJ+eeJXE8UqIsEGAjcSewOYhO36l8JhpNkytWtZiHU4UnRmpLGtB1xKPp3RF4jdkruzHYifY3NuolhFJJFRxG/R+xhpVgeAzX6eHBxvT+UN4FjSDL1KYxkH/AxYRD6/vWuwVNkpfIy47KDV8ie0qkakIY3HGrvIG8IT2Pv7FJYlbebAruV54BjUEWhFY4FTyec9fwWbnHsm6RrT/Yhd518B/gkMShSviOTgvdj6+Mgbw3Oke5/eH/gGafMFdC1PAgcTu8+6lNMY4DukX4raubyMzS1I5TPE5ye4B631F2kKWxO7FriCjSxskTDmzYHHg2PuqzwOHIg6As1oDHAa+T3xV8tlpFlKW/UFYpf+VrBRvuUSxiwiOduZ+PeDs7AUo6kMxSbtRd/g+irPYdu7jk54bpKP8djQe/QoWF9lJvZ6KZU24HsJ4n6WdK/4RKRAHyY2W2AFG3o8Noe4Xw2Ou9ab+DmkydAmaW2OJfHJa3Jf53IXsE7CcxsM/CFB3C8BayWMW0QKtg9pboop9i3vbHnS7irYW1kE/BlbYqUNUMprKHAo+SSY6q7MA04m7aTSccBtCWJ/HVg/YdwiUhKHEbstaLVcgO1OmFIeedl7Ky9inZ01Ep+n1G4j7G8yheJ+F3nsP7ExaZbKvpFD7CJSIseQphNwF7BS4tiHkX5ntr7KEiyH+35oqVQRRmO/4UkU9xuoYHMLjiH9yNBHSbNy4Q1gQuLYRaSEDiLN64BXyGfTkM2AexPEX2+Zhr1v3gN1BlIag41eXU38mvcs5VLs1VRqR5NmWeyr2KiCiLSo/Ulzc5kPfDqH+AdiecrzXNfdV2fgd9jqCHUG/MYBR2EJovLMDdFbeRz4SMqT7jCEdHtlPI/2xhARYC/iVwdUy4+wRjq1FYBfUexrga5lBjZx8Rg0Z6BW/bA8+d8E/k0xs/h7KlOBE8jn9/we4IFE5/Eo6VJ6i0gD2pn4ZEHV8l/yW160KfCvROfhLU8APwV2R1nWOlsVy2b3J+Ativ87dS0Lgf8hbUKfzvYmXd6C+1CSHxHpxo6kG0p/C9usJC8fAh5JcB5RZTH2JHYhNkKwEa2xxHAAdq7HYOf+KMX/LXorN5Dfe/JBpN0e+za0E6aI9GJjbKlbihtQO3aDy2MIlY56jqXYZYP1lNeBK7FNaj6Jrctu5I2KhmPD+UcAZ2ND+nls+xxRbsE6xHlZDbgz+Bw6l5vQqJOI1GB10j6Z3Uq+78QHAZ8lXccmZZkP3A9cjG2SdCCwLfYOtwwjBoOwrHe7AEcC3wf+hqWUzTuFc9Rvc+fQb6hve2PzC1Kd0x+x7IEiUqcy3GSLMAZ7Gt0h0efPBL6CTdzLy2CskfoGzZHvfAHWqXkBW3o5FVuFMLVLmdXx/1/dCGcRMLvT57Txzr4Hg7An9zZse+ZlsXffnf+5LNZJXAvL+dAM18jt2MjLv3KscxTwQ9LtGVDp+PyTsc6YiEjNBmMTs1I+cV1L+sRBXQ0GPgc87YxdpfHLDaTdqrcnu5J2RGo+ljNBRCSzfsCPSXsTfg1L8Zu3fljynhvqjFelscsCbAJiERnwhgO/IO3rkbeA7fI6IRFpfkeQLldAtfyW/JZadfU+rFEoS7IZlfgyA5uEWtTrn+2AZ/qI0VseRwl+RCSBbbGn9ZQ3sNexiW5FWRXbZ/0V0p6nSn7lv1g63aEU53Ok2Xujc/kXNndHRCSJVckn//61FJs9rx/2bvhSypF3XqW+Mh04DxvZKYNNSDu69CvyW14rIi1sKOknB1aw2etfpPi18GOwmdqpUrOqxJTqDo2HUezTfk9OJ/6c52JZFEVEctMGfIl83pk/BHwwn9Pq05bY0qrnKL7BU7FG/3aso1j2pZ1DsHTQUef+JNrKV0QKtCX5NYZXA+PzOa2abIStHY+8qav0XaqN/onAKn39kUpmB2JWAFzBO7kbREQKsyxwDfnc/BdgM7lH5HJmtXsfcBpwN+XakbBZyiysA3gc+eeNiPZLsn8Pi4Cv5R+yiEjP2rAbU17bt76MvZcven5Ad5bB8gucB0ym+MazUcujwJnYZMxmSmU7Cvv91vt9TAa2yj9cEZHabE++m+88BRxAudPRbogNV19Ktht/K5Ql2FyPXwIHActn+qYbx97U9/1cRXE5MkREajYKS6qTZwMyiXy3G/ZYGRshOBN7l506wVIZy8yOcz+z47tohMZtJPBN4vavuJy+v6e3sf0rREQayieBKeTbsNwKfCSPkws0FNgCOBw4C7gOeIniG+mIsgh4DBv9+DbwCWBdLM9CoxiNxT4NO6d2YPOAz10Jy1fQ03d3E8XmwhARcVkJ+Dv5Nzz3Yo1NIzU0XY3BXqkcha0hvwi4DescpM4qV0+Zh62EuB57Oj4Zy+b4Xmx3wUY1BpvY2V0j/Y+gOo7q5rPnAF+g3K+1RFqCLkK/NuCz2Pr5ZXKu+3HgB9ie6ItyrjulgcBqHWVFut+2d2xHqWaIG9Pp2K5/h+kd/+y8VfBc7Km38xbDUzr979ex+R6vxZ1WKayFzdk4gt5Xm+yAdcg82rAn/Z06/vd/sJGgp5yfKyJSKquT33LBruUFbJXCssnPUhrVNsBl1L6M89aget+DbVT0daB/0GeKiJTSp7CnxyI6AnOxYWplUBOwVxT7A3eS7ff00aA4lNRHRFrGGOB80u6L3le5CdgXbaLSitbBViB4O6L3oteEIiKZ7IS9py+qE1AB3gDOxlL7SvOqPu3fSGzH8xN5noSISDMZCPw/el8SlVe5G5uwqCHZ5tAGbAv8HHiLNL+ZR9G7exERl+Ww9/P/v717ea2jDOM4/k0bjabaRlBi0UWktqYQ7xcQlKIggqg7u/Ky7kJdKIobN+5EBRH8BxTUhW5EBS8FFypYvKGmIsZra9ukpsWmrVojLn4TPVZMUjyTd+ac7wceZrIp7zln6PvMO8+8TxNecTtCNmrZCgzX+aFVi3HgEWCKlble7lyZjyVJve1SUmFdOglYiMPAC2Spt4l95hUTZKe+D1j5a2QKa0kkqSsGgNtoXqvdQ2RXu7vo/f3qm2412SjpMeAryl8b2+r9uJLUXwbJbmlN3Bp3ntQMPEy28rUavH7ryXL7M8A05a+BztiNK0SS1HWnAPdRXyFXN2Iv8BwpItxcz9fQd9aQJk9PAJ9S/jdeLN4HNtTzNUiS1pL92Q9S/j/8pWIP8DxZGp7ASvHlOJe0d34S2EG2Ji79Oy4VO4Cb6/gyJEn/to40ndlH+QlguTFHihsfJ7sh9vvd4pnADcADJFH6nvK/kRO/pL/4XLfZhkmNwP2kMU7bHAA+IZshfdZxnCk5qC5bQ1oAbwQuJF0CLyF3+230Bmkw9VbpgUiqlwlAO5wM3E7uJi8oPJZu2A9MAt8C31TH76rjLprV2XAQGCW9688hTZ82VrGJ9k70neZJo6BHgY8Kj0XSCjEBaJcB4Ebgnuq4quxwajFPKuBnSOHhNEkYpqv4mexdcLQ6n6vODy3x7w6S9rerSa3FKvKoZYR/thdeiFEy2Z9N79Y3HCA9K54miZgkqQU2kIYvs5R/Xmy0K74A7iWPLyRJLXU6cDfZs730xGI0N44CzwJbkCT1nMvJK2b7KT/hGM2ISeBB8laCJKnHnQrcAWynu61hjXbENPAUcBWSpL51HvAQqe4uPTEZ9cUcWeK/iRQ8StKifAugv2wiLYC3knfW1W5zwKvAi8Ar5O0ISVoWE4D+NU46Et4KXEZvvlLYi2aBl4GXgNeBX8oOR1JbmQAIUiB2HXBLFSNlh6PjTJJJ/03gbZq1UZKkljIB0PFOAq4hz5KvBy6mdzfCaaq9pIBzO/Aa8GPZ4UjqRSYAWsoIcC1ZIdiCCUEdZoB3+HvS/7zscCT1AxMAnaiFhOBq4ArgSnxkcCL+IEv671bxHvBl0RFJ6ksmAPq/BoDzSSKwEBeRHQr73e+kA+KHHfExqd6XpKJMAFSXMWAzMNFxHKc3E4NjwNdk6X5nx3En8GvBcUnSfzIB0EoaIO1zx8gGRZ3HMWA9MFRkZIv7jRTm7QJ2k855U2TSnwJ+IHf7ktQaJgBqmjNIC96zSEIwWp2vI6sHp5Gag7XV30PkOu6sQxgChsnE3bk5zjGy/H6EvD9/sDo/DPxUxWzH+T5gD5n8Jamn/AloZRPZ+FuuAAAAAABJRU5ErkJggg==">
      
      <!-- Основной контент грамоты -->
        <h1 class="title">ГРАМОТА</h1>
        <div class="stamp" title="Место для печати"></div>
        <span class="award-text">Награждается</span>
        <span class="recipient-name">{{fio}}</span>
        <span class="role">{{role}}</span>
        <span class="location">{{rank}}</span>
        <span class="signatory">Шмелёва Е.В.</span>
        <div class="signature-line-1"></div>
        <div class="signature-line-2"></div>
    </div>
</body>
</html>`
},{
    name: "Искусство",
    img: img4,
    template: `
<!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://fonts.googleapis.com/css?family=JejuMyeongjo&display=swap" rel="stylesheet" />
    <title>Грамота</title>
    <style>
        * {
            box-sizing: border-box;
            margin: 0;
            padding: 0;
        }
        
        body {
            font-family: 'JejuMyeongjo', serif;
            background: rgba(229,243,241,0.93);
            display: flex;
            justify-content: center;
            align-items: center;
            min-height: 100vh;
            padding: 20px;
        }
        .certificate-container {
            width: 100%;
            max-width: 1200px;
            height: auto;
            min-height: 800px;
            aspect-ratio: 4 / 5;
            background: linear-gradient(to bottom, 
                rgba(255, 248, 220) 0%, 
                rgba(255, 248, 220) 30%, 
                rgba(210, 105, 30, 0.43) 70%, 
                rgba(210, 105, 30, 0.60) 100%);
            position: relative;
            overflow: hidden;
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
            margin: 0 auto;
        }
        
        /* Фоновые круги - адаптивные */
        .circle-bg {
            background: rgba(255,255,255,0.5);
            border-radius: 100%;
            position: absolute;
        }
        
        .circle-bg-1 { width: 20.83%; height: 14.7%; top: -6.13%; left: -4.34%; }
        .circle-bg-2 { width: 15.63%; height: 11.37%; top: 4.83%; left: 49.48%; }
        .circle-bg-3 { width: 23.44%; height: 16.37%; top: 14.83%; left: -25.68%; }
        .circle-bg-4 { width: 20.83%; height: 14.7%; top: 14.83%; left: 14.79%; }
        .circle-bg-5 { width: 15.63%; height: 11.37%; top: 24.83%; left: 41.67%; }
        .circle-bg-6 { width: 20.83%; height: 14.7%; top: 29.83%; left: -3.44%; }
        .circle-bg-7 { width: 13.02%; height: 9.7%; top: 29.83%; left: 71.77%; }
        .circle-bg-8 { width: 18.23%; height: 13.03%; top: 39.73%; left: 23.44%; }
        .circle-bg-9 { width: 13.02%; height: 9.7%; top: 42.9%; left: 54.74%; }
        .circle-bg-10 { width: 20.83%; height: 14.7%; top: 47.9%; left: -3.44%; }
        .circle-bg-11 { width: 15.63%; height: 11.37%; top: 57.17%; left: 24.17%; }
        .circle-bg-12 { width: 10.42%; height: 8.03%; top: 57.17%; left: 74.38%; }
        .circle-bg-13 { width: 13.02%; height: 9.7%; top: 60.97%; left: 49.48%; }
        .circle-bg-14 { width: 18.23%; height: 13.03%; top: 65.97%; left: -1.46%; }
        .circle-bg-15 { width: 13.02%; height: 9.7%; top: 76.53%; left: 33.85%; }
        .circle-bg-16 { width: 10.42%; height: 8.03%; top: 76.93%; left: 63.96%; }
        .circle-bg-17 { width: 13.02%; height: 9.7%; top: 85.27%; left: 6.98%; }
        .circle-bg-18 { width: 23.44%; height: 16.37%; top: 38.63%; left: -29.27%; }
        .circle-bg-19 { width: 20.83%; height: 14.7%; top: 56.93%; left: -27.97%; }
        .circle-bg-20 { width: 10.42%; height: 8.03%; top: 94.6%; left: 32.92%; }
        .circle-bg-21 { width: 15.63%; height: 11.37%; top: 84.6%; left: -22.76%; }
        .circle-bg-22 { width: 13.02%; height: 9.7%; top: 98.37%; left: -7.14%; }
        
        /* Текстовые элементы - адаптивные */
        .title {
            color: rgba(72,55,55,1);
            position: absolute;
            top: 7%;
            left: 0;
            width: 100%;
            font-weight: normal;
            font-size: clamp(2rem, 8vw, 8rem);
            text-align: center;
            margin: 0;
        }
        
        .award-text {
            color: rgba(72,55,55,1);
            position: absolute;
            top: 24%;
            left: 50%;
            transform: translateX(-50%);
            font-weight: normal;
            font-size: clamp(1.2rem, 3.5vw, 3.5rem);
            text-align: center;
            width: 80%;
            max-width: 500px;
        }
        
        .recipient-name {
            color: rgba(72,55,55,1);
            position: absolute;



            top: 30%;
            left: 0;
            width: 100%;
            font-weight: normal;
            font-size: clamp(1.5rem, 4.5vw, 4.5rem);
            text-align: center;
            padding: 0 5%;
        }
        
        .role {
            color: rgba(72,55,55,1);
            position: absolute;
            top: 43%;
            left: 50%;
            transform: translateX(-50%);
            font-weight: normal;
            font-size: clamp(1.2rem, 3.5vw, 3.5rem);
            text-align: center;
            width: 80%;
            max-width: 300px;
        }
        
        .location {
            color: rgba(72,55,55,1);
            position: absolute;
            top: 63%;
            left: 50%;
            transform: translateX(-50%);
            font-weight: normal;
            font-size: clamp(1.3rem, 4vw, 4rem);
            text-align: center;
            width: 80%;
            max-width: 450px;
        }
        
        .signatory {
            color: rgba(72,55,55,1);
            position: absolute;
            top: 85%;
            left: 5%;
            font-weight: normal;
            font-size: clamp(1.2rem, 3.5vw, 3.5rem);
            text-align: center;
            width: 40%;
            max-width: 350px;
        }
        
        .signature-line-1 {
            width: 70%;
            height: 3px;
            background: rgba(210, 105, 30,1);
            position: absolute;
            top: 36%;
            left: 15%;
        }
        
        .signature-line-2 {
            width: 25%;
            height: 3px;
            background: rgba(210, 105, 30,1);
            position: absolute;
            top: 88%;
            left: 50%;
            transform: translateX(-50%);
        }
        
        .stamp {
            width: 20%;
            aspect-ratio: 1;
            background: transparent;
            position: absolute;
            top: 74%;
            left: 70%;
            transform: rotate(-45deg);
            border: 2px dashed rgba(13,210,249,1);
            display: flex;
            justify-content: center;
            align-items: center;
            font-size: clamp(0.5rem, 1.5vw, 1.2rem);
            color: rgba(72,55,55,0.7);
        }
        
        .stamp::after {
            content: "Печать";
            transform: rotate(45deg);
        }
        
        /* Стили для рисунка */
        .decoration-image {
            position: absolute;
            width: 60%;
            height: auto;
            opacity: 0.4;
            transform: rotate(0deg);
        }
        
        .decoration-left {
            top: 45%;
            left: 60%;
        }
     
        /* Медиа-запросы для очень маленьких экранов */
        @media (max-width: 480px) {
            .certificate-container {
                aspect-ratio: 3 / 4;
            }
            
            .title {
                top: 5%;
            }
            
            .award-text {
                top: 20%;
            }
            
            .recipient-name {
                top: 28%;
            }
            
            .signature-line-1 {
                top: 32%;
            }
            
            .role {
                top: 40%;
            }
            
            .location {
                top: 58%;
            }
            
            .stamp {
                top: 70%;
            }
            
            .signatory {
                top: 82%;
            }
            
            .signature-line-2 {
                top: 85%;
            }
            
            .decoration-image {
                width: 20%;
            }
        }
    </style>
</head>
<body>
    <div class="certificate-container">
        <!-- Фоновые круги -->
        <div class="circle-bg circle-bg-1"></div>
        <div class="circle-bg circle-bg-2"></div>
        <div class="circle-bg circle-bg-3"></div>
        <div class="circle-bg circle-bg-4"></div>
        <div class="circle-bg circle-bg-5"></div>
        <div class="circle-bg circle-bg-6"></div>



        <div class="circle-bg circle-bg-7"></div>
        <div class="circle-bg circle-bg-8"></div>
        <div class="circle-bg circle-bg-9"></div>
        <div class="circle-bg circle-bg-10"></div>
        <div class="circle-bg circle-bg-11"></div>
        <div class="circle-bg circle-bg-12"></div>
        <div class="circle-bg circle-bg-13"></div>
        <div class="circle-bg circle-bg-14"></div>
        <div class="circle-bg circle-bg-15"></div>
        <div class="circle-bg circle-bg-16"></div>
        <div class="circle-bg circle-bg-17"></div>
        <div class="circle-bg circle-bg-18"></div>
        <div class="circle-bg circle-bg-19"></div>
        <div class="circle-bg circle-bg-20"></div>
        <div class="circle-bg circle-bg-21"></div>
        <div class="circle-bg circle-bg-22"></div>
        
        <img class="decoration-image decoration-left" width="512" height="512" alt="" src="data:image/png;base64,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")
          <!-- Основной контент грамоты -->
        <<h1 class="title">ГРАМОТА</h1>
        <div class="stamp" title="Место для печати"></div>
        <span class="award-text">Награждается</span>
        <span class="recipient-name">{{fio}}</span>
        <span class="role">{{role}}</span>
        <span class="location">{{rank}}</span>
        <span class="signatory">Шмелёва Е.В.</span>
        <div class="signature-line-1"></div>
        <div class="signature-line-2"></div>
    </div>
</body>
</html>`
}, {
    name: "Спорт",
    img: img5,
    template: `
<!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://fonts.googleapis.com/css?family=JejuMyeongjo&display=swap" rel="stylesheet" />
    <title>Грамота</title>
    <style>
        * {
            box-sizing: border-box;
            margin: 0;
            padding: 0;
        }
        
        body {
            font-family: 'JejuMyeongjo', serif;
            background: rgba(229,243,241,0.93);
            display: flex;
            justify-content: center;
            align-items: center;
            min-height: 100vh;
            padding: 20px;
        }
        .certificate-container {
            width: 100%;
            max-width: 1200px;
            height: auto;
            min-height: 800px;
            aspect-ratio: 4 / 5;
            background: linear-gradient(to bottom, 
              rgba(229, 237, 243, 0.93) 0%, 
              rgba(210, 223, 235, 0.93) 30%, 
              rgba(190, 210, 225, 0.93) 70%, 
              rgba(229, 232, 243, 0.93) 100%);
            position: relative;
            overflow: hidden;
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
            margin: 0 auto;
        }

        
        /* Фоновые круги - адаптивные */
        .circle-bg {
            background: rgba(255,255,255,0.5);
            border-radius: 100%;
            position: absolute;
        }
        
        .circle-bg-1 { width: 20.83%; height: 14.7%; top: -6.13%; left: -4.34%; }
        .circle-bg-2 { width: 15.63%; height: 11.37%; top: 4.83%; left: 49.48%; }
        .circle-bg-3 { width: 23.44%; height: 16.37%; top: 14.83%; left: -25.68%; }
        .circle-bg-4 { width: 20.83%; height: 14.7%; top: 14.83%; left: 14.79%; }
        .circle-bg-5 { width: 15.63%; height: 11.37%; top: 24.83%; left: 41.67%; }
        .circle-bg-6 { width: 20.83%; height: 14.7%; top: 29.83%; left: -3.44%; }
        .circle-bg-7 { width: 13.02%; height: 9.7%; top: 29.83%; left: 71.77%; }
        .circle-bg-8 { width: 18.23%; height: 13.03%; top: 39.73%; left: 23.44%; }
        .circle-bg-9 { width: 13.02%; height: 9.7%; top: 42.9%; left: 54.74%; }
        .circle-bg-10 { width: 20.83%; height: 14.7%; top: 47.9%; left: -3.44%; }
        .circle-bg-11 { width: 15.63%; height: 11.37%; top: 57.17%; left: 24.17%; }
        .circle-bg-12 { width: 10.42%; height: 8.03%; top: 57.17%; left: 74.38%; }
        .circle-bg-13 { width: 13.02%; height: 9.7%; top: 60.97%; left: 49.48%; }
        .circle-bg-14 { width: 18.23%; height: 13.03%; top: 65.97%; left: -1.46%; }
        .circle-bg-15 { width: 13.02%; height: 9.7%; top: 76.53%; left: 33.85%; }
        .circle-bg-16 { width: 10.42%; height: 8.03%; top: 76.93%; left: 63.96%; }
        .circle-bg-17 { width: 13.02%; height: 9.7%; top: 85.27%; left: 6.98%; }
        .circle-bg-18 { width: 23.44%; height: 16.37%; top: 38.63%; left: -29.27%; }
        .circle-bg-19 { width: 20.83%; height: 14.7%; top: 56.93%; left: -27.97%; }
        .circle-bg-20 { width: 10.42%; height: 8.03%; top: 94.6%; left: 32.92%; }
        .circle-bg-21 { width: 15.63%; height: 11.37%; top: 84.6%; left: -22.76%; }
        .circle-bg-22 { width: 13.02%; height: 9.7%; top: 98.37%; left: -7.14%; }
        
        /* Текстовые элементы - адаптивные */
        .title {
            color: rgba(72,55,55,1);
            position: absolute;
            top: 7%;
            left: 0;
            width: 100%;
            font-weight: normal;
            font-size: clamp(2rem, 8vw, 8rem);
            text-align: center;
            margin: 0;
        }
        
        .award-text {
            color: rgba(72,55,55,1);
            position: absolute;
            top: 24%;
            left: 50%;
            transform: translateX(-50%);
            font-weight: normal;
            font-size: clamp(1.2rem, 3.5vw, 3.5rem);
            text-align: center;
            width: 80%;
            max-width: 500px;
        }
        
        .recipient-name {
            color: rgba(72,55,55,1);
            position: absolute;



            top: 30%;
            left: 0;
            width: 100%;
            font-weight: normal;
            font-size: clamp(1.5rem, 4.5vw, 4.5rem);
            text-align: center;
            padding: 0 5%;
        }
        
        .role {
            color: rgba(72,55,55,1);
            position: absolute;
            top: 43%;
            left: 50%;
            transform: translateX(-50%);
            font-weight: normal;
            font-size: clamp(1.2rem, 3.5vw, 3.5rem);
            text-align: center;
            width: 80%;
            max-width: 300px;
        }
        
        .location {
            color: rgba(72,55,55,1);
            position: absolute;
            top: 63%;
            left: 50%;
            transform: translateX(-50%);
            font-weight: normal;
            font-size: clamp(1.3rem, 4vw, 4rem);
            text-align: center;
            width: 80%;
            max-width: 450px;
        }
        
        .signatory {
            color: rgba(72,55,55,1);
            position: absolute;
            top: 85%;
            left: 5%;
            font-weight: normal;
            font-size: clamp(1.2rem, 3.5vw, 3.5rem);
            text-align: center;
            width: 40%;
            max-width: 350px;
        }
        
        .signature-line-1 {
            width: 70%;
            height: 3px;
            background: rgb(13, 33, 249);
            position: absolute;
            top: 36%;
            left: 15%;
        }
        
        .signature-line-2 {
            width: 25%;
            height: 3px;
            background: rgb(13, 33, 249);
            position: absolute;
            top: 88%;
            left: 50%;
            transform: translateX(-50%);
        }
        
        .stamp {
            width: 20%;
            aspect-ratio: 1;
            background: transparent;
            position: absolute;
            top: 74%;
            left: 70%;
            transform: rotate(-45deg);
            border: 2px dashed rgba(13,210,249,1);
            display: flex;
            justify-content: center;
            align-items: center;
            font-size: clamp(0.5rem, 1.5vw, 1.2rem);
            color: rgba(72,55,55,0.7);
        }
        
        .stamp::after {
            content: "Печать";
            transform: rotate(45deg);
        }
        
        /* Стили для рисунка */
        .decoration-image {
            position: absolute;
            width: 60%;
            height: auto;
            opacity: 0.4;
            transform: rotate(-45deg);
        }
        
        .decoration-left {
            top: 45%;
            left: 60%;
        }
     
        /* Медиа-запросы для очень маленьких экранов */
        @media (max-width: 480px) {
            .certificate-container {
                aspect-ratio: 3 / 4;
            }
            
            .title {
                top: 5%;
            }
            
            .award-text {
                top: 20%;
            }
            
            .recipient-name {
                top: 28%;
            }
            
            .signature-line-1 {
                top: 32%;
            }
            
            .role {
                top: 40%;
            }
            
            .location {
                top: 58%;
            }
            
            .stamp {
                top: 70%;
            }
            
            .signatory {
                top: 82%;
            }
            
            .signature-line-2 {
                top: 85%;
            }
            
            .decoration-image {
                width: 20%;
            }
        }
    </style>
</head>
<body>
    <div class="certificate-container">
        <!-- Фоновые круги -->
        <div class="circle-bg circle-bg-1"></div>
        <div class="circle-bg circle-bg-2"></div>
        <div class="circle-bg circle-bg-3"></div>
        <div class="circle-bg circle-bg-4"></div>
        <div class="circle-bg circle-bg-5"></div>
        <div class="circle-bg circle-bg-6"></div>
        <div class="circle-bg circle-bg-7"></div>



        <div class="circle-bg circle-bg-8"></div>
        <div class="circle-bg circle-bg-9"></div>
        <div class="circle-bg circle-bg-10"></div>
        <div class="circle-bg circle-bg-11"></div>
        <div class="circle-bg circle-bg-12"></div>
        <div class="circle-bg circle-bg-13"></div>
        <div class="circle-bg circle-bg-14"></div>
        <div class="circle-bg circle-bg-15"></div>
        <div class="circle-bg circle-bg-16"></div>
        <div class="circle-bg circle-bg-17"></div>
        <div class="circle-bg circle-bg-18"></div>
        <div class="circle-bg circle-bg-19"></div>
        <div class="circle-bg circle-bg-20"></div>
        <div class="circle-bg circle-bg-21"></div>
        <div class="circle-bg circle-bg-22"></div>
        
        <img class="decoration-image decoration-left" width="512" height="512" alt="" src="data:image/png;base64,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")
      <!-- Основной контент грамоты -->
        <h1 class="title">ГРАМОТА</h1>
        <div class="stamp" title="Место для печати"></div>
        <span class="award-text">Награждается</span>
        <span class="recipient-name">{{fio}}</span>
        <span class="role">{{role}}</span>
        <span class="location">{{rank}}</span>
        <span class="signatory">Шмелёва Е.В.</span>
        <div class="signature-line-1"></div>
        <div class="signature-line-2"></div>
    </div>
</body>
</html>`
}]