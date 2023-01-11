//pseudocode

function getComputerChoice{
    //random roll(1,2,3)
    //returns ‘Rock’, ‘Paper’ or ‘Scissors’.
}

function playRound(playerSelection, computerSelection) 
{    
    //playerSelection ->  case-insensitive 
    // 3 outcomes:
    //if tie:
    if (playerSelection == computerSelection){
        return "You Tie"
    }
    //if win:
    else if ((playerSelection  == "Rock" && computerSelection == "Scissors") ||
            (playerSelection  == "Paper" && computerSelection == "Rock") ||
            (playerSelection  == "Scissors" && computerSelection == "Paper") ) {
        return `You win ${playerSelection} beats ${computerSelection}`
    }
   //if lose:
    else {
        return `You Lose! ${computerSelection} beats ${playerSelection}}`
    }
  }

function game(){
// score variable
// let score = 0;
//     for (let i = 0; i < 5; i++) {
//         let playerSelection;
//         let computerSelection;
//         playRound(playerSelection, computerSelection) 5 times
//         update score variable each round
//      }
}