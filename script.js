const options = ["rock", "paper", "scissors"];

const computerPlay = () => {
  const selection = Math.floor(Math.random() * options.length);
  return options[selection];
};

const playRound = (computerSelection, playerSelection) => {
  playerSelection = playerSelection.toLowerCase();
  const results = `${computerSelection}, ${playerSelection}`;
  console.log(results);

  switch (results) {
    case "rock, rock":
      return `We both rock!`;
    case "rock, paper":
      return `You win! ${playerSelection} beats ${computerSelection}`;
    case "rock, scissors":
      return `You lose! ${computerSelection} beats ${playerSelection}`;
    case "paper, rock":
      return `You lose! ${computerSelection} beats ${playerSelection}`;
    case "paper, paper":
      return `Great.. let's make origami!`;
    case "paper, scissors":
      return `You win! ${playerSelection} beats ${computerSelection}`;
    case "scissors, rock":
      return `You win! ${playerSelection} beats ${computerSelection}`;
    case "scissors, paper":
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

    const playerSelection = prompt(`Rock, paper or scissors?`);

    console.log(playRound(computerSelection, playerSelection));
  }
};

game();

// const playerSelection = "RoCk";

// const computerSelection = computerPlay();

// const playerSelection = prompt(`Rock, paper or scissors?`);

// console.log(playRound(computerSelection, playerSelection));
