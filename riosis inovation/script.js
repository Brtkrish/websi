let currentSlide = 0;
const slider = document.getElementById('slider');
const totalSlides = document.querySelectorAll('.slide').length;

function changeSlide(direction) {
    currentSlide = (currentSlide + direction + totalSlides) % totalSlides;
    slider.style.transform = `translateX(-${currentSlide * 100}%)`;
}

function autoSlide() {
    changeSlide(1);
}

setInterval(autoSlide, 3000);

document.querySelector('.prev').addEventListener('click', () => changeSlide(-1));
document.querySelector('.next').addEventListener('click', () => changeSlide(1));


