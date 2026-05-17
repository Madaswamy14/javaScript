const name = document.getElementById("name");
const email = document.getElementById("email");
const pswd = document.getElementById("pswd");
const submit = document.getElementById("btn");

const nameRegex = /^[a-zA-Z\s]{3,100}$/;
const emailRegex = /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]{2,}\.[a-zA-Z]{2,50}$/;
const pswdRegex = /^[a-zA-Z0-9]{6,16}$/;

let delayTimer;

const validateForm = () => {
    const isNameValid = nameRegex.test(name.value);
    const isEmailValid = emailRegex.test(email.value);
    const isPswdValid = pswdRegex.test(pswd.value);
    submit.disabled = !(isNameValid && isEmailValid && isPswdValid);

    clearTimeout(delayTimer);

    delayTimer = setTimeout(() =>{
        if (!isNameValid && name.value.length > 0){
        document.getElementById("nameerror").style.display = "inline";
    } else {
        document.getElementById("nameerror").style.display = "none";
    }

    if (!isEmailValid && email.value.length > 0){
        document.getElementById("emailerror").style.display = "inline";
    } else {
        document.getElementById("emailerror").style.display = "none";
    }

     if (!isPswdValid && pswd.value.length > 0){
        document.getElementById("pswderror").style.display = "inline";
    } else {
        document.getElementById("pswderror").style.display = "none";
    }

    },1000);    
};

submit.addEventListener("click",(event) =>{
    event.preventDefault();
    alert("Form submitted successfully");

    
});

name.addEventListener("input",validateForm);
email.addEventListener("input", validateForm);
pswd.addEventListener("input",validateForm);