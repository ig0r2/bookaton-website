let slideshow = document.querySelector('#slideshow');
let images = [
    './src/images/galerija/DSC00136-thumb.jpg',
    './src/images/galerija/DSC00194-thumb.jpg',
    './src/images/galerija/DSC00210-thumb.jpg',
    './src/images/galerija/DSC00141-thumb.jpg',
    './src/images/galerija/DSC00164-thumb.jpg',
    './src/images/galerija/DSC00262-thumb.jpg',];
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