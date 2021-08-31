let randnum = Math.floor(Math.random()*100)+1;

const guesses = document.querySelector('.guesses');
const lastResult = document.querySelector('.lastResult')
const guessSubmit = document.querySelector('.guessSubmit');
const guessField = document.querySelector('.guessField');

let guessCount = 1;
let resetButton = document.querySelector('.Reset');

function checkGuess() {
    let userGuess = Number(guessField.value);
    if(guessCount===1){
        guesses.textContent = ' Previous guess : ';
    }
    guesses.textContent += userGuess + ' ';

    if(userGuess===randnum){
        lastResult.style.cssText = '  background-color: #c2f3ce ; color :#1C592A;';
        lastResult.textContent = ' Your Guess is Correct !!  You Took '+ guessCount +' turns.';
        setGameOver();
    }
    else if(guessCount===10){
        lastResult.textContent=' Game over!! The Number was : '+ randnum ;
        lastResult.style.cssText = 'background-color: #FEEFEF ; color :#DA1414 ;';   
        setGameOver();
    }
    else{
        if (userGuess<randnum) {
            lastResult.style.cssText = 'background-color: #FEEFEF ; color :#DA1414 ;'; 
            lastResult.textContent = 'Your Guess Was Lower !!';
        }
        else if(userGuess>randnum){
            lastResult.style.cssText = 'background-color: #FEEFEF ; color :#DA1414 ;'; 
            lastResult.textContent=' Your Guess Was Higher !!';
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
    lastResult.style.backgroundColor = 'white';
    randomNumber = Math.floor(Math.random() * 100) + 1;
  }