let tableValue = +prompt("Enter Table Value!");
let startingPoint = +prompt("Enter Table Starting Point!");
let endingPoint = +prompt("Enter Table Ending Point!");

for(let i = startingPoint; i <= endingPoint; i++){
    document.write(tableValue + "x" + i + "=" + tableValue * i + "<br />");
}