'use strict';

//========== status =========

let newGameBtn = document.querySelector('#new-game');
let rollDiceBtn = document.querySelector('#roll-dice');
let holdBtn = document.querySelector('#hold');
let dice = document.querySelector('.dice');
let score1 = document.querySelector('#score-1');
let score2 = document.querySelector('#score-2');
let currentScore1 = document.querySelector('#current-score-1');
let currentScore2 = document.querySelector('#current-score-2');
let player1 = document.querySelector('.player-1');
let player2 = document.querySelector('.player-2');

//========== functions =======
let c = 1;

const switchPlayer = () => {
  if (c % 2 === 1) {
    player1.classList.add('player-disable');
    player2.classList.remove('player-disable');
  } else {
    player2.classList.add('player-disable');
    player1.classList.remove('player-disable');
  }
  c++;
};

let disablingBtns = () => {
  rollDiceBtn.disabled = true;
  holdBtn.disabled = true;
  dice.classList.add('hidden');
};

let whoIsWinner = () => {
  console.log(score1.textContent);
  if (Number(score1.textContent) >= 100) {
    player1.classList.add('player--winner');
    player2.classList.add('player--loser');
    disablingBtns();
  } else if (Number(score2.textContent) >= 100) {
    player2.classList.add('player--winner');
    player1.classList.add('player--loser');
    disablingBtns();
  }
};

//========== Events =========
let diceNum = 0;

rollDiceBtn.addEventListener('click', () => {
  diceNum = Math.trunc(Math.random() * 6) + 1;
  dice.classList.remove('hidden');
  dice.src = `images/dice-${diceNum}.png`;
  if (diceNum === 1) {
    if (c % 2 === 1) {
      currentScore1.textContent = '0';
    } else {
      currentScore2.textContent = '0';
    }
    switchPlayer();
  } else {
    if (c % 2 === 1) {
      currentScore1.textContent = Number(currentScore1.textContent) + diceNum;
    } else {
      currentScore2.textContent = Number(currentScore2.textContent) + diceNum;
    }
  }
});

holdBtn.addEventListener('click', () => {
  if (c % 2 === 1) {
    score1.textContent =
      Number(score1.textContent) + Number(currentScore1.textContent);
    currentScore1.textContent = '0';
  } else {
    score2.textContent =
      Number(score2.textContent) + Number(currentScore2.textContent);
    currentScore2.textContent = '0';
  }
  whoIsWinner();
  switchPlayer();
});

newGameBtn.addEventListener('click', () => {
  currentScore1.textContent = '0';
  currentScore2.textContent = '0';
  score1.textContent = '0';
  score2.textContent = '0';
  dice.classList.add('hidden');
  player1.classList.remove('player--winner');
  player1.classList.remove('player--loser');
  player2.classList.remove('player--winner');
  player2.classList.remove('player--loser');
});
