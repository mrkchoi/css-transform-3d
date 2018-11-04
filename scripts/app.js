// Set variables
let container = document.querySelector('.container');
let inner = document.querySelector('.perspective');

// Set event listeners
// container.addEventListener('mousein', mouseIn);
// container.addEventListener('mouseout', mouseOut);
container.addEventListener('mousemove', mouseMove);

// Set functions
let counter = 0;
let updateRate = 10;
let isTimeToUpdate = function() {
    return counter++ % updateRate === 0;
} 

function mouseMove(e) {
    if(isTimeToUpdate()) {
        console.log(update(event));
    }
}