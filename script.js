// It should have a function called "computerPlay" that will randomly return either "Rock', "Paper", or "Scissors".

const rockPaperScissors = ["Rock", "Paper", "Scissors"]

container = document.getElementById("buttons");
buttons = container.querySelectorAll("button")

for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", gameRound)
}

let main = document.getElementById("main");
let divElement = document.createElement("div");
divElement.innerText = "";
main.appendChild(divElement);

divElement.innerText = "";

function computerPlay() {
    return rockPaperScissors[Math.floor(Math.random()*rockPaperScissors.length)];
}

let playerScore = 0;
let computerScore = 0;

function gameRound(e) {
    computerSelection = computerPlay();
    playerSelection = e.target.id;
    console.log(computerSelection);

    // find the first letter of the playerSelectionString and uppercase it
    let playerSelectionInTitleCase = playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1).toLowerCase();
    console.log(playerSelectionInTitleCase);

    // Go through all possible results of Rock Paper Scissors using if statements
    if (playerSelectionInTitleCase === "Rock" && computerSelection === "Scissors" || 
    playerSelectionInTitleCase === "Paper" && computerSelection === "Rock" || 
    playerSelectionInTitleCase === "Scissors" && computerSelection === "Paper") {
        divElement.innerText = "You win! " + playerSelectionInTitleCase + " beats " + computerSelection;
        console.log(divElement.innerText);
        playerScore++; 

    } else if (playerSelectionInTitleCase === "Rock" && computerSelection === "Paper" || 
    playerSelectionInTitleCase === "Paper" && computerSelection === "Scissors" ||
    playerSelectionInTitleCase === "Scissors" && computerSelection === "Paper") {
        divElement.innerText = "You lose! " + playerSelectionInTitleCase + " loses to " + computerSelection;
        console.log(divElement.innerText);
        computerScore++;

    } else {
        divElement.innerText = "It's a tie!";
        console.log(divElement.innerText);
    }

    console.log(playerScore);
    console.log(computerScore);
}

let scoreDiv = document.createElement("div");
scoreDiv.innerText = "player score = " + playerScore + " computer score = " + computerScore;
main.appendChild(scoreDiv);

// function game() {
//     // Create a variable that keeps score
//     score = 0;

//     let gameRoundResult = gameRound();

//     // if gameRoundResult = true, then add one to the score
//     if (gameRoundResult.includes("Win") === true) {
//         score++;
//         console.log("You win this round!")
//     } else {
//         console.log("You lose this round!")
//     }

//     // The game() function should report a winner or loser at the end.
//     // if score > 2, win, else. Ties count as a loss. 
        
//     if (score > 2) {
//         console.log("You win!")
//     } else {
//         console.log("You lose :(")
//     }
// }
