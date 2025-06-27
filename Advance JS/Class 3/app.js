// normal Function

// function sum(sum1, sum2) {
//     return sum1 + sum2;
// }

// let total = sum(10, 20);

// console.log(total)



// Arrow Function

// let greet = (userName) => {
//     console.log("Hello " + userName);
// }

// greet("Murtaza");


// const sum = (num1, num2) => num1 + num2;

// let result = sum(110, 100);

// console.log(result);

// const std = {
//     firstName: "Murtaza",
//     lastName: "Najaf",
//     getFullName: function () {
//         console.log(this)
//     }
// }

// std.getFullName()


// const std2 = {
//     firstName: "Murtaza",
//     lastName: "Najaf",
//     getFullName: () => {
//         console.log(this)
//         return std2.firstName + std2.lastName;
//     }
// }

// std2.getFullName()



// Spread Opt three dot

// let obj1 = {
//     name: "Murtaza",
//     nic: 4346458388
// }

// let obj2 = {
//     age: 25
// }

// let obj3 = {...obj1, ...obj2};
// console.log(obj3)

// let obj1 = {
//     a: 10
// }
// console.log(obj1)

// let obj2 = {...obj1};
// obj2.a = 30
// console.log(obj2)


// const arr1 = [1, 2, 3, 4, 5];
// const arr2 = [...arr1 ,6, 7, 8, 9, 10];

// console.log(arr2);


// const obj1 = {
//     a: 10,
//     nestedObj: {
//         b: 100,
//     },
// };

// const obj2 = JSON.parse(JSON.stringify(obj1));

// obj1.a = 100;

// obj1.nestedObj.b = 500;


// // console.log(obj1);
// console.log(obj2);



// Rest OP
// const foo = (num1, num2, ...Rest) => {
//     console.log(num1, num2, Rest)

// }

// foo(1, 2, 3, 4, 5, 6, 7, 8, 9, 10)



// fetch


fetch("https://fakestoreapi.com/products/1")

.then((res)=>{
   return res.json();
})

.then((result)=>{
    console.log(result);
})
.catch((error)=>{
    console.log(error);
})