let slideshow = document.querySelector('#slideshow');
let images = [
    './src/images/books01.jpg',
    './src/images/books02.jpg',
    './src/images/books03.jpg',
    './src/images/books05.jpg',
    './src/images/books06.jpg',
    './src/images/books07.jpg',];
let slideIndex = 1;

setInterval(() => {
    fadeOut(slideshow);

    setTimeout(() => {
        slideshow.src = images[slideIndex++];
        if (slideIndex >= images.length)
            slideIndex = 0;
    }, 525);

    setTimeout(() => {
        fadeIn(slideshow);
    }, 525 + 200);
}, 5000);

function fadeOut(el) {
    el.style.animation = 'fadeOut 0.5s ease-in forwards';
}

function fadeIn(el) {
    el.style.animation = 'fadeIn 0.5s ease-in forwards';
}