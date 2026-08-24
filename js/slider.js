document.addEventListener("DOMContentLoaded", function () {

    const slider = document.querySelector(".movie-container");
    const cards = document.querySelectorAll(".movie-card");

    const prevBtn = document.getElementById("prevBtn");
    const nextBtn = document.getElementById("nextBtn");

    let currentIndex = 0;
    let autoSlide;


    function getVisibleCards() {

        if (window.innerWidth <= 500) {
            return 1;
        }

        if (window.innerWidth <= 700) {
            return 2;
        }

        if (window.innerWidth <= 1000) {
            return 3;
        }

        return 4;
    }


    function moveSlider() {

        const visibleCards = getVisibleCards();

        const maxIndex = cards.length - visibleCards;

        if (currentIndex > maxIndex) {
            currentIndex = 0;
        }

        if (currentIndex < 0) {
            currentIndex = maxIndex;
        }

        const cardWidth = cards[0].offsetWidth;

        const gap = parseFloat(
            getComputedStyle(slider).gap
        );

        const moveAmount = cardWidth + gap;

        slider.style.transform =
            `translateX(-${currentIndex * moveAmount}px)`;
    }


    nextBtn.addEventListener("click", function () {

        currentIndex++;

        moveSlider();

        resetAutoSlide();
    });


    prevBtn.addEventListener("click", function () {

        currentIndex--;

        moveSlider();

        resetAutoSlide();
    });


    function startAutoSlide() {

        autoSlide = setInterval(function () {

            currentIndex++;

            moveSlider();

        }, 4000);
    }


    function resetAutoSlide() {

        clearInterval(autoSlide);

        startAutoSlide();
    }


    window.addEventListener("resize", function () {

        moveSlider();

    });


    moveSlider();

    startAutoSlide();

});