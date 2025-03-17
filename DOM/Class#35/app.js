// let parent = document.getElementById("parent");
// console.log(parent.firstElementChild.nextElementSibling.previousElementSibling);

//old way
// let btn = document.getElementById("btn");
// btn.onclick = foo;

// function foo(){
//     console.log("Hello World")
// }

//new way

// let btn = document.getElementById("btn");
// btn.setAttribute("onclick", "foo()");

// function foo(){
//     console.log("Hello World")
// }

// btn.setAttribute("class", "myClass");

// let btn = document.getElementById("btn");
// btn.setAttribute("onclick", "foo()");

// function foo() {
//    let check = btn.hasAttribute("class");
//     console.log(check);

//     let checkValue = btn.getAttribute("class");
//     console.log(checkValue);

//     console.log(btn.attributes);
// }

let parent = document.getElementById("parent");

let h1Element = document.createElement("h1");
h1Element.innerHTML ="Hello Saylani"

parent.appendChild(h1Element);
console.log(h1Element);

