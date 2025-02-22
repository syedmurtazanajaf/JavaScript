// Q1: Declare an empty array using JS literal notation to store student names in future.

// ANSWER

// let studentName = [];

// Q2: Declare an empty array using JS object notation to store student names in future.

// ANSWER

// let studentName = new Arry();

// Q3: Declare and initialize a strings array.

// ANSWER

// let arr = ["Murtaza", "Ali"];
// console.log(arr);

// Q4: Declare and initialize a numbers array.

// ANSWER

// let num = [1,33 ,5];
// console.log(num);

// Q5: Declare and initialize a boolean arra

// ANSWER

// let bool = [true, false];
// console.log(bool);

// Q6: . Declare and initialize a mixed array.

// ANSWER

// let mixArr = ["Murtaza", 2, true]
// console.log(mixArr);

// Q7: Declare and Initialize an array and store available
// education qualifications in Pakistan (e.g. SSC, HSC, BCS,
// BS, BCOM, MS, M. Phil., PhD). Show the listed
// qualifications in your browser like:

// ANSWER

// let arr = ["SSC", "HSC", "BSC", "BS", "B.COM", "MS", "M.Phil", "PhD"]
// document.write(arr);

// Q8: Write a program to store 3 student names in an array.Take
// another array to store score of these three students.
// Assume that total marks are 500 for each student, display
// the scores & percentages of students like:

// ANSWER

// let studentNames = ["Murtaza", "Ahad", "Ali"];

//     let studentScores = [490, 230, 480];

//     const totalMarks = 500;

//     let resultsList = document.getElementById("student-results");

//     for (let i = 0; i < studentNames.length; i++) {
//       let percentage = (studentScores[i] / totalMarks) * 100;
//       let listItem = document.createElement("li");
//       listItem.textContent = `Score of ${studentNames[i]} is ${studentScores[i]}. Percentage: ${percentage.toFixed(2)}%`;
//       resultsList.appendChild(listItem);
//     }

// Q9: Initialize an array with color names. Display the array
// elements in your browser.
// a. Ask the user what color he/she wants to add to the
// beginning & add that color to the beginning of the array.
// Display the updated array in your browser.
// b. Ask the user what color he/she wants to add to the end
// & add that color to the end of the array. Display the
// updated array in your browser.
// c. Add two more color to the beginning of the array.
// Display the updated array in your browser.
// d. Delete the first color in the array. Display the updated
// array in your browser.
// e. Delete the last color in the array. Display the updated
// array in your browser.
// f. Ask the user at which index he/she wants to add a color
// & color name. Then add the color to desired
// position/index. . Display the updated array in your
// browser.
// g. Ask the user at which index he/she wants to delete
// color(s) & how many colors he/she wants to delete. Then remove the same number of color(s) from user-defined
// position/index. . Display the updated array in your
// browser.

// ANSWER

// let color = ["Red", "Green", "Blue"];
// document.write("Initial Colors: " + color.join(", ") +  "<br />");

// let colorAddBeg = prompt("Enter a color to add at the beginning:");
// color.unshift(colorAddBeg);
// document.write("After adding color at the beginning: " + color.join(", ") + "<br />");

// let colorAddEnd = prompt("Enter a color to add at the end:");
// color.push(colorAddEnd);
// document.write("After adding color at the end: " + color.join(", ") + "<br />");

// color.unshift("gray", "black")
// document.write("After adding two colors at the beginning: " + color.join(", ") + "<br />")

// color.shift();
// document.write("After deleting the first color: " + color.join(", ") + "<br />");

// color.pop();
// document.write("After deleting the last color:" + color.join(", ") + "<br />")

// let indexAdd = +prompt("Enter the index where you want to add a color:");
// let colorAddIndex = prompt("Enter the color name to add at the specified index:");
// color.splice(indexAdd, 0, colorAddIndex);
// document.write("After adding color at index " + indexAdd + ": " + color.join(", ") + "<br />");

// let indexDelete = +prompt("Enter the index from where you want to delete color: ");
// let colorDelete = +prompt("Enter the number of colors you want to delete: ");
// color.splice(indexDelete, colorDelete);
// document.write("After deleting " + numberOfColorsToDelete + " color(s) from index " + indexToDelete + ": " + colors.join(", ") + "<br>");

// Q10: Write a program to store student scores in an array &
// sort the array in ascending order using Array’s sort
// method.

// ANSWER

// let score = [230, 123, 545,1000, 654, 56, 101]
// document.write("Orginal Score " + score + "<br />");

// score.sort((a, b) => a - b );
// document.write("Sorted Score " + score);

// Q11: Write a program to initialize an array with city names.
// Copy 3 array elements from cities array to selectedCities
// array.

// ANSWER

// let cities = ["Karachi", "Lahore", "Islamabad", "Pindi"];
// document.write(cities + "<br />");
// let selectedCities = cities.slice(1, 3);
// document.write(selectedCities);

// Q12: Write a program to create a single string from the
// below mentioned array:
// var arr = [“This ”, “ is ”, “ my ”, “ cat”];
// (Use array’s join method)

// ANSWER

// let arr = ["This", "is", "my", "cat"];
// document.write("Array " + arr + "<br />");

// document.write("String " + arr.join(" "))

// Q13: Create a new array. Store values one by one in such a way
// that you can access the values in the order in which they
// were stored. (FIFO-First In First Out)

// ANSWER

// let devices = ["Mouse", "Keyboard", "Printer", "Monitor"]
// document.write(devices + "<br />");

// document.write("FIFO" + "<br />");

// for(let i = 0; i < devices.length; i++){
//     document.write("Out: ", devices[i], "<br />");
// }
// document.write("LIFO" + "<br />");
// for(let i = devices.length -1; i >= 0; i--){
//     document.write("Out: ", devices[i], "<br />");
// }

// Q15: Write a program to store phone manufacturers (Apple,
//     Samsung, Motorola, Nokia, Sony & Haier) in an array.
//     Display the following dropdown/select menu in your
//     browser using document.write() method:

// ANSWER

let phoneBrand = ["Apple", "Samsung", "Motorola", "Nokia", "Sony", "Haier"];

document.write('<select>');

for(let i = 0; i < phoneBrand.length; i++){
    document.write(`<option value="${phoneBrand[i]}">${phoneBrand[i]}</option>`);

}

document.write('<select>')