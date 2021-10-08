const toggle = document.getElementById('input-toggle')

toggle.addEventListener('click',check);

function check() {
    if (toggle.checked) {
        document.body.classList.add('darkmode');
    }
    else{
        document.body.classList.remove('darkmode');
    }
}
