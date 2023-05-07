let player = {
    name: "King",
    chips: 150
}

let cards = [];
let sum = 0;
let hasBlackJack = false; // boolean
let isAlive = false;
let message = "";
let sumEl = document.getElementById("sum-el");
let cardsEl = document.querySelector("#cards-el"); 
let messageEl = document.getElementById("message-el");
let playerEl = document.getElementById("player-el");
// this is an array = []
// this is an object = {}
// objects store data in-depth; composite/comples data type
// key-value pairs

// playerEl.textContent = playerName + ": $" + playerChips;
playerEl.textContent = player.name + ": $" + player.chips;

// function returns a random number between 1 and 13
function getRandomCard() {
    let randomNumber = Math.floor(Math.random() * 13 ) + 1; // returns 1-13
    if (randomNumber > 10) {
        return 10;
    } else if (randomNumber === 1) {
        return 11;
    } else {
    return randomNumber;
    }
}

function startGame() {
    isAlive = true;
    let firstCard = getRandomCard(); // let firstCard = 3;
    let secondCard = getRandomCard(); // let secondCard = 7;
    cards = [firstCard, secondCard] // array: ordered list of items
    sum = firstCard + secondCard; // + 26; // sum = 26
    renderGame();
}

function renderGame() {
    // cardsEl.textContent = "Cards: " + firstCard + " " + secondCard;
    // render out firstCard and secondCard
    // cardsEl.textContent = "Cards: " + cards[0] + " " + cards[1];
    // render out ALL cards we have
    cardsEl.textContent = "Cards: ";
    for (let i = 0; i < cards.length; i++) {
        cardsEl.textContent += cards[i] + " ";
    }
    sumEl.textContent = "Sum: " + sum;
    if (sum <= 20) {
        message = "Do you want to draw a new card?";
        // sumEl.textContent += sum;
        // cardsEl.textContent += firstCard.toString() + ", " + secondCard.toString();
    } else if (sum === 21) {
        message = "Wohoo! You've got Blackjack!";
        hasBlackJack = true
        // sumEl.textContent += sum;
        // cardsEl.textContent += firstCard.toString() + ", " + secondCard.toString();
    } else {
        message = "You're out of the game!";
        isAlive = false;
        // sumEl.textContent += sum;
        // cardsEl.textContent += firstCard.toString() + ", " + secondCard.toString();
    }
    messageEl.textContent = message;
}

function newCard() {
    // Only allow the player to get a new card if she IS alive and does NOT have Blackjack
    if (isAlive === true && hasBlackjJack === false) {
        let card = getRandomCard();
        sum += card;
        cards.push(card);
        renderGame();
    }
}