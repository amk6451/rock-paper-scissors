game();

function getComputerChoice() {
    const computer = ["rock", "paper", "scissors"];
    //random rolls (0 == Rock ,1 == Paper ,2 == Scissors)

    // Math.floor(Math.random() * (max_number-min_number +1) + min_number);
    return computer[(Math.floor(Math.random() * 3))];
}


function getPlayerChoice() {
    let choice = prompt("Choose Rock, Paper, or Scissors:");
    return choice;
    }

function playRound(playerSelection, computerSelection) 
{    
    //playerSelection ->  case-insensitive 
    playerSelection = playerSelection.toLowerCase();
    // 3 outcomes:
    //if tie:
    if (playerSelection == computerSelection){
        console.log(`You tied, ` + `${playerSelection} ties ${computerSelection}!`);
        return 0.5
    }
    //if win:
    else if ((playerSelection  == "rock" && computerSelection == "scissors") ||
            (playerSelection  == "paper" && computerSelection == "rock") ||
            (playerSelection  == "scissors" && computerSelection == "paper") ) {
            console.log(`You win! ${playerSelection} beats ${computerSelection}`);
        return 1
    }
   //if lose:
    else {
        console.log(`You lose! ${computerSelection} beats ${playerSelection}`);
        return 0
    }
  }

function game(){

//initialize score
let score = 0;
    for (let i = 0; i < 5; i++) {
   
        score += playRound(getPlayerChoice(),getComputerChoice());
        console.log("Current score: " + score);

        // playRound(playerSelection, computerSelection) 5 times
        // update score variable each round
     }
     if (score > 2.5){
        console.log('you won with ' + score + " wins and " + (5 - score) + " loss(es)!");
     }
     if (score < 2.5){
        console.log('you lost with ' + score + " win(s) and " + (5 - score) + " losses!");
     }
     if (score == 2.5)
        console.log('you tied with ' + score + " wins and " + (5 - score) + " losses!");
}
