let slideshow = document.querySelector('#slideshow');
let images = [
    'https://cdn.discordapp.com/attachments/750356632403181569/1071855854132928602/IMG-20230205-WA0024.jpg',
    'https://cdn.discordapp.com/attachments/750356632403181569/1074305108147437681/1676204681277.jpg'];
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
}, 4000);

function fadeOut(el) {
    el.style.animation = 'fadeOut 0.5s ease-in forwards';
}

function fadeIn(el) {
    el.style.animation = 'fadeIn 0.5s ease-in forwards';
}