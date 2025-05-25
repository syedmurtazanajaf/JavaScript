// let stdObj = {age: 20};
// stdObj.age = 25;
// console.log(stdObj);

// let stdObj ={
//     name: "Murtaza",
//     age: 25,
//     course: ["Html", "css", "js"],
//     result: {
//         html: 98,
//         css: 94,
//         js: 81
//     },
// };

// console.log(stdObj.result.css);

// let stdObj = {
//     firstName: "Murtaza",
//     lastName: "Najaf",
//     getFullName: function () {
//         let fullName = this.firstName + " " + this.lastName;
//         return fullName;
//     },
// };


// let stdFullName = stdObj.getFullName();
// console.log(stdFullName);

let std = {
    firstName: "Murtaza",
    lastName: "Najaf",
    age: 25,
    email: "syedmurtaza545@gmaul.com",
    getFullName: function () {
        return this.firstName + " " + this.lastName;
    },
    scores: {
        html: 99,
        css: 98,
        js: 76,
        react: 79
    },

   getTotalMarks: function (){
    let totals = 0;
    for(let key in this.scores){
        console.log(key, this.scores[key]);
        totals += this.scores[key];

    }
    console.log(totals);
    return totals;
   }
};

let stdFullName = std.getFullName();
console.log(stdFullName);

let stdTotalMarks = std.getTotalMarks();
console.log("Total Marks", stdTotalMarks);

// Automatic Carousel Script
(function() {
  const carousel = document.querySelector('.carousel');
  if (!carousel) return;
  const images = carousel.querySelectorAll('img');
  let currentIndex = 0;
  const total = images.length;

  function updateCarousel() {
    carousel.style.transform = `translateX(-${currentIndex * 100}%)`;
  }

  function nextSlide() {
    currentIndex = (currentIndex + 1) % total;
    updateCarousel();
  }

  // Set all images to 100% width of container
  carousel.style.width = `${total * 100}%`;
  images.forEach(img => {
    img.style.width = `${100 / total}%`;
    img.style.flex = `0 0 ${100 / total}%`;
  });

  setInterval(nextSlide, 3000);
})();