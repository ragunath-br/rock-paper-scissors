//Function to get the computer choice
//Returns one of three choices - Rock/Paper/Scissors
function getComputerChoice(){

    let computerChoices = ['rock','paper','scissors'];
    let randomElement = (Math.floor(Math.random()*3));
    let computerChoice = computerChoices[randomElement];
    return computerChoice;
}

console.log(getComputerChoice());

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

//console.log(formatTextForConsole('Gryat'))


//Function that plays 1 round of the game Rock-Paper-Scissors
//Returns the result of the game
function playRound(playerSelection,computerSelection){
    let result = '';
    if (playerSelection === 'rock'){
        if (computerSelection === 'rock'){
            result = `You are tied. ${formatTextForConsole(playerSelection)} ties ${formatTextForConsole(computerSelection)}.`;
        }
        else if(computerSelection === 'paper'){
            result = `You Lose. ${formatTextForConsole(computerSelection)} beats ${formatTextForConsole(playerSelection)}.`;
        }
        else{
            result = `You Win. ${formatTextForConsole(playerSelection)} beats ${formatTextForConsole(computerSelection)}.`; 
        }
    }
    
    else if (playerSelection === 'paper'){
        if (computerSelection === 'rock'){
            result = `You Win. ${formatTextForConsole(playerSelection)} beats ${formatTextForConsole(computerSelection)}.`;
        }
        else if(computerSelection === 'paper'){
            result = `You are tied. ${formatTextForConsole(playerSelection)} ties ${formatTextForConsole(computerSelection)}.`;
        }
        else{
            result = `You Lose. ${formatTextForConsole(computerSelection)} beats ${formatTextForConsole(playerSelection)}.`; 
        }
    }

    else{
        if (computerSelection === 'rock'){
            result = `You Lose. ${formatTextForConsole(computerSelection)} beats ${formatTextForConsole(playerSelection)}.`;
        }
        else if(computerSelection === 'paper'){
            result = `You Win. ${formatTextForConsole(playerSelection)} beats ${formatTextForConsole(computerSelection)}.`;
        }
        else{
            result = `You are tied. ${formatTextForConsole(playerSelection)} ties ${formatTextForConsole(computerSelection)}.`; 
        }
    }
    return result;
}

//const playerSelection = "rock";
//const computerSelection = getComputerChoice();
//console.log(playRound(playerSelection, computerSelection));

function playGame(){
    for(let i = 0; i < 5;i++){
        
    }
}