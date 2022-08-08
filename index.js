let player = {
    name: "Kobe Bryant",
    chips: 500
}
let firstCard, secondCard;
let card = [];
let sumCards = firstCard + secondCard;
let blackJack = false;
let gameOver = false;


let playerInfo = document.getElementById("player");
playerInfo.textContent = player.name + ": $" + player.chips;
let newCards = document.getElementById("cards");
let newSum = document.getElementById("sum");
let newMessage = document.getElementById("message");



function startGame() {
  firstCard = randomCard();
  secondCard = randomCard();
  cards = [firstCard, secondCard];
  sumCards = firstCard + secondCard;
  playGame();
}



function declare() {
  for (let i = 0; i < cards.length; i++) {
    newCards.textContent += cards[i] + " ";
  }
}



function randomCard() {
  return Math.floor(Math.random() * 10 + 2);
}



function playGame() {
  newCards.textContent = "Cards:";
  declare();
  newSum.textContent = "Sum: " + sumCards;

  if (sumCards <= 20) {
    newMessage.textContent = "1. Hit\n2. Stay";
  } else if (sumCards === 21) {
    newMessage.textContent = "\nBLACKJACK";
    blackJack = true;
  } else {
    newMessage.textContent = "\nBURST";
    gameOver = true;
  }
}



function hit() {
  if (gameOver === false && blackJack === false) {
    let thirdCard = randomCard();

    cards.push(thirdCard);

    sumCards += thirdCard;

    playGame();
  }
}



function stay() {}
