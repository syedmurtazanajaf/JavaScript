// let std = {
//     name: "Ali",
//     age: 24,
//     course: "Graphic designer",
//     cnic: 4235243426
// };
// // console.log(std.name);
// // console.log(std["age"]);
// // console.log(std.course);

// let check = "age" in std;
// console.log(check);

// delete std.name;
// console.log(std);


let carObj = {
    name: "Audi",
    color: "Black",
    model: "2025",
    cc: "2000",
    runningCondition: true,
    report: null
};

for (let objkey in carObj){
    console.log(objkey, carObj[objkey]);
}