
let rock = "rock"
let paper = "paper"
let scissors = "scissors"
let humanScore = 0;
let computerScore = 0;











while (true){

    function getComputerChoice() {

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
    
    let computerChoice = getComputerChoice();
    

    let userinput = prompt("What is your choice?")


function getHumanChoice(userinput) {

    if (userinput == "rock") {
        console.log(userinput)
        return rock;
    }

    else if (userinput == "paper") {
        console.log(userinput)
        return paper
    }

    else {
        console.log(userinput)
        return scissors
    }

}

let humanChoice = getHumanChoice(userinput);

   

    function playRound(humanChoice, computerChoice) {

        if (humanChoice == "rock" && computerChoice == "paper") {
            
            console.log("YOU LOSE")
            computerScore++;
        }

        else if (humanChoice == "rock" && computerChoice == "scissors") {
            humanScore++;
            console.log("YOU WIN")
        }

        else if (humanChoice == "rock" && computerChoice == "rock") {
            console.log("draw")
            alert("draw")
        }

        else if (humanChoice == "scissors" && computerChoice == "scissors") {
            console.log("draw")
        }

        else if (humanChoice == "scissors" && computerChoice == "paper") {
            console.log("YOU WIN")
            humanScore++;
        }

        else if (humanChoice == "scissors" && computerChoice == "rock") {
            console.log("YOU LOSE")
            computerScore++;
        
        }

        else if (humanChoice == "paper" && computerChoice == "paper") {
            console.log("draw")
        }

        else if (humanChoice == "paper" && computerChoice == "scissors") {
            console.log("YOU LOSE")
            computerScore++;
            
        }

        else if (humanChoice == "scissors" && computerChoice == "rock") {
            console.log("YOU WIN")
            humanScore++;
        }

        
        console.log(humanScore);
    }


    
    playRound(humanChoice, computerChoice)

    if (humanScore == 5){
        break;
    }

    if (computerScore == 5){
        break;
    }



}


