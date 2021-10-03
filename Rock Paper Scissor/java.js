let userScore = 0;let computerScore = 0;
const lastResult = document.querySelector('.lastResult');
const btn = document.querySelector('.container-sm');
const score = document.querySelector('.score-area');
const choices = ['rock','paper','scissors'];
const overlay =document.querySelector('.overlay');
const woverlay =document.querySelector('.won');
const loverlay = document.querySelector('.loss');
lastResult.classList.add('normal');

/* Function is excute when the rock,paper or scissor containers are clicked */

function result(e) {
    let userAns = e;
    let compAns = choices[Math.floor(Math.random()*choices.length)];
    console.log(userAns);
    console.log(compAns);
    console.log('');

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
    
    score.innerHTML = `<span class="scoreboard">your score : ${userScore}</span><span class="scoreboard">computer score : ${computerScore}</span>`;

    console.log(userAns); // displays user answer in console
    console.log(compAns); // displays computer answer in console
    console.log('');

    /* opens modal depending on whether you win or lose */

    if (userScore === 5 || computerScore === 5 ) {
        overlay.style.display = 'block'
        if (userScore!==5) {
            loverlay.style.display='block';
        }
        else{
            woverlay.style.display='block';
        }
    }

}

/* Verifies the rules of rock paper scissor */

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

/* reset the game fucntion  */

function reset(para){
    
    userScore=0;computerScore=0;
        
    lastResult.style.cssText='background-color:none'
    lastResult.innerHTML = 'Choose your move , Its best of 5 !!';

    if (para ==='play') {
        overlay.style.display='none';   
    }else if(para==='try'){
        overlay.style.display='none';
    }
}

