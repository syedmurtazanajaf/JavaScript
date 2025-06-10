function submitHandler() {
    let name = document.querySelector("#name").value;
    let email = document.querySelector("#email").value;
    console.log(name);
    console.log(email);

    let userObj = {
        name,
        email,
    }

    localStorage.setItem("user", JSON.stringify(userObj));
    window.location.replace("./quizApp.html");
}