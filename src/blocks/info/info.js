import Swiper from 'swiper/bundle';
import SwiperCore, { Navigation, Pagination } from 'swiper/core';
SwiperCore.use([Navigation, Pagination]);

(() => {
    $('.info__tabs-item').on('click', function (e) {
        e.preventDefault();

        $('.info__tabs-item').removeClass('info__tabs-item_active');
        $(this).addClass('info__tabs-item_active');

        $('.info__tabscontent').removeClass('info__tabscontent_active');
        $($(this).attr('href')).addClass('info__tabscontent_active');

    })
    new SwiperCore('.swiper-container', {
        navigation: {
            prevEl: '.swiper-button-prev',
            nextEl: '.swiper-button-next'
        },

        effect: 'fade',
        fadeEffect: {
            crossFade: true
        }
    });

})();

