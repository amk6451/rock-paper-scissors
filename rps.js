function getComputerChoice() {
    //returns a random pick between rock, paper, or scissors

    const computer = ["rock", "paper", "scissors"];
    //random rolls (0 == Rock ,1 == Paper ,2 == Scissors)

    // Math.floor(Math.random() * (max_number-min_number +1) + min_number);
    return computer[(Math.floor(Math.random() * 3))];
}


function playRound(playerSelection, computerSelection, roundCount) 
{ 
    // returns an array with [playerScore,computerScore]

    //playerSelection ->  case-insensitive 
    playerSelection = playerSelection.toLowerCase();

    const currScore = document.querySelector('#scoreCard');
    let displRound = document.createElement('div');
    displRound.classList.add('Round');

    // 3 outcomes:

    //if tie:
    if (playerSelection == computerSelection){
        displRound.textContent = `Round ${roundCount}: You tied, ` + `${playerSelection} ties ${computerSelection}!`;
        displRound.setAttribute('style','color: blue ;font-family: "Courier New", Courier, monospace; font-weight: bold');
        currScore.appendChild(displRound);

        //no points added to either player
        return [0,0]
    }
    //if win:
    else if ((playerSelection  == "rock" && computerSelection == "scissors") ||
            (playerSelection  == "paper" && computerSelection == "rock") ||
            (playerSelection  == "scissors" && computerSelection == "paper") ) {
        
            displRound.textContent = `Round ${roundCount}: You win! ${playerSelection} beats ${computerSelection}`;
            displRound.setAttribute('style','color: #3fe242 ;font-family: "Courier New", Courier, monospace; font-weight: bold');
            currScore.appendChild(displRound);

        return [1,0]
    }
   //if lose:
    else {

        displRound.textContent = `Round ${roundCount}: You lose! ${computerSelection} beats ${playerSelection}`;
        displRound.setAttribute('style','color: #d43622;font-family: "Courier New", Courier, monospace; font-weight: bold');
        currScore.appendChild(displRound);

        return [0,1]
    }
  }

  function displayWinner(playerScore,computerScore) {
    let totals = document.querySelector('#scoreTotals');
    let freeze = document.querySelectorAll('.option');

    if (totals.hasChildNodes()) {
        totals.removeChild(totals.lastChild);
    }

    let bothScores = document.createElement('div');
    bothScores.classList.add('versus');
    bothScores.textContent = `Player ${playerScore}  - Computer ${computerScore} `;
    totals.appendChild(bothScores);


    if(playerScore == 5) {
        const currWinner = document.querySelector('#winCard');
        let roundWinner = document.createElement('div');
        roundWinner.classList.add('bigWinner');
        roundWinner.textContent = `Congratulations! You Beat the Computer! Please Play Again!`;
        roundWinner.setAttribute('style','border: 7px solid #3fe242;font-family: "Courier New", Courier, monospace; font-weight: bold');
        currWinner.appendChild(roundWinner);

        freeze.forEach( (buttonOption) => {
            buttonOption.disabled = true;
        })
        
    }

    if ((computerScore) == 5) {
        const currWinner = document.querySelector('#winCard');
        let roundWinner = document.createElement('div');
        roundWinner.classList.add('bigWinner');
        roundWinner.textContent = `Sorry! You Lost and the Computer Won! Please Play Again!`;
        roundWinner.setAttribute('style','border: 7px solid #d43622 ;font-family: "Courier New", Courier, monospace; font-weight: bold');
        currWinner.appendChild(roundWinner);

        freeze.forEach( (buttonOption) => {
            buttonOption.disabled = true;
        })
    }
    
    return
  }

  function clearDom() {

    roundCount = 0;
    playerScore = 0;
    computerScore = 0;

    let scoreCardReset = document.querySelector('#scoreCard')
    while (scoreCardReset.firstChild) {
        scoreCardReset.removeChild(scoreCardReset.firstChild);
      }
    
    let winCardReset = document.querySelector('#winCard');
    while (winCardReset.firstChild) {
        winCardReset.removeChild(winCardReset.firstChild);
      }

      ////
    let scoreTotalsReset = document.querySelector('#scoreTotals');
    while (scoreTotalsReset.firstChild) {
        scoreTotalsReset.removeChild(scoreTotalsReset.firstChild);     
    }

      //reset values back to zero
    let unfreeze = document.querySelectorAll('.option');

    unfreeze.forEach( (buttonOption) => {
        buttonOption.disabled = false;
    })
    }


function game(){

 roundCount = 0;
 playerScore = 0;
 computerScore = 0;

const elementReset = document.getElementById("reset");


const buttons = document.querySelectorAll('.option');
elementReset.addEventListener("click", clearDom);

buttons.forEach( (option) => {
    
    option.addEventListener('click', () => {
        playerSelection = option.id;
        computerSelection = getComputerChoice();

        roundCount += 1;
        let activeRound = playRound(playerSelection,computerSelection,roundCount);
        playerScore += activeRound[0];
        computerScore += activeRound[1];

        displayWinner(playerScore,computerScore);

    }
    );
});
};

game();