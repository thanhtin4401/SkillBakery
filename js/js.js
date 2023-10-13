window.onload = () => {
    var swiper = new Swiper(".mySwiper", {
        slidesPerView: 3,
        spaceBetween: 30,
        // centeredSlides: true,
        // loop: true,
    });
    var slides = document.querySelectorAll('.swiper-slide');

    slides.forEach(function (slide) {
        slide.addEventListener('mouseover', function () {
            var imgSrc = this.querySelector('img').getAttribute('src');
            var cardOverlay = document.querySelector('.card-img-overlay.section1');
            cardOverlay.style.backgroundImage = 'url(' + imgSrc + ')';
            slides.forEach(function (s) {
                if (s !== slide) {
                    s.classList.add('blur');
                }
            });
        });

        slide.addEventListener('mouseout', function () {
            // Remove 'blur' class from all slides
            slides.forEach(function (s) {
                s.classList.remove('blur');
            });
        });
    });
}