const choice1 = document.getElementById('choice-1')
const choice2 = document.getElementById('choice-2')
const choice3 = document.getElementById('choice-3')
const choice4 = document.getElementById('choice-4')
const nextBtn = document.getElementById('next')
const highScoresList = document.getElementById('high-scores-list')
const questionBox = document.querySelector('#question')
const quizContent = document.querySelector('#quiz')
const timer = document.querySelector('#time')


let i = 0;
let score = 0
let time = 60


let questions = [
    {
        question: "Inside which HTML element do we put the Javascript?",
        theChoices: {
            choice1: "<script>",
            choice2: "<javascript>",
            choice3: "<js>",
            choice4: "<scripting>"
        },
        rightChoice: '<script>'
    },
    {
        question: "Inside which HTML element do we put the Javascript?",
        theChoices: {
            choice1: "<script>",
            choice2: "<javascript>",
            choice3: "<js>",
            choice4: "<scripting>"
        },
        rightChoice: '<script>'
    },
    {
        question: "Which is not a JavaScript Data Type?",
        theChoices: {
            choice1: "Container",
            choice2: "String",
            choice3: "Boolean",
            choice4: "Object",
        },
        rightChoice: 'Container'
    },
    {
        question: "Is it possible to break JavaScript Code into several lines?",
        theChoices: {
            choice1: "true",
            choice2: "false",
            choice3: "sometimes",
            choice4: "only using Jquery"
        },
        rightChoice: 'true'
    },

    {
        question: "Which of the following is the correct syntax to redirect a url using JavaScript?",
        theChoices: {
            choice1: "document.location='http://www.newlocation.com';",
            choice2: "browser.location='http://www.newlocation.com';",
            choice3: "navigator.location='http://www.newlocation.com';",
            choice4: "window.location='http://www.newlocation.com';",
        },
        rightChoice: "window.location='http://www.newlocation.com';"
    },
    {
        question: "Which built-in method returns the index within the calling String object of the first occurrence of the specified value?",
        theChoices: {
            choice1: "getIndex()",
            choice2: "location()",
            choice3: "indexOf()",
            choice4: "None of the above.",
        },
        rightChoice: 'indexOf()'
    },
    {
        question: "How do you write 'Hello World' in an alert box?",
        theChoices: {
            choice1: "msgBox('Hello World');",
            choice2: "alertBox('Hello World');",
            choice3: "msg('Hello World');",
            choice4: "alert('Hello World');",
        },
        rightChoice: "alert('Hello World');"
    },
    {
        question: "Which of the following function of String object returns the character at the specified index?",
        theChoices: {
            choice1: "charAt()",
            choice2: "charCodeAt()",
            choice3: "concact()",
            choice4: "indexOf()",
        },
        rightChoice: 'charAt()'
    }];

//** FUNCTION - Timer: goes down every second */

const renderTimer = () => {
    timer.innerText = time--

    (time <= 0) ? location.href = 'highscores.html' : time
}


//** FUNCTION - renders questions in their correlated elements */
const renderQuestions = () => {
    if (i < questions.length - 1) {
        i++
    } else {
        renderHighScores()
      }
    
    //Grabbing each question and choice from object
    console.log(i)
    let currentQuestion = questions[i].question
    let choiceA = questions[i].theChoices.choice1
    let choiceB = questions[i].theChoices.choice2
    let choiceC = questions[i].theChoices.choice3
    let choiceD = questions[i].theChoices.choice4
    let rightAnswer = questions[i].rightChoice

    //Setting text content of questions and list items to index of questions array[]
    questionBox.innerText = currentQuestion
    choice1.textContent = choiceA
    choice2.textContent = choiceB
    choice3.textContent = choiceC
    choice4.textContent = choiceD


    correctChoice(choiceA, choiceB, choiceC, choiceD, rightAnswer)

    // Removing background colors for right and wrong answers from correctChoice()

    choice1.classList.remove('greenBackground')
    choice2.classList.remove('greenBackground')
    choice3.classList.remove('greenBackground')
    choice4.classList.remove('greenBackground')

    choice1.classList.remove('redBackground')
    choice2.classList.remove('redBackground')
    choice3.classList.remove('redBackground')
    choice4.classList.remove('redBackground')
}


//** FUNCTION - checks to see if correct choice is being chosen */
const correctChoice = (choiceA, choiceB, choiceC, choiceD, rightAnswer) => {

    choice1.onclick = () => {
        if (choiceA === rightAnswer) {
            choice1.classList.add('greenBackground')
            score += 10
            localStorage.setItem("score", score)
            setTimeout(renderQuestions, 1000)
        } else {
            choice1.classList.add('redBackground')
            setTimeout(renderQuestions, 1000)
        }

    }
    choice2.onclick = () => {
        if (choiceB === rightAnswer) {
            choice2.classList.add('greenBackground')
            score += 10
            localStorage.setItem("score", score)
            setTimeout(renderQuestions, 1000)

        } else {
            choice2.classList.add('redBackground')
            setTimeout(renderQuestions, 1000)
        }

    }
    choice3.onclick = () => {
        if (choiceC === rightAnswer) {
            choice3.classList.add('greenBackground')
            score += 10
            localStorage.setItem("score", score)
            setTimeout(renderQuestions, 1000)

        } else {
            choice3.classList.add('redBackground')
            setTimeout(renderQuestions, 1000)
        }

    }
    choice4.onclick = () => {
        if (choiceD === rightAnswer) {
            choice4.classList.add('greenBackground')
            score += 10
            localStorage.setItem("score", score)
            setTimeout(renderQuestions, 1000)

        } else {
            choice4.classList.add('redBackground')
            setTimeout(renderQuestions, 1000)
        }
    }
}


//** FUNCTION - redirects to highscores page */
const renderHighScores = () => {
    location.href = 'highscores.html'
}


setInterval(renderTimer, 1000)
renderQuestions()
nextBtn.addEventListener("click", renderQuestions)

