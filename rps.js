

function getComputerChoice() {
    const computer = ["rock", "paper", "scissors"];
    //random rolls (0 == Rock ,1 == Paper ,2 == Scissors)

    // Math.floor(Math.random() * (max_number-min_number +1) + min_number);
    return computer[(Math.floor(Math.random() * 3))];
}


// function getPlayerChoice() {
//     let choice = prompt("Choose Rock, Paper, or Scissors:");
//     return choice;
//     }

function playRound(playerSelection, computerSelection) 
{    
    //playerSelection ->  case-insensitive 
    playerSelection = playerSelection.toLowerCase();

    const currScore = document.querySelector('#scoreCard');
    let displRound = document.createElement('div');
    displRound.classList.add('Round');
    // 3 outcomes:
    //if tie:
    if (playerSelection == computerSelection){
        
        // console.log(`You tied, ` + `${playerSelection} ties ${computerSelection}!`);

        displRound.textContent = `You tied, ` + `${playerSelection} ties ${computerSelection}!`;
        currScore.appendChild(displRound);

        return 0.5
    }
    //if win:
    else if ((playerSelection  == "rock" && computerSelection == "scissors") ||
            (playerSelection  == "paper" && computerSelection == "rock") ||
            (playerSelection  == "scissors" && computerSelection == "paper") ) {

            // console.log(`You win! ${playerSelection} beats ${computerSelection}`);
        
            displRound.textContent = `You win! ${playerSelection} beats ${computerSelection}`;
            currScore.appendChild(displRound);

        return 1
    }
   //if lose:
    else {
        
        // console.log(`You lose! ${computerSelection} beats ${playerSelection}`);

        displRound.textContent = `You lose! ${computerSelection} beats ${playerSelection}`;
        currScore.appendChild(displRound);


        return 0
    }
  }




function game(){

let score = 0;
const buttons = document.querySelectorAll('button');
buttons.forEach( (button) => {
    
    button.addEventListener('click', () => {
        playerSelection = button.id;
        computerSelection = getComputerChoice();
        playRound(playerSelection, computerSelection);
        // console.log(playRound(playerSelection, computerSelection));
        // let currScore = playRound(playerSelection, computerSelection);
        // const displRound = document.createElement('div');
        // displRound.classList.add('Round');
        // displRound.textContent = 'Hey I’m red!';
        // container.appendChild(divRed);
    }
    );

});
// const container = document.querySelector('#container');

// const content = document.createElement('div');
// content.classList.add('scoreList');
// content.textContent = 'This is the glorious text-content!';

// container.appendChild(content);

};


//initialize score

//     // for (let i = 0; i < 5; i++) {
   
        // score += playRound(getPlayerChoice(),getComputerChoice());
        // console.log("Current score: " + score);

//         // playRound(playerSelection, computerSelection) 5 times
//         // update score variable each round
//     //  }


//      if (score > 2.5){
//         console.log('you won with ' + score + " wins and " + (5 - score) + " loss(es)!");
//      }
//      if (score < 2.5){
//         console.log('you lost with ' + score + " win(s) and " + (5 - score) + " losses!");
//      }
//      if (score == 2.5)
//         console.log('you tied with ' + score + " wins and " + (5 - score) + " losses!");

game();