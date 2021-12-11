// Write a getCard() function which returns a random playing card object, like:
// 		{
// 			value: 'K'
// 			suit: 'clubs'
// 		}
//Pick a random value from:
//----1,2,3,4,5,6,7,8,9,10,J,Q,K,A
//Pick a random suit from:
//----clubs,spades, hearts, diamonds
//Return both in an object


function getCard() {
    var values = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
    var suits = ['clubs', 'spades', 'hearts', 'diamonds'];
    var randomValue = values[Math.floor(Math.random() * values.length)];
    var randomSuit = suits[Math.floor(Math.random() * suits.length)];
    var card = {
        value: randomValue,
        suit: randomSuit
    };
    return card;
}

console.log(getCard());
console.log(getCard());