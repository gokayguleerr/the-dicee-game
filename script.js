const body = document.body;
const firstDicePlace = document.querySelector('#dicee-place-1');
const secondDicePlace = document.querySelector('#dicee-place-2');
const diceeButton = document.querySelector('#dicee-btn');
const firstChallenger = document.querySelector('#first-challenger').textContent;
const secondChallenger = document.querySelector('#second-challenger').textContent;
const winnerTextPlace = document.querySelector('#winner-place');
const theWinner = document.querySelector('#the-winner');
const winText = document.querySelector('#win-text');


diceeButton.addEventListener('click', () => {
    var randomDice1 = (1 + Math.floor(Math.random() * 6)),
        randomDice2 = (1 + Math.floor(Math.random() * 6));
        
        firstDicePlace.setAttribute('src', `./images/dice${randomDice1}.png`);
        secondDicePlace.setAttribute('src', `./images/dice${randomDice2}.png`);

        if (randomDice1 > randomDice2) {
            theWinner.textContent = "Niloofar";
            winText.textContent = " wins!";
            console.log('Niloofar wins!');
        } else if (randomDice2 > randomDice1) {
            theWinner.textContent = "Gökay";
            winText.textContent = " wins!";
            console.log('Gökay wins!');
        } else {
            theWinner.textContent = "";
            winText.textContent = "Draw...";
            console.log('Draw...')
        }
});