function signupHandler() {
    let firstName = document.getElementById("firstName");
    let lastName = document.getElementById("lastName");
    let email = document.getElementById("email");
    let password = document.getElementById("password");


    let userObj = {
        firstName: firstName.value,
        lastName: lastName.value,
        email: email.value,
        password: password.value,
    }

    let getUsers = localStorage.getItem("users");
    console.log("users", getUsers);

    if (getUsers == null) {
        let arr = [userObj];
        console.log(arr);
        localStorage.setItem("users", JSON.stringify(arr));
        alert("user successfully signup!");
        window.location.href = "./index.html";
    }

    else {

        // parse Array of obj
        let usersArr = JSON.parse(getUsers);
        console.log(usersArr);

        // Email address check
        for (let i = 0; i < usersArr.length; i++) {
            console.log(usersArr[i].email)
            if (userObj.email === usersArr[i].email) {
                alert("Email Address Already exist")
                return;
            }
        }

        // push new user 
        usersArr.push(userObj);
        console.log(usersArr);

        // set old and new user array of object on localstorage

        localStorage.setItem("users", JSON.stringify(usersArr));
        alert("user successfully signup!");
        window.location.href = "./index.html";

    }

}



function loginHandler() {
    let email = document.getElementById("email");
    let password = document.getElementById("password");

    let getUsers = JSON.parse(localStorage.getItem("users"));
    console.log(getUsers);

    if (!getUsers) {
        alert("invalid email or password")
        return;
    }
    for (let userObj of getUsers) {
        if (userObj.email === email.value && userObj.password === password.value) {
            localStorage.setItem("userLogin", JSON.stringify(userObj))
            alert("LOGIN Successfully!")
            window.location.href = "./dashboard.html";
            return;
        }
    }
    alert("invalid email or password");
}