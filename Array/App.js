let userCity = prompt("Enter your City Name").toLowerCase();
let arr = ["Karachi", "Lahore", "Multan", "Pindi"];

let isMatch = "No";

for(let i = 0; i < arr.length; i++){
    if(userCity == arr[i]){
        isMatch = "Yes";
        break;
    }
}

if(isMatch == "Yes"){
    alert("Welcome");
}
else{
    alert("Not Found!")
}