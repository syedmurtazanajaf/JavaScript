// function getValue() {
//     let email = document.getElementById("email");
//     let password = document.getElementById("password");
//     console.log(email.value);
//     console.log(password.value);
// }

// function showPassword() {
//     let password = document.getElementById("password");
//     console.log(password.type);
//     if(password.type === "password"){
//         password.type = "text";
//     }
//     else{
//         password.type = "password";
//     }
// }


// function getPara(){
//     let para = document.getElementById("para")
//     console.log(para.innerHTML);
// }

// function setPara(){
//     let para = document.getElementById("para")
//     para.innerHTML = "Hello World!";
// }

function changeImg(){
    let img = document.getElementById("img");
    img.src = "./img/find-great-work@2x.webp";
}

function mouseOutImage(){
    let img = document.getElementById("img")
    img.src = "./img/enterprise-2023.webp";
}