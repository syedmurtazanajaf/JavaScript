// Q1: Write a program that take two numbers & add them in a new variable. Show the result in your browser.

// ANSWER

// let num1 = 5;
// let num2 = 9;
// let total = num1 + num2;
// document.write("Sum of " + num1 + " and " + num2 + " is " + total);

// Q2: 2. Repeat task1 for subtraction, multiplication, division & modulus.

// ANSWER

// let num1 = 15;
// let num2 = 9;
// let total = num1 - num2;
// document.write("Sub of " + num1 + " and " + num2 + " is " + total);

// let num1 = 5;
// let num2 = 9;
// let total = num1 * num2;
// document.write("Multiply of " + num1 + " and " + num2 + " is " + total);

// let num1 = 10;
// let num2 = 2;
// let total = num1 / num2;
// document.write("Divide of " + num1 + " and " + num2 + " is " + total);

// Q3:Do the following using JS Mathematic Expressions
// a. Declare a variable.
// b. Show the value of variable in your browser like “Value
// after variable declaration is: ??”.
// c. Initialize the variable with some number.
// d. Show the value of variable in your browser like “Initial
// value: 5”.
// e. Increment the variable.
// f. Show the value of variable in your browser like “Value
// after increment is: 6”.
// g. Add 7 to the variable.
// h. Show the value of variable in your browser like “Value
// after addition is: 13”.
// i. Decrement the variable.
// j. Show the value of variable in your browser like “Value
// after decrement is: 12”.
// k. Show the remainder after dividing the variable’s value
// by 3.
// l. Output : “The remainder is : 0”.

// ANSWER

// let num = undefined;
// document.write("Value after variable declaration is: " + num + "<br/>");

// num = 5;
// document.write("Initial value: " + num + "<br/>");

// num += 1;
// document.write("Value after increment is: " + num + "<br/>");

// num +=7;
// document.write("Value after addition is: " + num + "<br/>");

// num -= 1;
// document.write("Value after decrement is:" + num + "<br/>");

// num %= 3;
// document.write("The remainder is " + num);

// Q4: Cost of one movie ticket is 600 PKR. Write a script to
// store
// ticket price in a variable & calculate the cost of buying 5
// tickets
// to a movie. Example output

// ANSWER

// let ticket_price = 600;
// let ticket_quantity = 5;
// let total_price = ticket_price * ticket_quantity;

// document.write("Total cost to buy 5 tickets to a movie is " + total_price +"PKR");

// Q5: Write a script to display multiplication table of any number in your browser.

// ANSWER

// let tableValue = +prompt("Enter Table Value! ");
// let startingPoint = +prompt("Enter Table Starting Point! ");
// let endingPoint = +prompt("Enter Table Ending Point! ");
//  for(let i = startingPoint; i <= endingPoint; i++){
//     document.write(tableValue + "x" + i + "=" + tableValue * i + "<br /> ");
//  }

// Q6: The Temperature Converter: It’s hot out! Let’s make a
// converter based on the steps here.
// a. Store a Celsius temperature into a variable.
// b. Convert it to Fahrenheit & output “NNoC is NNoF”.
// c. Now store a Fahrenheit temperature into a variable.
// d. Convert it to Celsius & output “NNoF is NNoC”.

// ANSWER

// let Celsius = +prompt("Enter Celsius Temperature");
// let Fahrenheit = (Celsius * 9/5) +32;
// document.write(`${Celsius}°C is ${Fahrenheit}°F`);

// Fahrenheit = +prompt("Enter Fahrenheit Temperature");
// Celsius = (Fahrenheit - 32) * 5/9;
// document.write(`${Fahrenheit}°F is ${Celsius.toFixed(2)}°C`);

// Q7: Write a program to implement checkout process of a shopping cart system for an e-commerce website. Store the following in variables
// a. Price of item 1
// b. Price of item 2
// c. Ordered quantity of item 1
// d. Ordered Quantity of item 2
// e. Shipping charges
// Compute the total cost & show the receipt in your browser.

// ANSWER

// let itemPrice_1 = 650;
// let itemPrice_2 = 100;
// let itemQuantity_1 = 3;
// let itemQuantity_2 = 7;
// let shippingCharges = 100;

// document.write("Price of item one is: " + itemPrice_1 + "<br>");
// document.write("Quantity of item one is: " + itemQuantity_1 + "<br>");
// let totalItemPrice_1 = itemPrice_1 * itemQuantity_1;
// document.write("Total Price of Item One: " + totalItemPrice_1 + "<br>");

// document.write("Price of item Two is: " + itemPrice_2 + "<br>");
// document.write("Quantity of item Two is: " + itemQuantity_2 + "<br>");
// let totalItemPrice_2 = itemPrice_2 * itemQuantity_2;
// document.write("Total Price of item Two is: " + totalItemPrice_2 + "<br>")

// document.write("Shipping charges is: " + shippingCharges + "<br>");

// let totalPrice = totalItemPrice_1 + totalItemPrice_2 + shippingCharges;
// document.write("Total cost of your order is: " + totalPrice + "<br>");

// Q8: Store total marks & marks obtained by a student in 2 variables. Compute the percentage & show the result in your browser

// ANSWER

// let totalMarks = 980;
// document.write("Total Marks: " + totalMarks + "<br />")
// let obtainedMarks = 804;
// document.write("Obtained Marks: " + obtainedMarks + "<br />")
// let percentage = (obtainedMarks/totalMarks) * 100;
// document.write("Percentage: " + percentage.toFixed(2)  + "%"); 

// Q9: Assume we have 10 US dollars & 25 Saudi Riyals. Write a
// script to convert the total currency to Pakistani Rupees.
// Perform all calculations in a single expression.
// (Exchange rates : 1 US Dollar = 104.80 Pakistani Rupee
// and 1 Saudi Riyal = 28 Pakistani Rupee)

// ANSWER

// let dollar = 10 * 104.80;
// let riyal = 25 * 28;
// let pkr = dollar + riyal;
// document.write("Total Currency in PKR: " + pkr)

// Q10:Write a program to initialize a variable with some
// number and do arithmetic in following sequence:
// a. Add 5
// b. Multiply by 10
// c. Divide the result by 2
// Perform all calculations in a single expression

// ANSWER

// let num = 10;
// let result = ((num + 5) * 10) / 2;
// document.write(result);

// Q11: The Age Calculator: Forgot how old someone is?
// Calculate it!
// a. Store the current year in a variable.
// b. Store their birth year in a variable.
// c. Calculate their 2 possible ages based on the stored
// values.

// ANSWER

// let currentYear = 2025;
// let birthYear = 1999;
// let age = currentYear - birthYear;
// document.write("Age: " + age)

// Q12: The Geometrizer: Calculate properties of a circle.
// a. Store a radius into a variable.
// b. Calculate the circumference based on the radius, and
// output “The circumference is NN”.
// (Hint : Circumference of a circle = 2 π r , π = 3.142)
// Calculate the area based on the radius, and output “The
// area is NN”. (Hint : Area of a circle = π r2, π = 3.142)

// ANSWER


// var radius = 20; 

// var pi = 3.142;

// var circumference = 2 * pi * radius;

// var area = pi * radius * radius;

// document.write("Radius of a circle: " + radius + "<br />");
// document.write("The circumference is: " + circumference.toFixed(2) + "<br />");
// document.write("The area is: " + area.toFixed(2));

// Q13: . The Lifetime Supply Calculator: Ever wonder how
// much a “lifetime supply” of your favorite snack is?
// Wonder no more.
// a. Store your favorite snack into a variable
// b. Store your current age into a variable.
// c. Store a maximum age into a variable.
// d. Store an estimated amount per day (as a number).
// e. Calculate how many would you eat total for the rest of
// your life

// ANSWER

// let fav_snack = "Choclate Chip";
// let currencyAge= 25;
// let maxAge = 70;
// let snack_per_day = 3;
// let remainYear = maxAge - currencyAge;
// let snackNeeded = remainYear * 365 * snack_per_day

// document.write("Favourite Snack: " + fav_snack + "<br />");
// document.write("Current Age: " + currencyAge + "<br />");
// document.write("Max Age: " + maxAge + "<br />");
// document.write("Snack Per Day: " + snack_per_day + "<br />");
// document.write("Total Snack Need for Life: " + snackNeeded);