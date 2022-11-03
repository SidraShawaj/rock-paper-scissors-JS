const options = ["rock", "paper", "scissors"];
let computerScore = 0,
  userScore = 0;

const computerPlay = () => {
  const selection = Math.floor(Math.random() * options.length);
  return options[selection];
};

const playRound = (computerSelection, playerSelection) => {
  const results = `${computerSelection}, ${playerSelection}`;
  console.log(
    `My choice: ${computerSelection}\nYour choice: ${playerSelection}`
  );

  switch (results.toLowerCase()) {
    case "rock, rock":
      return `We both rock!`;
    case "rock, paper":
      userScore++;
      return `You win! ${playerSelection} beats ${computerSelection}`;
    case "rock, scissors":
      computerScore++;
      return `You lose! ${computerSelection} beats ${playerSelection}`;
    case "paper, rock":
      computerScore++;
      return `You lose! ${computerSelection} beats ${playerSelection}`;
    case "paper, paper":
      return `Great.. let's make origami!`;
    case "paper, scissors":
      userScore++;
      return `You win! ${playerSelection} beats ${computerSelection}`;
    case "scissors, rock":
      userScore++;
      return `You win! ${playerSelection} beats ${computerSelection}`;
    case "scissors, paper":
      computerScore++;
      return `You lose! ${computerSelection} beats ${playerSelection}`;
    case "scissors, scissors":
      return `Ouch! carefult with those!`;
    default:
      return `Oops! only rock, paper or scissors for this game.`;
  }
};

const game = () => {
  for (let i = 0; i < 5; i++) {
    const computerSelection = computerPlay();
    const playerSelection = prompt(`Round ${i + 1}.\nRock, paper or scissors?`);

    if (!options.includes(playerSelection.toLocaleLowerCase())) {
      console.log("invalid choice. Try again.");
      i--;
    } else {
      console.log(playRound(computerSelection, playerSelection));
      console.log(`computer score: ${computerScore}\tYour score: ${userScore}`);
    }
  }

  if (computerScore > userScore) {
    console.log(`You lost the game :(`);
  } else if (userScore > computerScore) {
    console.log(`You won the game!`);
  } else console.log(`Tie!`);
};

game();
