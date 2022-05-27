const choice1 = document.getElementById('choice-1')
const choice2 = document.getElementById('choice-2')
const choice3 = document.getElementById('choice-3')
const choice4 = document.getElementById('choice-4')
const question = document.getElementById('question')
const nextBtn = document.getElementById('next')
let i = 0;


const questions = [{
    question: "Inside which HTML element do we put the Javascript?",
    theChoices: {
        choice1: "<script>",
        choice2: "<javascript>",
        choice3: "<js>",
        choice4: "<scripting>"
    },
    rightChoice: 'choice1'
},
{
    question: "Which is not a JavaScript Data Type?",
    theChoices: {
        choice1: "Container",
        choice2: "String",
        choice3: "Boolean",
        choice4: "Object",
    },
    rightChoice: 'choice1'
},
{
    question: "Is it possible to break JavaScript Code into several lines?",
    theChoices: {
        choice1: "true",
        choice2: "false",
        choice3: "sometimes",
        choice4: "only using Jquery"
    },
    rightChoice: 'choice1'
},

{
    question: "Which of the following is the correct syntax to redirect a url using JavaScript?",
    theChoices: {
        choice1: "document.location='http://www.newlocation.com';",
        choice2: "browser.location='http://www.newlocation.com';",
        choice3: "navigator.location='http://www.newlocation.com';",
        choice4: "window.location='http://www.newlocation.com';",
    },
    rightChoice: 'choice4'
},
{
    question: "Which built-in method returns the index within the calling String object of the first occurrence of the specified value?",
    theChoices: {
        choice1: "getIndex()",
        choice2: "location()",
        choice3: "indexOf()",
        choice4: "None of the above.",
    },
    rightChoice: 'choice3'
},
{
    question: "How do you write 'Hello World' in an alert box?",
    theChoices: {
        choice1: "msgBox('Hello World');",
        choice2: "alertBox('Hello World');",
        choice3: "msg('Hello World');",
        choice4: "alert('Hello World');",
    },
    rightChoice: 'choice4'
},
{
    question: "Which of the following function of String object returns the character at the specified index?",
    theChoices: {
        choice1: "charAt()",
        choice2: "charCodeAt()",
        choice3: "concact()",
        choice4: "indexOf()",
    },
    rightChoice: 'choice1'
}
];

const renderQuestions = () => {
    if (i < questions.length){
        i++
    } else {
        renderHighScores()
    }
    const currentQuestion = questions[i].question
    const choiceA = questions[i].theChoices.choice1
    const choiceB = questions[i].theChoices.choice2
    const choiceC = questions[i].theChoices.choice3
    const choiceD = questions[i].theChoices.choice4
    
    question.textContent = currentQuestion
    choice1.textContent = choiceA
    choice2.textContent = choiceB
    choice3.textContent = choiceC
    choice4.textContent = choiceD

}
nextBtn.addEventListener("click", renderQuestions)



renderQuestions()

