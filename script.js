document.addEventListener('DOMContentLoaded', () => {
    const track = document.querySelector('.carousel-track');
    const slides = Array.from(track.children);
    const nextButton = document.querySelector('.next-btn');
    const prevButton = document.querySelector('.prev-btn');
    const slideWidth = slides[0].getBoundingClientRect().width;

    // Arrange the slides next to one another
    slides.forEach((slide, index) => {
        slide.style.left = slideWidth * index + 'px';
    });

    const moveToSlide = (track, currentSlide, targetSlideIndex) => {
        const targetSlide = slides[targetSlideIndex];
        track.style.transform = 'translateX(-' + targetSlide.style.left + ')';
        currentSlide.classList.remove('current-slide');
        targetSlide.classList.add('current-slide');
    };

    nextButton.addEventListener('click', e => {
        const currentSlide = track.querySelector('.current-slide');
        let nextIndex = slides.indexOf(currentSlide) + 3;
        if (nextIndex >= slides.length) nextIndex = 0;
        moveToSlide(track, currentSlide, nextIndex);
    });

    prevButton.addEventListener('click', e => {
        const currentSlide = track.querySelector('.current-slide');
        let prevIndex = slides.indexOf(currentSlide) - 3;
        if (prevIndex < 0) prevIndex = slides.length - 3;
        moveToSlide(track, currentSlide, prevIndex);
    });

    slides[0].classList.add('current-slide');
});

