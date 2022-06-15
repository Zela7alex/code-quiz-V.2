const nameInput = document.getElementById('high-scores-input')
const highScoresList = document.getElementById('high-scores-list');
const endScoreEl = document.getElementById('end-score')
let endScore = localStorage.getItem("score")

// Grabbing the current score list from local storage (If no score list yet, it does not exist, it will be null)
let scoreList = localStorage.getItem("scoreList")
let parsedScoreList = []

parsedScoreList = JSON.parse(scoreList)

endScoreEl.textContent = `
${endScore}
`


// //** FUNCTION - saves scores to local storage */
const saveScores = () => {

    if (!scoreList) { // If there is no scoreList then parsedScoreList is an empty array 
        parsedScoreList = []
    } else {  // If there is a score list already, scoreList will be turned back into an object from a string and function continues
        parsedScoreList = JSON.parse(scoreList)
    }
    // Then the newly added name and score object will be put back into parsedScoreList
    parsedScoreList.push({
        name: nameInput.value,
        score: localStorage.getItem("score")
    })

    // Now parsedScoreList will be turned into a string again
    localStorage.setItem("scoreList", JSON.stringify(parsedScoreList))


}

//** FUNCTION - when enter key is pressed, saveScores() will execute */
nameInput.addEventListener('keypress', function (event) {
    if (event.key === "Enter") {
        saveScores()
        renderHighScores()
        nameInput.value = ''
    }
})

function createLi(name, score) {
    let scoreEl = document.createElement('div')


    scoreEl.className = 'high-scores-list'

    scoreEl.innerHTML = `
      <div class='name-name'>${name}</div>
      <div class='score-score'>${score}</div> 
   `
    
     

    return scoreEl;
}

//** FUNCTION - This function loops over createLi() through parsedscoreList JSON to retrieve each name and score   */
const renderHighScores = () => {
    // the list will reset to avoid duplicate names and scores when page loads
    highScoresList.innerHTML = "";
    for (let i = 0; i < parsedScoreList.length; i++) {
        //the function 'createLi() will return an <li> element containing the data
        let newItem = createLi(parsedScoreList[i].name, parsedScoreList[i].score);

        
        //newItem will now be appended to highScoresList
        highScoresList.appendChild(newItem);
    }


}


renderHighScores()