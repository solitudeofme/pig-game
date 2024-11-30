'use strict';

//========== status =========
let newGameBtn = document.querySelector('#new-game');
let rollDiceBtn = document.querySelector('#roll-dice');
let holdBtn = document.querySelector('#hold');
let positionedBtn = document.querySelectorAll('.positioned-btn');
let dice = document.querySelector('.dice');
let score = document.querySelector('.score').textContent;
let currentScore = document.querySelector('.current-score').textContent;
let diceNum = 0;
let sum;
rollDiceBtn.addEventListener('click', () => {
  diceNum = Math.trunc(Math.random() * 6) + 1;
  dice.classList.remove('hidden');
  dice.src = `images/dice-${diceNum}.png`;
});
