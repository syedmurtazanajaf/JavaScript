let num1 = +prompt("Enter your Num1");
let num2 = +prompt("Enter your Num2");
let opt =  prompt("Enter your Operator, +, -, *, /");

if(opt == "+"){
    console.log(num1 + num2);
}

else if(opt == "-"){
    console.log(num1 - num2);
}

else if(opt == "*"){
    console.log(num1 * num2);
}

else if(opt == "/"){
    console.log(num1 / num2);
}

else{
    console.log("Invalid Operator");
}