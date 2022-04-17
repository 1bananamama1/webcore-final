import '../scss/style.scss';

const mainTextBlock = document.querySelector('.main__text-block');
const mainButton = document.querySelector('.main__button');
const buttonBrands = document.querySelector('.brands-slider__button--expand');
const buttonRepair = document.querySelector('.repair-slider__button--expand');
const wrapperBrands = document.querySelector('.brands-slider__wrapper');
const wrapperRepair = document.querySelector('.repair-slider__wrapper');

mainButton.addEventListener('click', function(evt) {
    evt.preventDefault;
    mainTextBlock.classList.toggle('main__text-block--open');
    if(mainButton.textContent === 'Читать далее') {
        mainButton.textContent = 'Скрыть';
    } else {mainButton.textContent = 'Читать далее';}
});

buttonBrands.addEventListener('click', function(evt) {
    evt.preventDefault;
    wrapperBrands.classList.toggle('brands-slider__wrapper--open');
    if(buttonBrands.textContent === 'Показать все') {
        buttonBrands.textContent = 'Скрыть';
    } else {buttonBrands.textContent = 'Показать все';}
});

buttonRepair.addEventListener('click', function(evt) {
    evt.preventDefault;
    wrapperRepair.classList.toggle('repair-slider__wrapper--open');
    if(buttonRepair.textContent === 'Показать все') {
        buttonRepair.textContent = 'Скрыть';
    } else {buttonRepair.textContent = 'Показать все';}
});


let brandsSwiper;
let repairSwiper;
let pricesSwiper;

const brandsSlider = document.querySelector('.brands-slider');
 function brandsSliderInit () {
     if (window.innerWidth < 768) {
         brandsSlider.classList.add('swiper');
         wrapperBrands.classList.add('swiper-wrapper');
         brandsSwiper = new Swiper (brandsSlider, {
             loop: true,
             spaceBetween: 16,
             simulateTouch: true,
             pagination: {
                el: '.swiper-pagination',
                clickable: true,
             },
             slidesPerView: 'auto',
             slideClass: 'brands-slider__slide',
         });
     } if (window.innerWidth >= 768) {
         brandsSlider.classList.remove('swiper');
         wrapperBrands.classList.remove('swiper-wrapper');
         if (brandsSlider.classList.contains('swiper-initialized')) {
             brandsSwiper.destroy();
         }
     }
 };

brandsSliderInit();

const repairSlider = document.querySelector('.repair-slider');
 function repairSliderInit () {
     if (window.innerWidth < 768) {
        repairSlider.classList.add('swiper');
         wrapperRepair.classList.add('swiper-wrapper');
         repairSwiper = new Swiper (repairSlider, {
             loop: true,
             spaceBetween: 16,
             simulateTouch: true,
             pagination: {
                el: '.swiper-pagination',
                clickable: true,
             },
             slidesPerView: 'auto',
             slideClass: 'repair-slider__slide',
         });
     } if (window.innerWidth >= 768) {
        repairSlider.classList.remove('swiper');
        wrapperRepair.classList.remove('swiper-wrapper');
         if (repairSlider.classList.contains('swiper-initialized')) {
            repairSlider.destroy();
         }
     }
 };

 repairSliderInit();

 const pricesSlider = document.querySelector('.table');
 const pricesWrapper = document.querySelector('.table__wrapper');
 function pricesSliderInit () {
     if (window.innerWidth < 768) {
        pricesSlider.classList.add('swiper');
        pricesWrapper.classList.add('swiper-wrapper');
        pricesSwiper = new Swiper (pricesSlider, {
             loop: true,
             spaceBetween: 16,
             simulateTouch: true,
             pagination: {
                el: '.swiper-pagination',
                clickable: true,
             },
             slidesPerView: 'auto',
             slideClass: 'table__row',
         });
     } if (window.innerWidth >= 768) {
        pricesSlider.classList.remove('swiper');
        pricesWrapper.classList.remove('swiper-wrapper');
         if (pricesSlider.classList.contains('swiper-initialized')) {
            pricesSlider.destroy();
         }
     }
 };
 pricesSliderInit ();



const callButton = document.querySelectorAll('.button--call');
const popupButtonClose = document.querySelectorAll('.popup__button--close');
const popup = document.querySelectorAll('.pop-up');
const callPopUp = document.querySelector('.call-popup');
const feedbackPopUp = document.querySelector('.feedback-popup');
const feedbackButton = document.querySelectorAll('.button--feedback');

for (let i = 0; i < feedbackButton.length; i ++) {
    feedbackButton[i].addEventListener ('click', function(evt) {
    evt.preventDefault;
    feedbackPopUp.classList.add('feedback-popup--show');
    document.body.classList.add('body--no-scroll');
});
};

for (let i = 0; i < callButton.length; i ++) {
    callButton[i].addEventListener ('click', function(evt) {
    evt.preventDefault;
    callPopUp.classList.add('call-popup--show');
    document.body.classList.add('body--no-scroll');
});
}

for (let i = 0; i < popupButtonClose.length; i ++) {
    popupButtonClose[i].addEventListener ('click', function(evt) {
    evt.preventDefault;
    document.body.classList.remove('body--no-scroll');
    if (popup[i].classList.contains('call-popup--show'))  {
        popup[i].classList.remove('call-popup--show');
    } if (popup[i].classList.contains('feedback-popup--show')) {
        popup[i].classList.remove('feedback-popup--show');
    }
    
});
}

for (let i = 0; i < popup.length; i ++){
        popup[i].addEventListener('click', function() {
            document.body.classList.remove('body--no-scroll');
            if (popup[i].classList.contains('call-popup--show'))  {
                popup[i].classList.remove('call-popup--show');
            } if (popup[i].classList.contains('feedback-popup--show')) {
                popup[i].classList.remove('feedback-popup--show');
            }
        });
}

const burgerButton = document.querySelector('.button-burger');
const burgerButtonClose = document.querySelector('.menu__button--close');
const sideMenu = document.querySelector('.side-menu');
const sideMenuWrapper = document.querySelector('.side-menu__wrapper');

burgerButton.addEventListener('click', function(evt) {
    evt.preventDefault;
    sideMenu.classList.add('side-menu--open');
    sideMenuWrapper.classList.add('side-menu__wrapper--open');
    document.body.classList.add('body--no-scroll');
});

burgerButtonClose.addEventListener('click', function(evt) {
    evt.preventDefault;
    sideMenu.classList.remove('side-menu--open');
    sideMenuWrapper.classList.remove('side-menu__wrapper--open');
    document.body.classList.remove('body--no-scroll');
});