//Function to get the computer choice
//Returns one of three choices - Rock/Paper/Scissors
function getComputerChoice(){

    let computerChoices = ['rock','paper','scissors'];
    let randomElement = (Math.floor(Math.random()*3));
    let computerChoice = computerChoices[randomElement];
    return computerChoice;
}

//console.log(getComputerChoice());

//Function for formatting text
//Takes text ip and converts into lowercase
function formatTextForCode(text){
    return text.toLowerCase();
}

//console.log(formatTextForCode('Gryat'))


//Function for formatting text
//Takes text ip and converts into firstletter Capital , rest small case for displaying in console.
function formatTextForConsole(text){
    return text[0].toUpperCase() + (text.slice(1).toLowerCase());
}

//console.log(formatTextForConsole('gryat'))


//Function that plays 1 round of the game Rock-Paper-Scissors
//Returns the result of the game
function playRound(playerSelection,computerSelection){
    let result = '';
    if (playerSelection === 'rock'){
        if (computerSelection === 'rock'){
            result = `tie`;
        }
        else if(computerSelection === 'paper'){
            result = `loss`;
        }
        else{
            result = `win`; 
        }
    }
    
    else if (playerSelection === 'paper'){
        if (computerSelection === 'rock'){
            result = `win`;
        }
        else if(computerSelection === 'paper'){
            result = `tie`;
        }
        else{
            result = `loss`; 
        }
    }

    else{
        if (computerSelection === 'rock'){
            result = `loss`;
        }
        else if(computerSelection === 'paper'){
            result = `win`;
        }
        else{
            result = `tie`; 
        }
    }
    return result;
}

//const playerSelection = "rock";
//const computerSelection = getComputerChoice();
//console.log(playRound(playerSelection, computerSelection));


//Function that plays 5 rounds of the game Rock-Paper-Scissors while keeping track of score
//Returns the winner of the 5 game series

function playGame(){
    let playerScore = 0;
    let computerScore = 0;
    //for(let i = 0; i < 5;i++){
        let playerSelection = formatTextForCode(prompt("Enter your Choice:"))
        let computerSelection = getComputerChoice();
        let roundResult = playRound(playerSelection,computerSelection);        
        let gameResult = '';
        //console.log(roundResult);

        if(roundResult === 'win'){
            playerScore+=1;
            gameResult = `You Win. ${formatTextForConsole(playerSelection)} beats ${formatTextForConsole(computerSelection)}.`;
        }
        else if(roundResult === 'loss'){
            computerScore+=1;
            gameResult = `You Lose. ${formatTextForConsole(computerSelection)} beats ${formatTextForConsole(playerSelection)}.`;
        }else{
            gameResult = `It\'s a Tie. ${formatTextForConsole(playerSelection)} ties with ${formatTextForConsole(computerSelection)}.`; 
        }
        console.log(gameResult);
    //}
    console.log(finalResult(playerScore,computerScore));
}


// Function which will display the final score and result of the entire event
function finalResult(playerScore,computerScore){
    resultStr = `PLAYER SCORE: ${playerScore}\nCOMPUTER SCORE: ${computerScore}\n`;
    if (playerScore > computerScore){
        resultStr+='You Win. Congrats!!';
    }
    else if(computerScore > playerScore){
        resultStr+='You Lose. The rise of the machine begins!!'; 
    }
    else{
        resultStr+='It\'s a tie. You didn\'t win but you didn\'t lose either.';
    }

    return resultStr;
}

playGame();