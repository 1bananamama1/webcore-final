const mainTextBlock = document.querySelector('.main__text-block');
const mainButton = document.querySelector('.main__button');
const buttonBrands = document.querySelector('.brands-slider__button--expand');
const wrapperSliderBrands = document.querySelector('.brands-slider__wrapper');
const buttonRepair = document.querySelector('.repair-slider__button--expand');
const wrapperRepair = document.querySelector('.repair-slider__wrapper');

mainButton.addEventListener('click', function(evt) {
    evt.preventDefault;
    mainTextBlock.classList.toggle('main__text-block--open');
    if(mainButton.textContent === 'Читать далее') {
        mainButton.textContent = 'Скрыть'
    } else {mainButton.textContent = 'Читать далее'};
})



buttonBrands.addEventListener('click', function(evt) {
    evt.preventDefault;
    wrapperSliderBrands.classList.toggle('brands-slider__wrapper--open');
    if(buttonBrands.textContent === 'Показать все') {
        buttonBrands.textContent = 'Скрыть'
    } else {buttonBrands.textContent = 'Показать все'};
})

buttonRepair.addEventListener('click', function(evt) {
    evt.preventDefault;
    wrapperRepair.classList.toggle('repair-slider__wrapper--open');
    if(buttonRepair.textContent === 'Показать все') {
        buttonRepair.textContent = 'Скрыть'
    } else {buttonRepair.textContent = 'Показать все'};
})

const slider = document.querySelector('.brands-slider');
let mySwiper;
mySwiper = new Swiper(slider, {
   
    loop: true,
    spaceBetween: 16,
    simulateTouch: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    slidesPerView: 'auto',
    slideClass: 'brands-slider__slide',
    
  });

const repairSwiper = new Swiper ('.repair-slider', {
    loop: true,
    spaceBetween: 16,
    simulateTouch: true,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      slidesPerView: 'auto',
      slideClass: 'repair-slider__slide',
})

const pricesSwiper = new Swiper ('.table' , {
    loop: true,
    spaceBetween: 16,
    simulateTouch: true,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      slidesPerView: 'auto',
      slideClass: 'table__row',
})