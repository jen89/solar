import Swiper from 'swiper/bundle';
import SwiperCore, { Navigation, Pagination } from 'swiper/core';
SwiperCore.use([Navigation, Pagination]);

(() => {
    new SwiperCore('.swiper-container', {
        navigation: {
            prevEl: '.swiper-button-prev',
            nextEl: '.swiper-button-next'
        },
        // breakpoints: {
        //     320: {

        //     }
        // },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
            // dynamicBullets: true
        },

        effect: 'fade',
        fadeEffect: {
            crossFade: true
        }
    });
})();
