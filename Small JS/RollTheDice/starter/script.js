'use strict';

//Selecting elements
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
const score0El = document.getElementById('score--0');
const score1El = document.getElementById('score--1');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');
const dice1El = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

let score, currentScore, activePlayer, playing;

const init = function () {
  score = [0, 0];
  currentScore = 0;
  activePlayer = 0;
  playing = true;

  score0El.textContent = 0;
  score1El.textContent = 0;
  current0El.textContent = 0;
  current1El.textContent = 0;

  dice1El.classList.add('hidden');
  player0El.classList.remove('player--winner');
  player1El.classList.remove('player--winner');
  player0El.classList.add('player--active');
  player1El.classList.remove('player--active');
  document.querySelector('.h1--bot').classList.remove('winning-style');
  document.querySelector('.h1--bot').textContent =
    'The first Player who reach 100 points wins!';
};
init();

const switchPlayer = function () {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  currentScore = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  player0El.classList.toggle('player--active');
  player1El.classList.toggle('player--active');
};

btnRoll.addEventListener('click', function () {
  if (playing) {
    //1. Generate a random dice-roll
    const dice = Math.trunc(Math.random() * 6) + 1;

    //2. Display dice
    dice1El.classList.remove('hidden');
    dice1El.src = `dice-${dice}.png`;

    //3. Cheeck for rolled 1: if true,
    if (dice != 1) {
      //Add dicee to current score
      currentScore += dice;
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
    } else {
      //switch to next player
      switchPlayer();
    }
  }
});

btnHold.addEventListener('click', function () {
  if (playing) {
    //1. Add Current score to active players score
    score[activePlayer] += currentScore;
    //scores[1] = scores[1] + currentscore;
    document.getElementById(`score--${activePlayer}`).textContent =
      score[activePlayer];

    //2. Check if players score is >= 100;
    if (score[activePlayer] >= 100) {
      //finish game
      playing = false;

      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove('player--active');
      document.querySelector('.h1--bot').classList.add('winning-style');
      document.querySelector(
        '.h1--bot'
      ).textContent = `Player ${activePlayer} won! Gratz 🎉`;
      dice1El.classList.add('hidden');
    } else {
      //3. Switch to next player
      switchPlayer();
    }
  }
});

btnNew.addEventListener('click', init);
