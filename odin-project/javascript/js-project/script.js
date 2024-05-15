// get the computer choice

const RPS_OPTIONS = ['rock','paper', 'scissors']

let humanScore = 0
let computerScore = 0 

function getComputerChoice() {
    return RPS_OPTIONS[Math.round(Math.random() * 2)]
}

function getHumanChoice() {
    const humanChoice = prompt('What is you choice rock, paper or scissors?').toLowerCase()
    if (humanChoice == 'rock' || humanChoice == 'paper' || humanChoice == 'scissors') {
        return humanChoice
    } 
    return 1
}

function playRound(humanChoice, computerChoice) {
    if (humanChoice == 'rock' || humanChoice == 'paper' || humanChoice == 'scissors') {
        // rock
        if (humanChoice == 'rock' && computerChoice == 'rock') {
            return "it's a Draw"
        } else if (humanChoice == 'rock' && computerChoice == 'paper') {
            computerScore++
            return "You lose, paper defeats rock!"
        } else if (humanChoice == 'rock' && computerChoice == 'scissors') {
            humanScore++
            return "You win, rock defeats scissors!"
        }
        // scissors
        else if (humanChoice == 'scissors' && computerChoice == 'rock') {
            computerScore++
            return "You lose, rock defeats scissors!"
        } else if (humanChoice == 'scissors' && computerChoice == 'scissors') {
            return "it's a Draw"
        } else if (humanChoice == 'scissors' && computerChoice == 'paper') {
            humanScore++
            return "You win! scissors defeats paper!"
        }
        // paper
        else if (humanChoice == 'paper' && computerChoice == 'rock') {
            humanScore++
            return "You win, paper defeats rock!"
        } else if (humanChoice == 'paper' && computerChoice == 'paper') {
            return "it's a Draw"
        } else if (humanChoice == 'paper' && computerChoice == 'scissors') {
            computerScore++
            return "You lose, scissors defeats paper!"
        }
    }
}

function playGame() {
    for (let i = 0; i <5; i++) {
        console.log(playRound(getHumanChoice() , getComputerChoice()))
        console.log(`Current score Human: ${humanScore} vs Computer: ${computerScore}`)
    }
}

playGame()
