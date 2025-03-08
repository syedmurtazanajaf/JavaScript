function getValues(){
    let email = document.getElementById("email");
    let password = document.getElementById("password");
    console.log(email.value);
    console.log(password.value);
}

function setValue(){
    let email = document.getElementById("email");
    let password = document.getElementById("password");
    email.value = "SyedNajaf@gmail.com";
    password.value = "342523525";
}

function showPassword(){
    let password = document.getElementById("password");
    console.log(password.type);

    if(password.type == "password"){
        password.type = "text";
    }
    else{
        password.type = "password";
    }
    console.log(password.type);
}