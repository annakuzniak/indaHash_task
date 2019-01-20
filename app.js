
let mySwiper = new Swiper('.swiper-container', {
    direction: 'horizontal',
    loop: true,

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
})

function slide(i){
    mySwiper.slideTo(i, 1)
};

for (let i = 1; i <= 10; i++) {
    document.querySelector('#person_' +i).addEventListener('click', slide.bind(this, i));
};