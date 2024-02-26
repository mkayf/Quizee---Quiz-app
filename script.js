// randomely picking questions:

// 1.   Which animal is known as the "Ship of the Desert"?
// 2.   How many days are there in a week?
// 3.   How many hours are there in a day?
// 4.   How many letters are there in the English alphabet?
// 5.   Rainbow consist of how many colours?

const quizQuestions = [
  {
    question: "01. Which animal is known as the 'Ship of the Desert'?",
    a: "cow",
    b: "camel",
    c: "goat",
    ans: "camel"
  },
  {
    question: "02. How many days are there in a week?",
    a: 7,
    b: 9,
    c: 6,
    ans: 7
  },
  {
    question: "03. How many hours are there in a day?",
    a: 26,
    b: 27,
    c: 24,
    ans: 24
  },
  {
    question: "04. How many letters are there in the English alphabet?",
    a: 34,
    b: 26,
    c: 20,
    ans: 26
  },
  {
    question: "05. Rainbow consist of how many colours?",
    a: 8,
    b: 9,
    c: 7,
    ans: 7
  },
  {
    question: "06. How many consonants are there in the English alphabet?",
    a: 21,
    b: 34,
    c: 11,
    ans: 21
  },
  {
    question: "07. Name the biggest continent in the world?",
    a: 'Africa',
    b: 'Asia',
    c: 'Australia',
    ans: 'Asia'
  },
  {
    question: "08. Name the largest mammal?",
    a: 'Deer',
    b: 'Blue whale',
    c: 'Elephant',
    ans: 'Blue whale'
  },
  {
    question: "09. How many sides are there in a triangle?",
    a: 'Five sides',
    b: 'Six sides',
    c: 'Three sides',
    ans: 'Three sides'
  },
  {
    question: "10. Name the largest planet of our solar system?",
    a: 'Earth',
    b: 'Jupiter',
    c: 'Saturn',
    ans: 'Jupiter'
  }
];

// getting elements
let questionPara = document.querySelector(".question-para");
let optionA = document.getElementById("a");
let optionB = document.getElementById("b");
let optionC = document.getElementById("c");
let optionBtns = document.querySelectorAll(".option-btn");
let nextBtn = document.querySelector(".next");
nextBtn.style.display = "none";
let result = document.querySelector(".result-div");

let questionNum = document.querySelector(".question-num");

let score = 0;
let questionCount = 0;
let questionNumCount = 1;
let string = questionNum.innerHTML;
questionNum.innerHTML = `Q${questionNumCount} ${string}`;
// displaying question in paragraph element

const showQuestion = () => {
  questionPara.innerHTML = quizQuestions[questionCount].question;
  optionA.innerHTML = quizQuestions[questionCount].a;
  optionB.innerHTML = quizQuestions[questionCount].b;
  optionC.innerHTML = quizQuestions[questionCount].c;
};
showQuestion();

// matching answers

const matchAnswer = () => {
  Array.from(optionBtns).forEach((element) => {
    element.addEventListener("click", (button) => {
      if (button.target.innerHTML == quizQuestions[questionCount].ans) {
        button.target.style.background = 'green';
        button.target.style.color = 'white';
        score = score + 10;
        console.log(score);
      } else {
        button.target.style.background = 'red';
        button.target.style.color = 'white';
        Array.from(optionBtns).forEach((option) => {
          if (option.innerHTML == quizQuestions[questionCount].ans) {
            option.style.background = 'green';
            option.style.color = 'white';
          }
        });
      }
      nextBtn.style.display = "block";

      optionBtns.forEach((option) => {
        option.disabled = true;
      });
    });
  });
};

matchAnswer();

nextBtn.addEventListener("click", () => {
  nextBtn.style.display = "none";
  if (questionCount < quizQuestions.length - 1) {
    questionCount++;
    questionNumCount++;
    questionNum.innerHTML = `Q${questionNumCount} ${string}`;
    }

    if (questionPara.innerHTML == quizQuestions[9].question){
      optionBtns.forEach((option)=>{
        option.classList.add('disabled');
      })
      result.innerHTML = `Congratulations! You scored ${score} out of ${quizQuestions.length * 10}`
      nextBtn.style.display = 'block';
      nextBtn.innerHTML = "Play again";
      nextBtn.addEventListener("click", () => {
        location.reload();
      });
    }

  optionBtns.forEach((option) => {
    option.disabled = false;
    option.style.background = "";
    option.style.color = "";
  });

  showQuestion();
});
