
// Adding the js syles

const form = document.getElementntById("form");
const password2 = document.getElementntById("username");
const email = document.getElementntById("email");
const password = document.getElementntById("password");
const password2 = document.getElementntById("password2");

form.addEventListener('Submit', (e)=> {
    e.preventDefault();

    checkIput();
})

function checkIput(){
    //  Geet the value from the input

    const usernameValue = username.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    const password2Value = password2.value.trim();

    if (usernameValue === ""){

        setErrorFor(username, "username can not be blank");
    }

}

function setErrorFor(input, message){
    const formControl = input.parentElement; //.form-control
    const small = formControl.querySelector('small');

    // add error message inside small
    small.innerText = "Enter correct password";
    
    // Add error class
    formControl.className = "form-control error";
}