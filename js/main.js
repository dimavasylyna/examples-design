const swiper = new Swiper('.swiper', {
    // Optional parameters
    loop: true,
    autoHeight: true,
    speed: 700,
    autoplay: {
        delay: 3000,
        pauseOnMouseEnter: true,
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        type: 'bullets',
        bulletActiveClass: 'swiper-pagination-item-active',
        bulletClass: 'swiper-pagination-item',
        renderBullet: function (index, className) {
            return '<span class="'+className+'"></span>';
        }
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});


$(".tabs").tabs({ active: 0 });


