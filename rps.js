//pseudocode

// getPlayerChoice();
// console.log("hello all");
// console.log("this is awesome");


function getComputerChoice() {
    //random rolls (0 == Rock ,1 == Paper ,2 == Scissors)
    //returns ‘Rock’, ‘Paper’ or ‘Scissors’.
    // Math.floor(Math.random() * (max_number-min_number +1) + min_number);
    const computer = ["Rock", "Paper", "Scissor"];
    return computer[(Math.floor(Math.random() * 3))];
}


function getPlayerChoice() {
    let choice = prompt("Choose Rock, Paper, or Scissors:");
    // console.log(choice);
    return choice;
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
