// let html = +prompt("Enter your HTML Marks");
// let css = +prompt("Enter your CSS Marks");
// let JavaScript = +prompt("Enter your JavaScript Marks");

// let Total = html + css + JavaScript;

// let per = (Total / 300) * 100;

let per = 60.5;


if(per >= 90 && per <= 100){
    console.log("A+");
}

else if(per >= 80 && per < 90){
    console.log("A");
}

else if (per >= 70 && per < 80){
    console.log("B");
}

else if(per >= 60 && per < 70){
    console.log("C");
}

else if (per >= 50 && per < 60){
    console.log("D");
}

else if (per >= 40 && per < 50){
    console.log("Failed");
}

else{
    console.log("Invalid Percentage");
}