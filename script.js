
// call function to play 5 rounds
game();


// function to play game
function game() {
  // create variables for player and computer choice
  let player1;
  let player2;
  // initialize scores
  let playerScore = 0;
  let computerScore = 0;

  // create event listener for buttons
  let btns = document.querySelectorAll('button');
  btns.forEach((btn) => {
    btn.addEventListener('click', () => { 
    player1 = btn.id;
    console.log(player1);
    // determine, increment score and output who won to console by calling playRound function
    if (playRound(player1, player2) == 'win') {
      // display winning message
      console.log("You win this round!")
      // increment player's score
      playerScore += 1;
      console.log(`Player score is: ${playerScore} ,  Computer's score is: ${computerScore} `);
    }
    else if (playRound(player1, player2) == 'lose') {
      console.log("You lose this round :(")
      computerScore += 1; 
      console.log(`Player score is: ${playerScore} ,  Computer's score is: ${computerScore} `);
    }
    else if (playRound(player1, player2) == 'tie') {
      console.log("You tied this round") 
      console.log(`Player score is: ${playerScore} ,  Computer's score is: ${computerScore} `);
    }
    });
  });
  
  console.log(player1);
  // get the computer's choice
  player2 = getComputerChoice();


  
  
  // output result of the entire five rounds to console
  if (playerScore > computerScore) {
    console.log(`You won the game. Score was ${playerScore} to ${computerScore}`);
  }
  else if (playerScore < computerScore) {
    console.log(`You lost the game. Score was ${playerScore} to ${computerScore}`);
  }
  else if (playerScore == computerScore) {
    console.log(`Tie game. Score was ${playerScore} to ${computerScore}`);
  }
} 



// function to get computer's choice and initialize computerSelection
function getComputerChoice() {
  // create array of choices
  const choices = ['rock', 'paper', 'scissors'];

  // assign random array element to computer's choice
  computerChoice = choices[Math.floor(Math.random() * choices.length)];
  console.log(`computer's choice was: ${computerChoice}`);
  return(computerChoice);
}


// function that takes choices and returns a string indicating if player won or lost
// could also have nested these - player selection, then an if statement within it with the 
// three choices that computer could pick
function playRound(playerSelection, computerSelection) {
  if (playerSelection == 'rock' && computerSelection == 'scissors') {
    return "win";
  }
  else if (playerSelection == 'paper' && computerSelection == 'scissors') {
    return "lose";
  }
  else if (playerSelection == 'scissors' && computerSelection == 'scissors') {
    return "tie";
  }
  else if (playerSelection == 'rock' && computerSelection == 'paper') {
    return "lose";
  }
  else if (playerSelection == 'paper' && computerSelection == 'paper') {
    return "tie";
  }
  else if (playerSelection == 'scissors' && computerSelection == 'paper') {
    return "win";
  }
  else if (playerSelection == 'rock' && computerSelection == 'rock') {
    return "tie";
    }
  else if (playerSelection == 'paper' && computerSelection == 'rock') {
    return "win";
  }
  else if (playerSelection == 'scissors' && computerSelection == 'rock') {
    return "lose";
  }
  else {
    return "An error occured";
  }
}


