// new promise 

// const myPromise = new Promise((resolve, reject)=>{
//     const isCivic = true;

//     if(isCivic){
//         resolve("Resolved");
//     }else{
//         reject("Rejected");
//     }

// });

// myPromise
// .then((response)=>{
// console.log(response);
// })
// .catch((error)=>{
// console.log(error);
// })

// console.log(myPromise)



// async / await

// const fetchData = async () => {

//     const data = await APICALL();

// }


// const greet = () =>{
//     try {
//         console.log("Hello 1")
//         console.log("Hello 2")
//         alert(userName)
//         console.log("Hello 3")

//     } catch (error) {
//         console.log(error)

//     }
// };
// greet();
// console.log("Hello World")

// const fetchProduct = async () =>{
//    try {
//      console.log("API CALLING");
//     const response = await fetch("https://fakestoreapi.com/products/1").then((res)=> res.json());
//     console.log(response);
//    } catch (error) {
//     console.log(error)

//    }
// }

// fetchProduct();
// console.log("Helloo")


// Class

// class Std {
//     constructor(name, age, gender){
//         this.name = name;
//         this.age = age;
//         this.gender = gender;
//     }
// }

// const std1 = new Std("Murtaza", 25, "Male");
// console.log(std1);


class commonField {
    constructor(name, age, email, gender) {
        this.name = name
        this.age = age
        this.email = email
        this.gender = gender
    }
}

class teacherObj extends commonField{
    constructor(name, age, email, gender, teacherId){
        super(name, age, email, gender)
        this.teacherId = teacherId
    }
}

class stdObj extends commonField{
    constructor(name, age, email, gender, stdId){
        super(name, age, email, gender)
        this.stdId = stdId
    }
}

const std1 = new stdObj("Murtaza", 25, "syedmurtaza545@gmail.com", "Male", 104);
console.log(std1)