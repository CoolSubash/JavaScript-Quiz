const arrayOfQuestions = [
  {
    question: 'What is the Full Form of HTML ?',
    one: 'Hyper Text Markes Language',
    two: 'Hyper Text Makeup Language',
    three: 'Hyper Text Makeup Line',
    four: 'Hyper Text Markup Language',
    correctAnswer: 'four',
  },
  {
    question: 'What is the Full Form of CSS ?',
    one: 'Cascading Style Shines',
    two: 'Cascading Style Sheets',
    three: 'Cascading Style Shave',
    four: 'Cascading Style Shit',
    correctAnswer: 'two',
  },
  {
    question: 'Who is the founder of Java ?',
    one: 'Linux Torvalds',
    two: 'Bill Gates',
    three: 'James Gosling',
    four: 'Jeff Bezos',
    correctAnswer: 'three',
  },
  {
    question: 'When was Google founded ?',
    one: 1998,
    two: 2001,
    three: 2002,
    four: 2005,
    correctAnswer: 'one',
  },
  {
    question: 'When was faceook founded ?',
    one: 1998,
    two: 2004,
    three: 2002,
    four: 2005,
    correctAnswer: 'two',
  },
]
let quizContainer = document.querySelector('#quiz-container')
let questionheading = document.querySelector('.question-heading')
let firstOption = document.querySelector('#option-one')
let secondOption = document.querySelector('#option-two')
let thirdOption = document.querySelector('#option-three')
let fourthOption = document.querySelector('#option-four')
let nextbtn = document.querySelector('#next-btn')
let radiobtn1 = document.querySelectorAll('.one')
let resultScore = document.querySelector('#result-score')
let i = 0
let answerCheck = document.querySelectorAll('.answerCheck')
let playagain = document.querySelector('#play-again')
let displayScore = document.querySelector('#display-score')
let start = document.querySelector('#start')
let timer = document.querySelector('#time')
let min = 0
let sec = 0
let questionChange = document.querySelector('small')

start.addEventListener('click', () => {
  quizContainer.style.display = 'block'
  start.display = 'none'
  timerCall()
})

function next() {
  questionheading.innerHTML = arrayOfQuestions[i].question
  firstOption.innerHTML = arrayOfQuestions[i].one
  secondOption.innerHTML = arrayOfQuestions[i].two
  thirdOption.innerHTML = arrayOfQuestions[i].three
  fourthOption.innerHTML = arrayOfQuestions[i].four
}
let changecount = 1
let score = 0
for (let j = 0; j < answerCheck.length; j++) {
  answerCheck[j].addEventListener('click', (e) => {
    radiobtn1.forEach((e) => {
      e.disabled = true
    })
    e.target.disabled = false
    if (e.target.value === arrayOfQuestions[i].correctAnswer) {
      score++
      console.log(score)
    }
  })
}
nextbtn.addEventListener('click', function () {
  radiobtn1.forEach((e) => {
    e.disabled = false
    e.checked = false
  })

  if (i == arrayOfQuestions.length - 1) {
    quizContainer.style.display = 'none'
    displayScore.style.display = 'block'
    resultScore.innerHTML = `Your Score is ${score}`
  } else {
    i++
    changecount++
    next()
    questionChange.innerHTML = `${changecount}/5`
  }
})
playagain.addEventListener('click', () => {
  location.reload()
})

timer.innerHTML = sec

function timerCall() {
  const myInterval = setInterval(() => {
    sec++
    if (sec > 60 || min > 0) {
      if (sec > 60) {
        min++
        if (min == 1) {
          clearInterval(myInterval)
          quizContainer.style.display = 'none'
          displayScore.style.display = 'block'
          resultScore.innerHTML = `Your Score is ${score}`
        }
        sec = 0
        timer.innerHTML = `${min}:${sec}`
      } else {
        timer.innerHTML = `${min}:${sec}`
      }
    } else {
      timer.innerHTML = `${sec} sec`
    }
  }, 1000)
}
