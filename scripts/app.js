// Cube

// DOM Elements
let buttons = document.querySelectorAll('.cube-btn');
let cube = document.querySelector('.cube');

// Event Listeners
buttons.forEach(button => {
    button.addEventListener('click', changeCube);
});

// Cube manipulation
function changeCube(e) {
    // console.log(e.target.classList);
    cube.classList = 'cube';
    if(e.target.classList.contains('show-front')) {
        cube.classList.toggle('show-front');
    } else if(e.target.classList.contains('show-back')) {
        cube.classList.toggle('show-back');
    } else if(e.target.classList.contains('show-left')) {
        cube.classList.toggle('show-left');
    } else if(e.target.classList.contains('show-right')) {
        cube.classList.toggle('show-right');
    } else if(e.target.classList.contains('show-top')) {
        cube.classList.toggle('show-top');
    } else if(e.target.classList.contains('show-bottom')) {
        cube.classList.toggle('show-bottom');
    }
}



// Box

// DOM Elements
let boxBtns = document.querySelectorAll('.box-btn');
let box = document.querySelector('.box');
let showFront = document.querySelector('.box-btn.show-front');
let showBack = document.querySelector('.box-btn.show-back');
let showRight = document.querySelector('.box-btn.show-right');
let showLeft = document.querySelector('.box-btn.show-left');
let showTop = document.querySelector('.box-btn.show-top');
let showBottom = document.querySelector('.box-btn.show-bottom');

// Event Listeners
boxBtns.forEach(button => {
    button.addEventListener('click', changeBox);
});

// Cube manipulation
function changeBox(e) {
    // console.log(e.target.classList);
    box.classList = 'box';
    if(e.target.classList.contains('show-front')) {
        box.classList.toggle('show-front');
    } else if(e.target.classList.contains('show-back')) {
        box.classList.toggle('show-back');
    } else if(e.target.classList.contains('show-left')) {
        box.classList.toggle('show-left');
    } else if(e.target.classList.contains('show-right')) {
        box.classList.toggle('show-right');
    } else if(e.target.classList.contains('show-top')) {
        box.classList.toggle('show-top');
    } else if(e.target.classList.contains('show-bottom')) {
        box.classList.toggle('show-bottom');
    }
}