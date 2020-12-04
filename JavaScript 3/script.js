'use strict';

const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');

const diceEL = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');



// 시작 세팅
score0El.textContent = 0;
score1El.textContent = 0;
diceEL.classList.add('hidden');

let currentScore = 0;

// 주사위 굴리기
btnRoll.addEventListener('click', function(){

    const dice = Math.trunc(Math.random() * 6) + 1;
    console.log(dice);

    diceEL.classList.remove('hidden');
    diceEL.src = `dice-${dice}.png`;

    if(dice !==1){
        currentScore += dice;
        current0El.textContent =currentScore;
    } else {

    }

});