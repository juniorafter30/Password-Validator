const pass = document.querySelector('#password');
const p = document.querySelector('.passinfo');
const letters = /[a-z]/i;
const numbers = /[0-9]/;
const special = /[!@#$%^&*()]/;
const minValue = 10;

const checkPassword = () => {
    if(pass.value.length > minValue && pass.value.match(letters) && pass.value.match(numbers) && pass.value.match(special)){
        p.innerHTML = "You have a very good password! :)";
        p.style.color = "forestgreen";
    }else if(pass.value.length > minValue && pass.value.match(letters) && pass.value.match(numbers)){
        p.innerHTML = "You have good password";
        p.style.color = "darkorange";
    }else{
        p.innerHTML = "Your password is not strong enough";
        p.style.color = "tomato";
    }
}

pass.addEventListener('keyup', function(){
    if( pass.value !== ""){
        checkPassword();
    } else {
        p.innerHTML = "You haven't written down the password";
        p.style.color ="grey";
    }
})