// function changePara(){
//     let para = document.getElementById("para");
//     console.log(para.className);
//     para.className += " bigText";
//     console.log(para.classList);
//     para.classList.add("bigText");
//     para.classList.remove("bigText", "paraClass");


// }


let heading = document.getElementsByClassName("heading")

for(let i = 0; i < heading.length; i++){
    if((i + 1) % 2 == 0){
        heading[i].style.backgroundColor = "black";
        heading[i].style.color = "white";
    }

}