let inputPass = document.querySelector('#inputPass');
let inputEmail = document.querySelector('#inputEmail');
let wrongPassAtt = document.querySelector('.form_inputblock_wrongPass_inner');
let wrongEmail = document.querySelector('.form_email_error');
let checkboxFormAgreement = document.querySelector('#form_agreement');
let currencyCheck = document.getElementsByName('currency');
// var formReg = document.querySelector('#checkin_form').elements;
inputEmail.addEventListener('click', ()=>{
        wrongPassAtt.style.display = 'none';
});
document.querySelector('.form_inputblock_wrongPass').addEventListener('click', ()=>{
        wrongPassAtt.style.display = 'none';
});
// Применение стилей для радио Валюты
const inputRadio = document.querySelectorAll('input[type="radio"]');
for (const radio of inputRadio) {
    if (radio.checked){
        radio.classList.add('currencyChecked');
    }
};

for (const radio of inputRadio) {
    radio.addEventListener('click',(e)=> {

        for (const radio of inputRadio) {
            radio.classList.remove('currencyChecked')
        };
        e.target.classList.add('currencyChecked');


    })
}

// ключи проверки
let emailOk = false;
let passOk = false;
let agreementOk = false;
// inputPass.addEventListener('keyup', ()=> {
//     console.log(inputPass.value);
// });
// Проверка принятия соглашения пользователя
checkboxFormAgreement.addEventListener('click',()=>{
    if(!checkboxFormAgreement.checked){
        checkboxFormAgreement.classList.add('unchecked_agreement');
    } else{
        checkboxFormAgreement.classList.remove('unchecked_agreement');
        agreementOk = true;
    }
});

// Кнопка отправки данных
let buttonReg = document.querySelector('#buttonReg');


// Функция отправки данных и проверки
buttonReg.addEventListener('click', (e)=>{
    e.preventDefault();

    //Переменная с данными для сервера
    let dataServer = '';
    // Проверка пароля если менее 4-х символов
    if(inputPass.value.length<4){
        wrongPassAtt.style.display = 'block';
        passOk = false;
        inputPass.addEventListener('click',()=>{
            wrongPassAtt.style.display = 'none';

            inputPass.addEventListener('keyup', ()=>{
                console.log(inputPass.value);

                if (inputPass.value.length<4){
                    wrongPassAtt.style.display = 'block';
                } else{
                    wrongPassAtt.style.display = 'none';
                }
            })
        })
    } else {
        wrongPassAtt.style.display = 'none';
        passOk = true;
    }



    //Проверка на пустую почту
    if (inputEmail.value === ''){
        emailOk = false;
        console.log('необходимо указать почту')
    } else {
        // wrongEmail.style.display = 'none';
        // Проверка email
        if(inputEmail.value === 'test@email.ru') {
            wrongEmail.style.display = 'flex';
            emailOk = false;
        } else {
            wrongEmail.style.display = 'none';
            emailOk = true;
        }

    };




    // Проверка соглашения
    if(!checkboxFormAgreement.checked){
        checkboxFormAgreement.classList.add('unchecked_agreement');
        agreementOk = false;

    } else{
        checkboxFormAgreement.classList.remove('unchecked_agreement');
        agreementOk = true;
    }

    //Выбранная валюта
    let currencyValue;
    for (const radio of currencyCheck){
        if (radio.checked){
            currencyValue = radio.id;
        }

    }
    // Проверка ключей и отправка на сервер
    if(passOk && emailOk && agreementOk){
        console.log('отправка на сервер');


        //Формирование данных для сервера в случае успещной проверки ключей
        dataServer = `Почта:${inputEmail.value} Пароль:${inputPass.value} Валюта: ${currencyValue}`;
        console.log(dataServer);
        alert('Все проверки пройдены. Данные отправены на сервер')
    }else {
        console.log('не полные данные')
    }


});



// Проверка на наличие данных в поле ввода email и пароля
var inputText = document.querySelectorAll('input[type="text"]');
for (const inputs of inputText) {
    inputs.addEventListener('blur',()=> {
        if (inputs.value !== ''){
            inputs.classList.add('input_hasValue')
        } else {
            inputs.classList.remove('input_hasValue')
        }
    })
}


