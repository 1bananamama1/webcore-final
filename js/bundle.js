!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){e.exports=n(1)},function(e,t,n){"use strict";n.r(t);n(2);var r,o=document.querySelector(".main__text-block"),s=document.querySelector(".main__button"),i=document.querySelector(".brands-slider__button--expand"),l=document.querySelector(".repair-slider__button--expand"),c=document.querySelector(".brands-slider__wrapper"),a=document.querySelector(".repair-slider__wrapper");s.addEventListener("click",(function(e){e.preventDefault,o.classList.toggle("main__text-block--open"),"Читать далее"===s.textContent?s.textContent="Скрыть":s.textContent="Читать далее"})),i.addEventListener("click",(function(e){e.preventDefault,c.classList.toggle("brands-slider__wrapper--open"),"Показать все"===i.textContent?i.textContent="Скрыть":i.textContent="Показать все"})),l.addEventListener("click",(function(e){e.preventDefault,a.classList.toggle("repair-slider__wrapper--open"),"Показать все"===l.textContent?l.textContent="Скрыть":l.textContent="Показать все"}));var d=document.querySelector(".brands-slider");window.innerWidth<768&&(d.classList.add("swiper"),c.classList.add("swiper-wrapper"),r=new Swiper(d,{loop:!0,spaceBetween:16,simulateTouch:!0,pagination:{el:".swiper-pagination",clickable:!0},slidesPerView:"auto",slideClass:"brands-slider__slide"})),window.innerWidth>=768&&(d.classList.remove("swiper"),c.classList.remove("swiper-wrapper"),d.classList.contains("swiper-initialized")&&r.destroy());var p=document.querySelector(".repair-slider");window.innerWidth<768&&(p.classList.add("swiper"),a.classList.add("swiper-wrapper"),new Swiper(p,{loop:!0,spaceBetween:16,simulateTouch:!0,pagination:{el:".swiper-pagination",clickable:!0},slidesPerView:"auto",slideClass:"repair-slider__slide"})),window.innerWidth>=768&&(p.classList.remove("swiper"),a.classList.remove("swiper-wrapper"),p.classList.contains("swiper-initialized")&&p.destroy());var u=document.querySelector(".table"),w=document.querySelector(".table__wrapper");window.innerWidth<768&&(u.classList.add("swiper"),w.classList.add("swiper-wrapper"),new Swiper(u,{loop:!0,spaceBetween:16,simulateTouch:!0,pagination:{el:".swiper-pagination",clickable:!0},slidesPerView:"auto",slideClass:"table__row"})),window.innerWidth>=768&&(u.classList.remove("swiper"),w.classList.remove("swiper-wrapper"),u.classList.contains("swiper-initialized")&&u.destroy());for(var m=document.querySelectorAll(".button--call"),f=document.querySelectorAll(".popup__button--close"),b=document.querySelectorAll(".pop-up"),v=document.querySelector(".call-popup"),y=document.querySelector(".feedback-popup"),L=document.querySelectorAll(".button--feedback"),_=0;_<L.length;_++)L[_].addEventListener("click",(function(e){e.preventDefault,y.classList.add("feedback-popup--show"),document.body.classList.add("body--no-scroll")}));for(var S=0;S<m.length;S++)m[S].addEventListener("click",(function(e){e.preventDefault,v.classList.add("call-popup--show"),document.body.classList.add("body--no-scroll")}));for(var h=function(e){f[e].addEventListener("click",(function(t){t.preventDefault,document.body.classList.remove("body--no-scroll"),b[e].classList.contains("call-popup--show")&&b[e].classList.remove("call-popup--show"),b[e].classList.contains("feedback-popup--show")&&b[e].classList.remove("feedback-popup--show")}))},g=0;g<f.length;g++)h(g);for(var k=function(e){b[e].addEventListener("click",(function(){document.body.classList.remove("body--no-scroll"),b[e].classList.contains("call-popup--show")&&b[e].classList.remove("call-popup--show"),b[e].classList.contains("feedback-popup--show")&&b[e].classList.remove("feedback-popup--show")}))},q=0;q<b.length;q++)k(q);var x=document.querySelector(".button-burger"),C=document.querySelector(".menu__button--close"),E=document.querySelector(".side-menu"),D=document.querySelector(".side-menu__wrapper");x.addEventListener("click",(function(e){e.preventDefault,E.classList.add("side-menu--open"),D.classList.add("side-menu__wrapper--open"),document.body.classList.add("body--no-scroll")})),C.addEventListener("click",(function(e){e.preventDefault,E.classList.remove("side-menu--open"),D.classList.remove("side-menu__wrapper--open"),document.body.classList.remove("body--no-scroll")}))},function(e,t,n){}]);
//# sourceMappingURL=bundle.js.map