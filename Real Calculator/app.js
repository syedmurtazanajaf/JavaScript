document.addEventListener("keydown", function (event){
    let key = event.key;
    let input = document.getElementById("input");

    if(!isNaN(key) || key === "."){
        getValue(key);
    }
    else if(["+", "-", "*", "/"].includes(key)){
        getValue(key);
    }
    else if(key === "Enter"){
        equalTo();
    }
    else if(key === "Backspace"){
        clearValue();
    }
    else if(key === "Delete"){
        allClear();
    }
});

function getValue(number){
    console.log(number)
    let input = document.getElementById("input");
    input.value += number;
}

function equalTo(){
    let input = document.getElementById("input")
    let result = eval(input.value);
    console.log(result);
    input.value =result
}

function allClear(){
    let input = document.getElementById("input");
    input.value = "";
}

function clearValue(){
    let input = document.getElementById("input");
    let editValue = input.value.slice(0, -1);
    input.value = editValue;
}