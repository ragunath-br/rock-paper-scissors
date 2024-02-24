
let playerScore = 0;
let computerScore = 0;

//Functions to add listeners and call function when user clicks button
//Rather than adding eventlisteners to each button, it is better to add event listener to the parent of the buttons
const buttonMenu = document.querySelector('#buttonMenu');
buttonMenu.addEventListener('click',playGame);

//Adding element to identify the div for showing result page
const resultPage = document.querySelector('#resultPage');

//Setting up the elements earlier so that updating them is possible rather than appending over and over
const roundResultMessage = document.createElement('p');
resultPage.appendChild(roundResultMessage);

//Setting up the final result element in the page below round result
const finalResultMessage = document.createElement('h3');
resultPage.appendChild(finalResultMessage);

//Function to get the computer choice
//Returns one of three choices - Rock/Paper/Scissors
function getComputerChoice(){

    let computerChoices = ['rock','paper','scissors'];
    let randomElement = (Math.floor(Math.random()*3));
    let computerChoice = computerChoices[randomElement];
    return computerChoice;
}

//Function for formatting text
//Takes text ip and converts into lowercase
function formatTextForCode(text){
    return text.toLowerCase();
}

//Function for formatting text
//Takes text ip and converts into firstletter Capital , rest small case for displaying in console.
function formatTextForWebPage(text){
    return text[0].toUpperCase() + (text.slice(1).toLowerCase());
}

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

//Function that shows the person who reaches 5 victories first as the winner

function playGame(event){    
    let playerSelection = event.target.id;
    let computerSelection = getComputerChoice();
    let roundResult = playRound(playerSelection,computerSelection);        
    let gameResult = '';

    if(roundResult === 'win'){
        playerScore+=1;
        gameResult = `You Win. ${formatTextForWebPage(playerSelection)} beats ${formatTextForWebPage(computerSelection)}.`;
    }
    else if(roundResult === 'loss'){
        computerScore+=1;
        gameResult = `You Lose. ${formatTextForWebPage(computerSelection)} beats ${formatTextForWebPage(playerSelection)}.`;
    }else{
        gameResult = `It\'s a Tie. ${formatTextForWebPage(playerSelection)} ties with ${formatTextForWebPage(computerSelection)}.`; 
    }
    
    roundResultMessage.innerText = gameResult;
    finalResultMessage.innerText = `PLAYER SCORE: ${playerScore}\nCOMPUTER SCORE: ${computerScore}\n`;    

    if((playerScore===5) || (computerScore == 5)){
        finalResultMessage.innerText = finalResult(playerScore,computerScore);
    }    
}


// Function which will display the final score and result of the entire event
function finalResult(playerScore,computerScore){
    resultStr = `PLAYER SCORE: ${playerScore}\nCOMPUTER SCORE: ${computerScore}\n`;
    if (playerScore > computerScore){
        resultStr+='You Win. Congrats!!';
    }
    else if(computerScore > playerScore){
        resultStr+='You Lose. The rise of the machines has begun!!'; 
    }
    else{
        resultStr+='It\'s a tie. You didn\'t win but you didn\'t lose either.';
    }

    return resultStr;
}

