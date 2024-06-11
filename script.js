// Javascript for rock paper scissors game

// let choice = ["rock", "paper", "scissors"]

function computerPlay() {
    let choice = ["rock", "paper", "scissors"]
    return randomChoice = choice[Math.floor(Math.random() * choice.length)];
}

function playerSelection() {
        return prompt("Choose rock, paper or scissors?")
    } 

function playRound(playerSelection, computerPlay) {
        console.log(`Commputer chose ${computerPlay}`);
    if (computerPlay === "rock" && playerSelection === "scissors"){
        return "Computer chose rock so computer wins!";
    } else if (computerPlay === "paper" && playerSelection === "rock"){
        return "Computer chose paper so computer wins!";
    } else if (computerPlay === "scissors" && playerSelection === "paper"){
        return "Computer chose scissors so computer wins!";
    } else if (playerSelection === "rock" && computerPlay === "scissors"){
        return "You win! Computer chose scissors";
    } else if (playerSelection === "paper" && computerPlay === "rock"){
        return "You win! Computer chose rock";
    } else if (playerSelection === "scissors" && computerPlay === "paper"){
        return "You win! Computer chose paper";
    } else {
        return "It's a draw";
    }
    }
    
const getComputerChoce = computerPlay();
console.log(playRound(playerSelection(), computerPlay()));

