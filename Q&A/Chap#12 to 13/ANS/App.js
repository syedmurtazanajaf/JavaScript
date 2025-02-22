// Q1: Write a program that takes a character (number or string)
// in a variable & checks whether the given input is a
// number, uppercase letter or lower case letter. (Hint: ASCII
// codes:- A=65, Z=90, a=97, z=122).

// ANSWER

// function checkCharacterType(char) {
//     if (char.length !== 1) {
//         console.log("Please enter a single character.");
//         return;
//     }
//     let ascii = char.charCodeAt(0);

//     if (ascii >= 48 && ascii <= 57) {
//         console.log("The character is a number.");
//     } else if (ascii >= 65 && ascii <= 90) {
//         console.log("The character is an uppercase letter.");
//     } else if (ascii >= 97 && ascii <= 122) {
//         console.log("The character is a lowercase letter.");
//     } else {
//         console.log("The character is neither a number nor a letter.");
//     }
// }

// checkCharacterType('A'); // Uppercase letter
// checkCharacterType('z'); // Lowercase letter
// checkCharacterType('5'); // Number
// checkCharacterType('@'); // Neither

// Q2: Write a JavaScript program that accept two integers and display the larger. Also show if the two integers are equal.

// ANSWER

// let num1 = +prompt("Enter First Integer Number");
// let num2 = +prompt("Enter Second Integer Number");

// if(num1 > num2){
//     document.write(num1 + " is larger then " + num2);
// }

// else if(num2 > num1){
//     document.write(num2 + " is larger then " + num1);
// }

// else if(num1 == num2){
//     document.write(num1 + " is equal to " + num2);
// }
// else{
//     document.write("Try Again");
// }

// Q3: Write a program that takes input a number from user & state whether the number is positive, negative or zero.

// ANSWER

// let num = parseFloat(prompt("Enter the Number"));

// if(num > 0){
//     document.write("The Number is Positive");
// }
// else if(num < 0){
//     document.write("The Number is Negetive");
// }
// else if(num == 0){
//     document.write("The Number is Zero");
// }
// else{
//     document.write("Not a Number");
// }

// Q4: Write a program that takes a character (i.e. string of length 1) and returns true if it is a vowel, false otherwise

// ANSWER

// let char = prompt("Enter Alphabet");
// let vowel = "aeiouAEIOU".includes(char);

// console.log(vowel);

// Q5: Write a program that
// a. Store correct password in a JS variable.
// b. Asks user to enter his/her password
// c. Validate the two passwords:
// i. Check if user has entered password. If not, then
// give message “ Please enter your password”
// ii. Check if both passwords are same. If they are
// same, show message “Correct! The password you
// entered matches the original password”. Show
// “Incorrect password” otherwise.

// ANSWER

// let correctPass = "Syed@123";
// let userPass = prompt("Enter Password");

// if(userPass === ""){
//     alert("Please Enter Your Password");
// }

// else if(userPass === correctPass){
//     alert("Your Password is Correct");
// }
// else{
//     alert("Incorrect Password");
// }

// Q6: This if/else statement does not work. Try to fix it:
// var greeting;
// var hour = 13;
// if (hour < 18) {
// greeting = "Good day";
// else
// greeting = "Good evening";
// }

// ANSWER

// let greeting;
// let hour = 20;
// if(hour < 18){
//     greeting = "Good day";
// }
// else{
//     greeting = "Good evening"
// }
// alert(greeting);

// Q7: Write a program that takes time as input from user in 24
// hours clock format like: 1900 = 7pm. Implement the
// following case using if, else & else if statements

// ANSWER

let time = prompt("Enter time in 24-hour format");
if(time >= "0000" && time < 1200){
    alert("Good Morning");
}

else if(time >= 1200 && time < 1700){
    alert("Good Afternoon");
}
else if(time >= 1700 && time < 2100){
    alert("Good Evening");
}
else if(time >= 2100 && time < 2359){
    alert("Good Night");
}