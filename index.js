let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById(
  "computer-score"
); /* o S maiusculo mais a tag html são para diferenciar as constantes que iram se relacionar com a DOM*/
const scoreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissor_div = document.getElementById("s");

function getComputerChoice() {
  const choices = ["r", "p", "s"];
  const randomNumber = Math.floor(Math.random() * 3);
  return choices[randomNumber];
}

function convertToWord(letter) {
  if (letter === "r") return "Pedra";
  if (letter === "p") return "Papel";
  return "Tesoura";
}

function win(userChoice, computerChoice) {
  const smallUserWord = "user".fontsize(3).sup();
  const smallComputerWord = "computer".fontsize(3).sup();
  const userChoice_div = document.getElementById(userChoice);
  userScore++;
  userScore_span.innerHTML = userScore;
  computerScore_span.innerHTML = computerScore;
  result_p.innerHTML = `${convertToWord(userChoice)} ${smallUserWord} derrotou ${convertToWord(computerChoice)} ${smallComputerWord}  .  Você ganhou!!!`;
  userChoice_div.classList.add('green-glow');
  setTimeout( () => userChoice_div.classList.remove('green-glow'), 300);
}

function lose(userChoice, computerChoice) {
  const smallUserWord = "user".fontsize(3).sup();
  const smallComputerWord = "computer".fontsize(3).sup();
  const userChoice_div = document.getElementById(userChoice);
  computerScore++;
  userScore_span.innerHTML = userScore;
  computerScore_span.innerHTML = computerScore;
  result_p.innerHTML = `${convertToWord(userChoice)} ${smallUserWord} derrotou ${convertToWord(computerChoice)} ${smallComputerWord}  .  Você perdeu...`;
  userChoice_div.classList.add('red-glow');
  setTimeout(() => userChoice_div.classList.remove('red-glow'), 300);
}

function draw(userChoice, computerChoice) {
  const smallUserWord = "user".fontsize(3).sup();
  const smallComputerWord = "computer".fontsize(3).sup();
  const userChoice_div = document.getElementById(userChoice);
  result_p.innerHTML = `${convertToWord(userChoice)} ${smallUserWord} é igual a ${convertToWord(computerChoice)} ${smallComputerWord}  .  Empatou!!`;
  userChoice_div.classList.add('yellow-glow');
  setTimeout(() => userChoice_div.classList.remove('yellow-glow'), 300);
}

function game(userChoice) {
  const computerChoice = getComputerChoice();
  switch (userChoice + computerChoice) {
    case "pr":
    case "rs":
    case "sp":
      win(userChoice, computerChoice);
      break;
    case "rp":
    case "sr":
    case "ps":
      lose(userChoice, computerChoice);
      break;
    case "pp":
    case "rr":
    case "ss":
      draw(userChoice, computerChoice);
      break;
  }
}

function main() {
  rock_div.addEventListener("click", () => game("r"));
  
  paper_div.addEventListener("click", () => game("p"));
  
  scissor_div.addEventListener("click", () => game("s"));
  
}

main();
