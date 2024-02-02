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
    
}