let randnum = Math.floor(Math.random()*100)+1;
const resultp =document.querySelector('.resultParas');
const guesses = document.querySelector('.guesses');
const lastResult = document.querySelector('.lastResult')
const guessSubmit = document.querySelector('.guessSubmit');
const guessField = document.querySelector('.guessField');

let guessCount = 1;
let resetButton = document.querySelector('.Reset');

function checkGuess() {
    let userGuess = Number(guessField.value);
    resultp.style.display='block';
    if(guessCount===1){
        guesses.textContent = ' Previous guess : ';
    }
    guesses.textContent += userGuess + ' ';

    if(userGuess===randnum){
        
        lastResult.classList.remove('loss');
        lastResult.classList.add('win');
        lastResult.textContent = ' Your Guess is Correct !!  You Took '+ guessCount +' turns.';
        setGameOver();
    }
    else if(guessCount===10){
        
        lastResult.textContent=' Game over!! The Number was : '+ randnum ;
        lastResult.classList.add('loss');
        setGameOver();
    }
    else{
        if (userGuess<randnum) {
            
            lastResult.textContent = 'Your Guess Was Lower !!';
            lastResult.classList.add('loss');
        }
        else if(userGuess>randnum){
            
            lastResult.textContent=' Your Guess Was Higher !!';
            lastResult.classList.add('loss');
        }
    }
    guessCount++;
    guessField.value='';
    guessField.focus();
}
guessSubmit.addEventListener('click',checkGuess);

function setGameOver() {
    guessField.disabled = true;
    guessSubmit.disabled = true;
    resetButton.style.display = 'block';
    resetButton.addEventListener('click', resetGame);
  }

  function resetGame() {
    guessCount = 1;
    const resetParas = document.querySelectorAll('.resultParas p');
    for(let i = 0 ; i < resetParas.length ; i++) {
      resetParas[i].textContent = '';
    }

    resetButton.style.display = 'none';
    guessField.disabled = false;
    guessSubmit.disabled = false;
    guessField.value = '';
    guessField.focus();
    resultp.style.display='non';
    randomNumber = Math.floor(Math.random() * 100) + 1;
  }