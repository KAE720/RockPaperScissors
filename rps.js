
let rock = "rock"
let paper = "paper"
let scissors = "scissors"
let humanScore = 0;
let computerScore = 0;



    function computerChoice() {

        if ((Math.floor(Math.random() * 3) + 1) == 1) {
            console.log(rock)
            return rock;
        }

        else if ((Math.floor(Math.random() * 3) + 1) == 2) {
            console.log(paper)
            return paper;
        }

        else {
            console.log(scissors)
            return scissors
        }
    }

    let getComputerChoice = computerChoice();





    function playRound(humanChoice, getComputerChoice) {

        if (humanChoice == "rock" && getComputerChoice == "paper") {

            console.log("YOU LOSE")
            computerScore++;
        }

        else if (humanChoice == "rock" && getComputerChoice == "scissors") {
            humanScore++;
            console.log("YOU WIN")
        }

        else if (humanChoice == "rock" && getComputerChoice == "rock") {
            console.log("draw")
            alert("draw")
        }

        else if (humanChoice == "scissors" && getComputerChoice == "scissors") {
            console.log("draw")
        }

        else if (humanChoice == "scissors" && getComputerChoice == "paper") {
            console.log("YOU WIN")
            humanScore++;
        }

        else if (humanChoice == "scissors" && getComputerChoice == "rock") {
            console.log("YOU LOSE")
            computerScore++;

        }

        else if (humanChoice == "paper" && getComputerChoice == "paper") {
            console.log("draw")
        }

        else if (humanChoice == "paper" && getComputerChoice == "scissors") {
            console.log("YOU LOSE")
            computerScore++;

        }

        else if (humanChoice == "scissors" && getComputerChoice == "rock") {
            console.log("YOU WIN")
            humanScore++;
        }


        console.log(humanScore);
    }



    let button1 = document.querySelector(".rock")
    let button2 = document.querySelector(".paper")
    let button3 = document.querySelector(".scissors")

    button1.addEventListener("click", function () {
        playRound("rock", getComputerChoice)
    })


    button2.addEventListener("click", function () {
        playRound("paper", getComputerChoice)
    })

    button3.addEventListener("click", function () {
        playRound("scissors", getComputerChoice)
    })


