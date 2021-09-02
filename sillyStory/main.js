const randomize = document.querySelector('.randomize');
const customName = document.querySelector('.form-control');
const story  = document.querySelector('.story');

let basicStory = 'It was 94 fahrenheit outside, so :insertx: went for a walk. When they got to :inserty:, they stared in horror for a few moments, then :insertz:. Bob saw the whole thing, but was not surprised — :insertx: weighs 300 pounds, and it was a hot day.Willy the Goblin'

let insertX = [ 'Willy the Goblin' , 'Big Daddy' ,'FatherChristmas'];

let insertY = ['the soup kitchen','Disneyland','the White House'];

let insertZ = ['spontaneously combusted','melted into a puddle on the sidewalk','turned into a slug and crawled away'];

function randomValue(array) {
    const random = Math.floor(Math.random()*array.length);
    return array[random];
}

function result(){
    let newStory = basicStory;
    let itemx = randomValue(insertX);
    let itemy = randomValue(insertY);
    let itemz = randomValue(insertZ);   

    newStory = newStory.replace(':insertx:',itemx);
    newStory = newStory.replace(':insertx:',itemx);
    newStory = newStory.replace(':inserty:',itemy);
    newStory = newStory.replace(':insertz:',itemz);

    if (customName.value !== '') {
        const name = customName.value;
        newStory = newStory.replace('Bob',name);
    }
    if(document.getElementById('UK').checked){
        const weight = Math.round(300/2.205)+'kg';
        const temperature = Math.round((94-32)*(5/9)) + 'centigrade';

        newStory = newStory.replace('94 fahrenheit',temperature);
        newStory = newStory.replace('300 pound',weight);
    }

    story.textContent = newStory;
    story.style.visibility = 'visible';
}

randomize.addEventListener('click',result);
