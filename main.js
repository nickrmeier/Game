let cards = ["queen", "queen", "king", "king"];
let cardsInPlay = [];

function checkForMatch() {
    if (cardsInPlay[0] === cardsInPlay[1]) {
        alert("We have a match!");
    } else {
        alert("Sorry buster, you're a loser");
    }
}

function flipCard(cardId) {
    console.log("User flipped " + cards[cardId]);
    cardsInPlay.push(cards[cardId]);
}

flipCard(0)
flipCard(2)