let card =[];
let sum = 0;
let hasBlackjack = false
let isAlive = true
let message;
let messageScreen = document.getElementById("message");
let cardEl = document.getElementById("card-el");
let sumEl = document.getElementById("sum-el");
console.log(card)
function randomNumber(){
   let randomFigs = Math.floor(Math.random()*13)+1
   if (randomFigs === 1){
       return 11
   } else if (randomFigs >= 11){
       return 10
   } else {
       return randomFigs
   }
}
function startGame(){
    let firstnumber = randomNumber();
    let secondnumber = randomNumber();
    card = [firstnumber, secondnumber];
    sum = firstnumber + secondnumber;
    renderGame();
} 
function renderGame(){
    cardEl.textContent = "Cards: "; 
    for (let i = 0; i < card.length; i++){
        cardEl.textContent += "" + card[i] + ","
    }
    sumEl.textContent = "Sum: " + sum;
    if (sum < 21){
        message = "Do you want to draw a new card?"
        hasBlackjack = false
        isAlive = true
    } else if (sum === 21){
        message ="You've got BlackJack!"
        hasBlackjack = true;
    } else {
        message = "You're out of the game!"
        isAlive = false;
        hasBlackjack = false;
    } messageScreen.textContent = message
}
function newCard(){
    let newcard;
    if (hasBlackjack === false && isAlive === true){
        newcard = randomNumber();
        sum += newcard
        card.push(newcard);
    }renderGame();
} 
