let userScore = 0;let computerScore = 0;
const lastResult = document.querySelector('.lastResult');
const btn = document.querySelector('.container-sm');
const score = document.querySelector('.score-area');
const choices = ['rock','paper','scissors'];
const overlay =document.querySelector('.overlay');
const close = document.querySelector('span').className('close')[0];
lastResult.classList.add('normal');

close.addEventListener('click',reset);

function result(e) {
    let userAns = e;
    let compAns = choices[Math.floor(Math.random()*choices.length)];

    let winner = gameRule(userAns,compAns);

    if (winner==='User') {
        lastResult.style.cssText = 'background-color: #c2f3ce ; color :#1C592A';
        lastResult.innerHTML = winner + ' wins !!';
    }
    else if (winner==='Computer') {
        lastResult.style.cssText = 'background-color: #FEEFEF ; color :#DA1414 ;';
        lastResult.innerHTML = winner + ' wins !!';
    }
    else {
        lastResult.style.cssText = 'background-color: #C3E8F9;color:  #004175;';
        lastResult.innerHTML = winner ;
    }
    console.log(userAns);
    console.log(compAns);
    console.log('');

    score.innerHTML = `<span class="scoreboard">your score : ${userScore}</span><span class="scoreboard">computer score : ${computerScore}</span>`
    if (userScore===5) {
        overlay.style.display='block';
    }
    else if(computerScore===5){
        reset();
    }
}

function gameRule(user,computer) {
    if (user===computer) {
        return 'Its a Tie!!';
    }
    else if (user==='rock') 
    {
        if (computer==='paper') {
            userScore++;
            return 'User';
        }
        else if(computer==='scissors'){
            computerScore++;
            return 'Computer';
        }
    }
    else if(user==='paper')
    {
        if (computer==='rock') {
            computerScore++;
            return 'Computer';
        }
        else if(computer==='scissors'){
            userScore++;
            return 'User';
        }
    }
    else if (user==='scissors') {
        if (computer==='rock') {
            computerScore++;
            return 'Computer';
        }
        else if (computer==='paper') {
            userScore++;
            return 'User';
        }
    }
}

function reset(){
    userScore = 0;
    computerScore = 0;
    lastResult.style.cssText='background-color:none'
    lastResult.innerHTML = 'Choose your move , Its best of 5 !!';
    overlay.style.cssText = '';
}

