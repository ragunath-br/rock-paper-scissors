//Function to get the computer choice
//Returns one of three choices - Rock/Paper/Scissors
function getComputerChoice(){

    let computerChoices = ['rock','paper','scissors'];
    let randomElement = (Math.floor(Math.random()*3));
    let computerChoice = computerChoices[randomElement];
    return computerChoice;
}

console.log(getComputerChoice())