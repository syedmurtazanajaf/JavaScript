// let parent = document.getElementById("parent");

// let stdObj = {
//     id: 1,
//     name: "Syed Murtaza",
//     age: 25,
//     email: "Murtaza545@gmail.com",
//     course: "web and app",
//     isActive: true,
// }

// for ( let key in stdObj){
//     console.log(key, stdObj[key])
//     parent.innerHTML += `<td>${stdObj[key]}</td>`
// }

let std1 = {
    id: 1,
    name: "Syed Murtaza",
    age: 25,
    email: "Murtaza545@gmail.com",
    course: "web and app",
    isActive: true,
};

let std2 = {
    id: 2,
    name: "Ahad Farooq",
    age: 24,
    email: "ahad33@gmail.com",
    course: "web and app",
    isActive: true,
};

let std3 = {
    id: 3,
    name: "Ali Raza",
    age: 24,
    email: "ahad33@gmail.com",
    course: "web and app",
    isActive: true,
};

let parent = document.getElementById("parent");

let std = [std1, std2, std3];
console.log(std);

for (let i = 0; i < std.length; i++) {
    console.log(std[i]);
    parent.innerHTML += `<tr>
        <td>${std[i].id}</td>
        <td>${std[i].name}</td>
        <td>${std[i].age}</td>
        <td>${std[i].email}</td>
        <td>${std[i].course}</td>
        <td>${std[i].isActive}</td>
    
    </tr>` 
}