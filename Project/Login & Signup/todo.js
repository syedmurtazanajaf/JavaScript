function addTodo() {
    let todoInput = document.getElementById("todoInput");
    // console.log(todoInput);


    let userObj = JSON.parse((localStorage.getItem("userLogin")))
    // console.log(userObj);


    let todoObj = {
        todo: todoInput.value,
        email: userObj.email

    }
    // console.log(todoObj);

    let todoData = localStorage.getItem("todos");
    console.log(todoData);

    if (todoData === null) {
        let arr = [todoObj];
        localStorage.setItem("todos", JSON.stringify(arr))
    }
    else {
        let todoArr = JSON.parse(todoData);
        todoArr.push(todoObj);
        localStorage.setItem("todos", JSON.stringify(todoArr))

    }

    renderUI()

}



function renderUI() {
    let todoData = JSON.parse(localStorage.getItem("todos"));
    console.log(todoData);

    let parent = document.getElementById("listContainerid");
    console.log(parent);

    parent.innerHTML = "";

    for (let i = 0; i < todoData.length; i++) {
        console.log(todoData[i].todo)
        parent.innerHTML += `<div class="list">
            <h5>${todoData[i].todo}</h5>
            <div class="listBtn">
                <button onclick = "editTodo(${i})">Edit</button>
                <button onclick = "deleteTodo(${i})">Delete</button>
            </div>
        </div>`
    }
}

function editTodo(indexNumber) {
    // console.log(indexNumber);

    let todoArr = JSON.parse(localStorage.getItem("todos"));
    let oldObj = todoArr[indexNumber];
    console.log(oldObj);

    let todoPrompt = prompt("Enter updated value", oldObj.todo);
    // console.log(todoPrompt);

    let updateObj = {
        todo: todoPrompt,
        email: oldObj.email
    }
    console.log(updateObj);

    todoArr[indexNumber] = updateObj;
    console.log(todoArr);

    localStorage.setItem("todos", JSON.stringify(todoArr));
    renderUI()

}

function deleteTodo(indexNumber) {
    console.log(indexNumber);

    let todoArr = JSON.parse(localStorage.getItem("todos"));
    todoArr.splice(indexNumber, 1);
    console.log(todoArr);

    localStorage.setItem("todos", JSON.stringify(todoArr));

    renderUI()

}