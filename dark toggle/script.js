const darkmode = window.matchMedia('(prefers-color-scheme: dark)').matches;
const lightmode = window.matchMedia('(prefers-color-scheme: light)').matches;
const toggle = document.getElementById('input-toggle');

toggle.addEventListener('click',check);

function check() {
    if (darkmode===true) {
        if (toggle.checked) {
            document.body.classList.add('lightmode');
        }
        else{
            document.body.classList.remove('lightmode');
        }
    }
    else if (lightmode===true) {
        if (toggle.checked) {
            document.body.classList.add('darkmode');
        }
        else{
            document.body.classList.remove('darkmode');
        }
    }
}
