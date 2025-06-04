const quizQuestion = [
    {
        id: 1,
        question: "HTML stands for?",
        options: {
            a: "Hyper Text Markup Language",
            b: "Hyper Text Model Language",
            c: "Hyper Text Mark Language",
            d: "Hyper Text Scripting Language"
        },
        answer: "Hyper Text Markup Language"
    },
    {
        id: 2,
        question: "Which language is used for styling web pages?",
        options: {
            a: "HTML",
            b: "CSS",
            c: "JavaScript",
            d: "PHP"
        },
        answer: "CSS"
    },
    {
        id: 3,
        question: "Which of these is a JavaScript framework?",
        options: {
            a: "Django",
            b: "React",
            c: "Laravel",
            d: "Bootstrap"
        },
        answer: "React"
    },
    {
        id: 4,
        question: "Which tag is used to define a hyperlink in HTML?",
        options: {
            a: "link",
            b: "a",
            c: "href",
            d: "url"
        },
        answer: "a"
    },
    {
        id: 5,
        question: "Which company developed JavaScript?",
        options: {
            a: "Microsoft",
            b: "Netscape",
            c: "Oracle",
            d: "Sun Microsystems"
        },
        answer: "Netscape"
    },
]


let indexNumber = 0;
const count = document.getElementById("count");
count.innerHTML = `${indexNumber + 1} / ${quizQuestion.length}`

function uiRender() {
    let question = document.getElementById("question");
    let options = document.getElementById("options")
    question.innerHTML = quizQuestion[indexNumber].question


    const optionList = quizQuestion[indexNumber].options;
    console.log(optionList);


    options.innerHTML = "";
    for (let key in optionList) {
        console.log(optionList[key]);

        options.innerHTML += `<li onclick ="checkAns(this)">${optionList[key]}</li>`;
    }

}


function nextQues() {
    if(indexNumber < quizQuestion.length){
        indexNumber++;
        uiRender();
    }
    else{
        console.log("Quiz Submit")
    }
    console.log(indexNumber);
    count.innerHTML = `${indexNumber + 1} / ${quizQuestion.length}`

}



function checkAns(ele) {
    console.log(ele.innerHTML);
    let allLi = document.getElementById("options").children

    let userSelection = ele.innerHTML;
    const correctAns = quizQuestion[indexNumber].answer;

    if (userSelection === correctAns) {
        console.log("correct");
        ele.style.background = "green";
    }
    else {
        console.log("wrong");
        ele.style.background = "red";

        for (i = 0; i < allLi.length; i++) {
            // console.log(allLi[i].innerHTML);
            if(allLi[i].innerHTML === correctAns){
                allLi[i].style.background = "green";
                break;
            }
        }

    }


    console.log(allLi);
    for (let i = 0; i < allLi.length; i++) {
        allLi[i].style.pointerEvents = "none";
    }

}


console.log(quizQuestion);