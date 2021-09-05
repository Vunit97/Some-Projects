'use strict';

/*
console.log(document.querySelector('.message').textContent);
//Winning phrase
document.querySelector('.message').textContent = 'Correct Number! 🎉';

//Guessing Number
document.querySelector('.number').textContent = 13;
//Score Points
document.querySelector('.score').textContent = 10;
//Input Field
document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value);

*/

//Secret Number
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

//Event Listener
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  //When there is no input
  if (!guess) {
    displayMessage('No Number! ⛔️');
  }
  //When player wins
  else if (guess === secretNumber) {
    displayMessage('Correct Number! 🎉');
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
    //When guess is wrong
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? 'Too high! 📈' : 'Too low! 📉');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('You lose the game 😢');
      document.querySelector('.score').textContent = 0;
    }
  }

  document.querySelector('.again').addEventListener('click', function () {
    secretNumber = Math.trunc(Math.random() * 20) + 1;
    score = 20;

    //Reset
    document.querySelector('.score').textContent = score;
    displayMessage('Start guessing...');
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value = '';

    //Reset style
    document.querySelector('.number').style.width = '15rem';
    document.querySelector('body').style.backgroundColor = '#222';
  });
});
