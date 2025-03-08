// function changeImg(ele, event){
//     console.log(ele, event);
//     if(event === "over"){
//         ele.src = "./img/find-great-work@2x.webp";
//     }else{
//         ele.src = "./img/enterprise-2023.webp" ;
//     }
// }


// function bulbHandler(btnElement){
//     console.log(btnElement.innerHTML)
//     let bulbImg = document.getElementById("bulbImg");
//     if(btnElement.innerHTML == "ON"){
//         bulbImg.src = "./img/bulbOn.jpg";
//         btnElement.innerHTML = "OFF"
//     }
//     else{
//         bulbImg.src = "./img/bulbOff.jpg"
//         btnElement.innerHTML = "ON"
//     }

// }


function styleHandler(btnEle){
    btnEle.style.backgroundColor = "red";
    btnEle.style.color = "yellow";

}