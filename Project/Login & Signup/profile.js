function getUserData() {

    let userData = JSON.parse(localStorage.getItem("userLogin"));

    console.log(userData);


    let firstName = document.getElementById("firstName");
    let lastName = document.getElementById("lastName");
    let email = document.getElementById("email");
    let password = document.getElementById("password");

    firstName.value = userData.firstName;
    lastName.value = userData.lastName;
    email.value = userData.email;
    password.value = userData.password;
}

function updateUser() {
    let firstName = document.getElementById("firstName");
    let lastName = document.getElementById("lastName");
    let email = document.getElementById("email");
    let password = document.getElementById("password");

    let updateObj = {
        firstName: firstName.value,
        lastName: lastName.value,
        email: email.value,
        password: password.value,
    }

    let userArr = JSON.parse(localStorage.getItem("users"));
    let indexNumber;

    for(let i = 0; i < userArr.length; i++){
        if(userArr[i].email === email.value){
            indexNumber = i
        }
    }

    userArr[indexNumber]  = updateObj;
    console.log(userArr);
    localStorage.setItem("todos", JSON.stringify(userArr));

}