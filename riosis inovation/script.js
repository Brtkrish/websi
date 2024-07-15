// Existing slider code for achievements
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

// New product slider code
let currentProductSlide = 0;
const productSlider = document.getElementById('product-slider');
const productSlides = document.querySelectorAll('.product-slide');
const totalProductSlides = productSlides.length;

function showProductSlide(index) {
    if (index >= totalProductSlides) {
        currentProductSlide = 0;
    } else if (index < 0) {
        currentProductSlide = totalProductSlides - 1;
    } else {
        currentProductSlide = index;
    }

    const offset = -currentProductSlide * 100;
    productSlider.style.transform = `translateY(${offset}%)`;
}

// Auto-slide every 5 seconds
setInterval(() => {
    showProductSlide(currentProductSlide + 1);
}, 5000);

// Show the first product slide initially
showProductSlide(currentProductSlide);
