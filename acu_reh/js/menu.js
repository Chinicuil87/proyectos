const hamburger = document.querySelector('.hamburger'),
        menu = document.querySelector('.menu');

hamburger.addEventListener('click',() => {
    menu.classList.toggle('spread');
})

window.addEventListener('click', e => {
    if(menu.classList.contains('spread') && e.target != menu && e.target != hamburger){
        menu.classList.toggle('spread');
    }
})