'use strict';

const slider = $('.slider ul');
const slides = slider.children();
let currentSlide = 0;
slides.hide();

function show_slide(index) {
    slides.eq(index).fadeIn(1000);
    slides.eq(currentSlide).fadeOut(1000);
    currentSlide = index;
}

function next_slide() {
    const nextSlide = (currentSlide + 1) % slides.length;

    slides.eq(nextSlide).css({ opacity: 0, left: 422}).show();

    slides.eq(currentSlide).animate({ left: `-${422}px`, opacity: 0 }, 1000);

    slides.eq(nextSlide).animate({ left: '0', opacity: 1 }, 1000, () => {
        slides.eq(currentSlide).css({ left: '0' }).hide();
        currentSlide = nextSlide;
    });
}

setInterval(next_slide, 3000);