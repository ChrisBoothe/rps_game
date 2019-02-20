function computerPlay() {

    let choice = (Math.floor(Math.random() *3));
    
    if (choice === 0) {
        return ("rock");
    }
    else if (choice === 1) {
        return ("paper");
    }
    else {
        return ("scissors");
    }

}



function playRound(playerSelection, computerSelection) {

    let score = 0; 
    

    if ((playerSelection === "rock") && (computerSelection === "paper")) {
        console.log("You lose! Paper beats rock!")
        score--;
    }

    else if ((playerSelection === "rock") && (computerSelection === "scissors")) {
        console.log("You win! Rock beats scissors!")
        score++;
    }

    else if ((playerSelection === "scissors") && (computerSelection === "rock")) {
        console.log("You lose! Rock beats scissors!")
        score--;
    }
    
    else if ((playerSelection === "scissors") && (computerSelection === "paper")) {
        console.log("You win! Scissors beats paper!")
        score++;
    }

    else if ((playerSelection === "paper") && (computerSelection === "scissors")) { 
        console.log("You lose! Scissors beats paper!")
        score--;
    }

    else if ((playerSelection === "paper") && (computerSelection === "rock")) { 
        console.log("You win! Paper beats rock!")
        score++;
    }
    
    else {
        console.log("The game is a tie!")
        score;
    }

return score;
}

let playerSelection = "";
let computerSelection = computerPlay();


var rock = document.querySelector('#rock');
rock.addEventListener('click', () => {
      playerSelection = "rock";
    playRound(playerSelection, computerPlay());
});

var paper = document.querySelector('#paper');
paper.addEventListener('click', () => {
      playerSelection = "paper";
    playRound(playerSelection, computerPlay());
});

var scissors = document.querySelector('#scissors');
scissors.addEventListener('click', () => {
      playerSelection = "scissors";
    playRound(playerSelection, computerPlay());
});