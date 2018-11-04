// Cube

// DOM Elements
let buttons = document.querySelectorAll('.cube-btn');
let cube = document.querySelector('.cube');
let showFront = document.querySelector('.show-front');
let showBack = document.querySelector('.show-back');
let showRight = document.querySelector('.show-right');
let showLeft = document.querySelector('.show-left');
let showTop = document.querySelector('.show-top');
let showBottom = document.querySelector('.show-bottom');

// Event Listeners
buttons.forEach(button => {
    button.addEventListener('click', changeCube);
});

// Cube manipulation
function changeCube(e) {
    // console.log(e.target.classList);

    if(e.target.classList.contains('show-front')) {
        cube.classList = 'cube';
        cube.classList.toggle('show-front');
    } else if(e.target.classList.contains('show-back')) {
        cube.classList = 'cube';
        cube.classList.toggle('show-back');
    } else if(e.target.classList.contains('show-left')) {
        cube.classList = 'cube';
        cube.classList.toggle('show-left');
    } else if(e.target.classList.contains('show-right')) {
        cube.classList = 'cube';
        cube.classList.toggle('show-right');
    } else if(e.target.classList.contains('show-top')) {
        cube.classList = 'cube';
        cube.classList.toggle('show-top');
    } else if(e.target.classList.contains('show-bottom')) {
        cube.classList = 'cube';
        cube.classList.toggle('show-bottom');
    }
}