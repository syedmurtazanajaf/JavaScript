// Q1: Write a program to take a number in a variable, do the
// required arithmetic to display the following result in your
// browser:

// ANSWER

// let a = 10;
// document.write("The Value of 'a' is: ", a, "<br />");

// ++a;
// document.write("After of '++a' value is: ", a, "<br />");

// a++;
// document.write("After of 'a++' value is: ",a , "<br />")

// --a;
// document.write("After of '--a' value is: ",a , "<br />")

// a--;
// document.write("After of 'a--' value is: ",a )


// Q2: What will be the output in variables a, b & result after
// execution of the following script:
// var a = 2, b = 1;
// var result = --a - --b + ++b + b--;
// Explain the output at each stage:
// --a;
// --a - --b;
// --a - --b + ++b;
// --a - --b + ++b + b--;

// ANSWER

// let a = 2; 
// let b = 1;
// let result = --a - --b + ++b + b--;
// document.write(result);

// Q3: Write a program that takes input a name from user & greet the user.

// ANSWER

// let userName = prompt("Enter your name");

// alert("Hello " + userName + " Welcome! ");

// Q4: Write a program to take input a number from user & display it’s multiplication table on your browser. If user does not enter a new number, multiplication table of 5 should be displayed by default.

// ANSWER

// let tableValue = +prompt("Enter Table Value!");
// let startingPoint = +prompt("Enter Table Starting Point!");
// let endingPoint = +prompt("Enter Table Ending Point!");

// for(let i = startingPoint; i <= endingPoint; i++){
//     document.write(tableValue + "x" + i + "=" + tableValue * i + "<br />");
// }

// Q5: ) Take three subjects name from user and store them in 3
// different variables.
// b) Total marks for each subject is 100, store it in another
// variable.
// c) Take obtained marks for first subject from user and
// stored it in different variable.
// d) Take obtained marks for remaining 2 subjects from user
// and store them in variables.
// e) Now calculate total marks and percentage and show the
// result in browser like this.(Hint: user table)

// ANSWER

// let firstSubject = prompt("Enter Your First Subject Name");
// let secondSubject = prompt("Enter Your Second Subject Name");
// let thirdSubject = prompt("Enter Your Third Subject Name");

// let totalMarks = 100;

// let marks1 = +prompt("Enter obtained mark for " + firstSubject);
// let marks2 = +prompt("Enter obtained mark for " + secondSubject);
// let marks3 = +prompt("Enter obtained mark for " + thirdSubject);

// let totalObtained = marks1 + marks2 + marks3;

// let percentage = (totalObtained / (3 * totalMarks)) * 100;

// document.write(firstSubject, " ", totalMarks, " ", marks1, "<br />" )
// document.write(secondSubject, " ", totalMarks, " ", marks2, "<br />" )
// document.write(thirdSubject, " ", totalMarks, " ", marks3, "<br />" )
// document.write(percentage.toFixed(2));

