const btn = document.querySelector('button');
const jokeText = document.querySelector('p');

btn.addEventListener('click',createJoke);

async function createJoke() {
     const jokeData = await fetch('https://icanhazdadjoke.com/',{
        headers:{
            "Accept": "application/json"
        }
    });
    const jokeObj = await jokeData.json();
    jokeText.textContent = jokeObj.joke;
}