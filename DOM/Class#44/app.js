let listParent = document.getElementById("listParent");

function createNote() {
    let input = document.getElementById("input");
    console.log(input.value);

    if (!input.value) {
        alert("Notes Required!");
        return;
    }

    //Create li Element
    let liElement = document.createElement("li");
    liElement.innerHTML = input.value ;

    //Create edit btn
    let editBtn = document.createElement("button");
    editBtn.innerHTML = "Edit";
    editBtn.setAttribute("onclick", "editTodo(this)" );

    //Create Delete btn
    let deleteBtn = document.createElement("button");
    deleteBtn.innerHTML = "Delete";
    deleteBtn.setAttribute("onclick", "deleteTodo(this)");

    //Create Compete btn
    let completeBtn = document.createElement("button");
    completeBtn.innerHTML = "Complete";
    completeBtn.setAttribute("onclick", "completeTodo(this)");

    liElement.appendChild(editBtn);
    liElement.appendChild(deleteBtn);
    liElement.appendChild(completeBtn);

    console.log(liElement);
    listParent.appendChild(liElement);
    input.value = "";


}

function editTodo(editBtn){
    let editValue = prompt("enter edit value", editBtn.previousSibling.textContent);
    if(!editValue){
        alert("Enter Edit Value");
        return;
    }

    editBtn.previousSibling.textContent = editValue;
}

function deleteTodo(deleteBtn){
    console.log(deleteBtn.parentNode);
    deleteBtn.parentNode.remove();
}

function deleteAll(){
    listParent.innerHTML = "";
}

function completeTodo(btn){
    console.log(btn.parentNode);
    btn.parentNode.className = "liLine";
}