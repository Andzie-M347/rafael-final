var swiper = new Swiper(".mySwiper", {
    slidesPerView: 5,
    spaceBetween: 30,
    freeMode: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },

    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});

var swiper = new Swiper(".testimonials", {
    slidesPerView: 1,
    spaceBetween: 30,
    freeMode: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },

});

// Smooth Scroll
const toTop = document.getElementById('to-top')
top.addEventListener('scroll', {
    top: 0,
    left: 0,
    behavior: 'smooth'
})

