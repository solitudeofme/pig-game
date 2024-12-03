'use strict';

//========== status =========

let newGameBtn = document.querySelector('#new-game');
let rollDiceBtn = document.querySelector('#roll-dice');
let holdBtn = document.querySelector('#hold');
let dice = document.querySelector('.dice');
let score0 = document.querySelector('#score-0');
let score1 = document.querySelector('#score-1');
let currentScore0 = document.querySelector('#current-score-0');
let currentScore1 = document.querySelector('#current-score-1');
let player0 = document.querySelector('.player-0');
let player1 = document.querySelector('.player-1');

//========== functions =======
let activePlayer = 0;
const switchPlayer = () => {
  currentScore = 0;
  document.getElementById(`current-score-${activePlayer}`).textContent = '0';
  activePlayer = !activePlayer ? 1 : 0;
  player0.classList.toggle('player-disable');
  player1.classList.toggle('player-disable');
};

let disablingBtns = () => {
  rollDiceBtn.disabled = true;
  holdBtn.disabled = true;
  dice.classList.add('hidden');
};

let whoIsWinner = () => {
  if (document.getElementById(`score-${activePlayer}`).textContent >= 100) {
    document
      .querySelector(`.player-${activePlayer}`)
      .classList.add('player--winner');
    document
      .querySelector(`.player-${Number(!activePlayer)}`)
      .classList.add('player--loser');
    disablingBtns();
  }
};

//========== Events =========
let currentScore = 0;

rollDiceBtn.addEventListener('click', () => {
  let diceNum = Math.trunc(Math.random() * 6) + 1;
  dice.classList.remove('hidden');
  dice.src = `images/dice-${diceNum}.png`;
  if (diceNum === 1) {
    switchPlayer();
  } else {
    currentScore += diceNum;
    document.getElementById(`current-score-${activePlayer}`).textContent =
      currentScore;
  }
});

holdBtn.addEventListener('click', () => {
  document.getElementById(`score-${activePlayer}`).textContent =
    Number(document.getElementById(`score-${activePlayer}`).textContent) +
    currentScore;
  whoIsWinner();
  switchPlayer();
});

newGameBtn.addEventListener('click', () => {
  activePlayer = 0;
  player0.classList.remove('player-disable');
  player1.classList.add('player-disable');
  currentScore0.textContent = '0';
  currentScore1.textContent = '0';
  score0.textContent = '0';
  score1.textContent = '0';
  rollDiceBtn.disabled = false;
  holdBtn.disabled = false;
  dice.classList.add('hidden');
  player0.classList.remove('player--winner');
  player0.classList.remove('player--loser');
  player1.classList.remove('player--winner');
  player1.classList.remove('player--loser');
});
