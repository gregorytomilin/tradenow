let inputPass = document.querySelector('#inputPass');
let inputEmail = document.querySelector('#inputEmail');
let wrongPassAtt = document.querySelector('.form_inputblock_wrongPass_inner');
let wrongEmail = document.querySelector('.form_email_error');

// Кнопка отправки данных
let buttonReg = document.querySelector('#buttonReg');
buttonReg.addEventListener('click', (e)=>{
    e.preventDefault()
    if(inputPass.value.length<4){
        wrongPassAtt.style.display = 'block';
        wrongPassAtt.addEventListener('click',()=>{
            wrongPassAtt.style.display = 'none'
        })
    } else {wrongPassAtt.style.display = 'none'}
    if(inputEmail.value == 'test@email.ru'){
        wrongEmail.style.display = 'flex'
    } else {wrongEmail.style.display = 'none'}



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

