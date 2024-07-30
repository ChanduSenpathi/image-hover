const refreshId = document.getElementById('refreshId');
const codeId = document.getElementById('codeId');
const infoId = document.getElementById('infoId');
const textId = document.getElementById('textId');

const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
const captchaCount = 6;
let char = '';
let userCaptcha = '';

const getRandomCaptcha = () => {
    char = '';
    for (let i = 0; i < captchaCount; i++) {
        const randomNumber = Math.floor(Math.random() * characters.length);
        char += characters.charAt(randomNumber);
        codeId.textContent = char;
    }
    codeId.textContent = char;
}

const getUserCaptcha = (event) => {
    userCaptcha += event.target.value
}

function submitCaptcha(event) {
    event.preventDefault();
    if(userCaptcha ==='') {
        infoId.textContent = 'Please Enter Captcha';
        infoId.style.color = 'red';
        infoId.style.textAlign = 'center';
        infoId.style.marginTop = '10px'
    }else if(userCaptcha !== char){
        infoId.textContent = 'Wrong Captcha';
        infoId.style.color = 'red';
        infoId.style.textAlign = 'center';
        infoId.style.marginTop = '10px';
        getRandomCaptcha();
        userCaptcha = '';
        textId.value = '';
    }else {
        infoId.textContent = 'Captcha Correct';
        infoId.style.color = 'green';
        infoId.style.textAlign = 'center';
        infoId.style.marginTop = '10px'
        userCaptcha = '';
        char = '';
        codeId.textContent = '';
        textId.value = '';
        getRandomCaptcha();
    }
    setTimeout(()=>{
        infoId.textContent = '';
    },2000)
}

refreshId.addEventListener('click', getRandomCaptcha);
textId.addEventListener('change', getUserCaptcha)
getRandomCaptcha();