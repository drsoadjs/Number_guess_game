'use strict';

//document.querySelector('.message').textContent = "Dammy is good boy"
//document.querySelector('.guess').textContent = 0

let snum = Math.trunc(Math.random() * 20 + 1)
console.log(snum);
let score = 20
let highScore = 0;
let guess = '';
let scoreUI = document.querySelector('.score');
let message = document.querySelector('.message');
let number = document.querySelector('.number');
let guessUI = document.querySelector('.guess');
let body = document.querySelector('body');
let check = document.querySelector('.check');

const again = function () {
    snum = Math.trunc(Math.random() * 20 + 1)
    score = 20;
    scoreUI.textContent = score;
    message.textContent = 'start guessing';
    number.textContent = '?';
    guessUI.value = '';
    body.style.backgroundColor = 'black'
    check.style.display = 'block';


}

check.addEventListener('click', function () {
    guess = Number(guessUI.value)

    if (!guess) {
        message.textContent = 'No Number!'
    } else if (guess === snum) {
        message.textContent = 'YOU WiN!'
        document.querySelector('.score').textContent = score;
        body.style.backgroundColor = '#60b347'
        check.style.display = 'none';
        number.textContent = snum;
        guessUI.value = '';
        if (score > highScore) {
            highScore = score
            //console.log(highScore)
            document.querySelector('.highscore').textContent = highScore;
            //document.querySelector('label-highscore').textContent = ' NEW HIGH SCORE'


        }
    } else if (guess !== snum) {
        if (score > 1) {
            score = score - 1
            message.textContent = guess > snum ? 'Too High!' : 'Too Low!'
            document.querySelector('.score').textContent = score;
            guessUI.value = '';
        } else {
            message.textContent = 'YOU LOST THE GAME'
            check.style.display = 'none';
            document.querySelector('.score').textContent = '0'
        }
    }

})

document.querySelector('.again').addEventListener('click', again)