// Q1: Write a program to take “city” name as input from user. If
// user enters “Karachi”, welcome the user like this:
// “Welcome to city of lights”

// ANSWER

// let city = prompt("Enter City Name").toLowerCase();
// if(city == "karachi"){
//     alert("Welcome to city of lights")
// }
// else{
//     alert("Invalid City");
// }

// Q2: Write a program to take “gender” as input from user. If the
// user is male, give the message: Good Morning Sir. If the
// user is female, give the message: Good Morning Ma’am.

// ANSWER

// let gender = prompt("Enter Your Gender").toLowerCase();

// if(gender == "male"){
//     alert("Good Morning Sir!")
// }
// else if(gender == "female"){
//     alert("Good Morning Ma’am!");
// }
// else{
//     alert("Invalid Input");
// }

// Q3: Write a program to take input color of road traffic signal from the user & show the message according to this table:

// ANSWER

// let trafficSignal = prompt("Enter Traffic Signal Color").toLowerCase();

// if (trafficSignal == "red") {
//     alert("Must stop");
// }
// else if (trafficSignal == "yellow") {
//     alert("Ready to move");
// }
// else if (trafficSignal == "green") {
//     alert("Move now");
// }
// else {
//     alert("Invalid Color!");
// }

// Q4: Write a program to take input remaining fuel in car (in
//     litres) from user. If the current fuel is less than 0.25litres,
//     show the message “Please refill the fuel in your car”

// ANSWER

// let remainingFuel = +prompt("Enter Remaining Fuel in litre");

// if(remainingFuel <= 0.25){
//     alert("“Please refill the fuel in your car");
// }
// else{
//     alert("No Worries You Have a Fuel!");
// }

// Q5: Run this script, & check whether alert message would be displayed or not. Record the outputs.

// ANSWER

// let a = 4;
// if(++a === 5){
//     alert("given condition for variable a is true");
// }

// let b = 82;
// if (b++ === 83){
// alert("given condition for variable b is true");
// }

// let c = 12;
// if (c++ === 13){
// alert("condition 1 is true");
// }
// if (c === 13){
// alert("condition 2 is true");
// }
// if (++c < 14){
// alert("condition 3 is true");
// }
// if(c === 14){
// alert("condition 4 is true");
// }


// let materialCost = 20000;
// let laborCost = 2000;
// let totalCost = materialCost + laborCost;
// if (totalCost === laborCost + materialCost){
// alert("The cost equals");
// }

// if (true) {
//     alert("True");
// }
// if (false) {
//     alert("False");
// }

// if("car" < "cat"){
//     alert("car is smaller than cat");
//     }

// Q6: Write a program to take input the marks obtained in three
// subjects & total marks. Compute & show the resulting
// percentage on your page. Take percentage & compute
// grade as per following table:
// Show the total marks, marks obtained, percentage, grade &
// remarks like:

// ANSWER

// let eng = +prompt("Enter English Marks");
// let urdu = +prompt("Enter Urdu Marks");
// let sci = +prompt("Enter Science Marks");
// let obtainMarks = eng + urdu + sci;
// let totalMarks = 300
// let percentage = (obtainMarks / totalMarks) * 100;

// if (percentage >= 80) {
//     grade = "A-one";
//     remarks = "Excellent";
// }
// else if (percentage >= 70) {
//     grade = "A";
//     remarks = "Good";
// }

// else if (percentage >= 60) {
//     grade = "B";
//     remarks = "You need to improve";
// }
// else if (percentage < 60) {
//     grade = "Fail";
//     remarks = "Sorry";
// }

// document.write("Total Marks: " + totalMarks + "<br />");
// document.write("Marks obtained: " + obtainMarks + "<br />");
// document.write("Percentage: " + percentage + "<br />");
// document.write("Grade: " + grade + "<br />");
// document.write("Remarks: " + remarks + "<br />");

// Q7: Guess game:
// Store a secret number (ranging from 1 to 10) in a variable.
// Prompt user to guess the secret number.
// a. If user guesses the same number, show “Bingo! Correct
// answer”.
// b. If the guessed number +1 is the secret number, show
// “Close enough to the correct answer”.

// ANSWER

// let secretNum = Math.floor(Math.random() * 10) + 1
// let userGuess = +prompt("Enter the Number");

// if(secretNum === userGuess){
//     document.write("Bingo! Correct answer");
// }
// else if(secretNum === userGuess + 1){
//     document.write("Close enough to the correct answer")
// }
// else{
//     document.write("Wrong Guess Please Try Again!");
// }

// Q8: Write a program to check whether the given number is
// divisible by 3. Show the message to the user if the number
// is divisible by 3.

// ANSWER

// let num = +prompt("Enter a Number");
// if(num % 3 === 0){
//     document.write(num + " is divisible by 3.")
// }
// else{
//     document.write(num + " is not divisible by 3.")
// }

// Q9: Write a program that checks whether the given input is an even number or an odd number

// ANSWER

// let num = +prompt("Enter a Number");

// if(num % 2 === 0){
//     document.write(num + " is even")
// }
// else{
//     document.write(num + " is odd");
// }

// Q10: Write a program that takes temperature as input and
// shows a message based on following criteria
// a. T > 40 then “It is too hot outside.”
// b. T > 30 then “The Weather today is Normal.”
// c. T > 20 then “Today’s Weather is cool.”
// d. T > 10 then “OMG! Today’s weather is so Cool.”

// ANSWER

// let temp = +prompt("Enter a Temperature")

// if(temp > 40){
//     document.write("It is too hot outside.")
// }

// else if(temp > 30){
//     document.write("The Weather today is Normal.")
// }
// else if(temp > 20){
//     document.write("Today’s Weather is cool.")

// }
// else if(temp > 10){
//     document.write("OMG! Today’s weather is so Cool")

// }

// else{
//     document.write("Invalid Input!");
// }

// Q11: Write a program to create a calculator for +,-,*, / & %
// using if statements. Take the following input:
// a. First number
// b. Second number
// c. Operation (+, -, *, /, %)
// Compute & show the calculated result to user.

// let num1 = +prompt("Enter First Number");
// let operator = prompt("Enter Operator +, -, *, /, %");
// let num2 = +prompt("Enter Second Number");


// if(operator === "+"){
//     document.write(num1 + num2)
// }

// else if(operator === "-"){
//     document.write(num1 - num2)
// }

// else if(operator === "*"){
//     document.write(num1 * num2)
// }

// else if(operator === "/"){
//     document.write(num1 / num2)
// }

// else if(operator === "%"){
//     document.write(num1 % num2)
// }
// else{
//     document.write("Invalid Input")
// }