console.log("Up and running!");

var cards = [
{
	rank: "queen",
	suit: "hearts",
	cardImage: "images/queen-of-hearts.png"
},
{
	rank: "queen",
	suit: "diamonds",
	cardImage: "images/queen-of-diamonds.png"
},
{
	rank: "king",
	suit: "hearts",
	cardImage: "images/king-of-hearts.png"
},
{
	rank: "king",
	suit: "diamonds",
	cardImage: "images/king-of-diamonds.png"
}
];


var cardsInPlay = [];

function checkForMatch() {
if (cardsInPlay[0] === cardsInPlay[1]) {
  console.log("You found a match!");
} else {
  console.log("Sorry, try again.");
}
}

function flipCard() {
document.getElementById(cardId).getAttribute('data-id');
this.setAttribute('src', cards[cardId].cardImage);
console.log("User flipped " + cards[cardId].rank);
console.log(cards[cardId].cardImage);
console.log(cards[cardId].suit);
cardsInPlay.push(cards[cardId].rank);
if (cardsInPlay.length === 2 && cardsInPlay[0] === cardsInPlay[2]) { alert("You found a match!");
checkForMatch();
}
else { alert("Sorry, try again.")
}
}


//console.log(cards[0].cardImage);
//console.log(cards[0].suit);

//console.log(cards[2].cardImage);
//console.log(cards[2].suit);

function createBoard() {
for (var i = 0; i = cards.length; i++) {
var cardElement = document.createElement('img');
cardElement.setAttribute('src', 'images/back.png');
cardElement.setAttribute('data-id', i);
cardElement.addEventListener('click', flipCard);
//document.getElementById('game-board').appendChild(cardElement);
}
}

createBoard();
