// // Q1: Declare and initialize an empty multidimensional array. (Array of arrays)

// ANSWER

// let multiArray = [];

// Q2: Declare and initialize a multidimensional array representing the following matrix:

// ANSWER

// let multiArray = [
//     [0, 1, 2, 3],
//     [1, 0, 1, 2],
//     [2, 1, 0, 1]
// ];
// document.write(multiArray);

// Q3: Write a program to print numeric counting from 1 to 10.

// ANSWER

// for(let i = 1; i <= 10; i++){
//     document.write(i + "<br />");
// }

// Q4: Write a program to print multiplication table of any
// number using for loop. Table number & length should be
// taken as an input from user

// ANSWER

// let tableValue = +prompt("Enter Table Value");
// let startingPoint = +prompt("Enter Table Starting Point");
// let endingPoint = +prompt("Enter Table Ending Point");

// for(let i = startingPoint; i <= endingPoint; i++){
//     document.write(tableValue + "x" + i + "=" + tableValue * i + "<br />");
// }

// Q5: Write a program to print items of the following array
// using for loop:
// fruits = [“apple”, “banana”, “mango”, “orange”,
// “strawberry”]

// ANSWER

// let fruits = ["Apple", "Banana", "Mango", "Orange", "Strawberry"];
// for(let i = 0; i < fruits.length; i++){
//     document.write(fruits[i] + "<br />");
// }

// Q6: Generate the following series in your browser. See
// example output.
// a. Counting: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15
// b. Reverse counting: 10, 9, 8, 7, 6, 5, 4, 3, 2, 1
// c. Even: 0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20
// d. Odd: 1, 3, 5, 7, 9, 11, 13, 15, 17, 19
// e. Series: 2k, 4k, 6k, 8k, 10k, 12k, 14k, 16k, 18k, 20k

// ANSWER


for(let i = 1; i <= 15; i++){
    document.write(i);
}