let sum = 0;
let cards = [];
//
//
let hasBlackJack = false;
let isAlive = false;
//
//
//
let message = "";

//
let sumShow = document.getElementById("sumHtml");
//

let messA = document.getElementById("message");
//
//
// -----cards------
let cardBoth = document.getElementById("cards-E");

// -----cards------
//
//
function startGame() {
  isAlive = true;
  let firstCard = getRandomCard();
  let secondCard = getRandomCard();
  cards = [firstCard, secondCard];
  sum = firstCard + secondCard;
  renderGame();
}

//
function renderGame() {
  cardBoth.textContent = "Cards: ";
  for (let i = 0; i < cards.length; i++) {
    cardBoth.textContent += cards[i] + " ";
  }

  if (sum <= 20) {
    message = "...want another card? 😳 ";
  } else if (sum === 21) {
    message = "You Won Congrats! 😎";
    hasBlackJack = true;
  } else {
    message = "You Lost!! 👎 SORRY 🤣 ";
    isAlive = false;
  }
  messA.innerText = message;
  sumShow.textContent = sum;
}
//
//
//
//
//
function newGame() {
  if (isAlive === true && hasBlackJack === false) {
    let newcard = getRandomCard();
    sum += newcard;
    cards.push(newcard);

    renderGame();
  }
}

function getRandomCard() {
  let randNum = Math.floor(Math.random() * 11) + 1;
  if (randNum > 10) {
    return 10;
  } else if (randNum === 1) {
    return 11;
  } else {
    return randNum;
  }
}
//
//
//
//
//
// Info of player "this is called objet in js"

// let playerInfo = {
//   moneyJs: 145,
//   nam: "Your Balance: ",
// };

// //
// let balanceHtml = document.getElementById("money");

// balanceHtml.textContent = playerInfo.nam + "$" + playerInfo.moneyJs;

// -------------
//
//
// ------- this its bye my own---------
function reset() {
  isAlive = true;
  cardBoth.textContent = "Cards: ";
  sumShow.textContent = " ";
  messA.textContent = "Want to play a round?";
  cards;
  sum;
}
