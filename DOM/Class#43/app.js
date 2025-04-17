let parent = document.getElementById("parent");

function chat(){
    let message = document.getElementById("message");
    console.log(message.value);

    if(!message.value){
        alert("Message Required!");
        return;
    }

    let h1Element = document.createElement("h1");
    h1Element.innerHTML = message.value;

    console.log(h1Element);
    parent.append(h1Element);

    message.value = "";

}