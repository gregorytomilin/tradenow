<!doctype html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="style/style.css?v=1.0.13">
    <title>TradeToday</title>
</head>
<body>

<div class="center">
    <div class="header">
        <div class="block_one"></div>
        <div class="block_two">
            <button><div><img src="img/user.svg" alt=""></div><div>Войти</div></button>
        </div>
    </div>
</div>

<div class="center">
    <div class="main">
        <div class="main_form">
            <form id="checkin_form">
                <h1>Начните торговать прямо сейчас</h1>
                <ul>
                    <li>Нет спреда - торгуйте с прозрачными и точными котировками</li>
                    <li>Достаточно депозита в 10$, чтобы начать торговать</li>
                </ul>

        <div class="form_inputBlock">
                <input type="text" name = "email" id="inputEmail">
                <label for="inputEmail">
                    <span>Ваш e-mail</span>
                </label>
        </div>
        <div class="form_inputBlock">
            <div class="form_inputblock_wrongPass">
                <div class="form_inputblock_wrongPass_inner">Неверный пароль</div></div>
                <input type="text" name = "pass" id="inputPass">
                <label for="inputPass">
                <span>Придумайте пароль</span>
                </label>
        </div>




                <div class="main_form_currency">
                    <div class="main_form_currency_ann">Валюта для ввода и вывода средств</div>
                    <div class="main_form_currency_inputs">
                    <input id="form_cur_rub" type="radio" name="currency" checked>
                    <label for="form_cur_rub">P</label>
                    <input id="form_cur_usd" type="radio" name="currency">
                    <label for="form_cur_usd">S</label>
                    <input id="form_cur_euro" type="radio" name="currency">
                    <label for="form_cur_euro">E</label>
                    </div>

                </div>
                <div class="main_form_agreement">
                    <input id="form_agreement" type="checkbox">
                    <label for="form_agreement">Я совершеннолетний, ознакомился и принимаю соглашение об оказании услуг</label>
                </div>

                <div class="form_email_error">
                    <div><img src="img/attention.png" alt=""></div>
                    <div>Учетная запись с указанным e-mail уже существует</div>
                </div>


                <button id="buttonReg">Зарегистрироваться</button>
            </form>
        </div>
    </div>
</div>

<div class="main_img"><img src="img/dark.png" alt=""></div>


<script src="js/script.js?v=1.0.13"></script>


</body>
</html>