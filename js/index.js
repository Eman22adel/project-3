let img = document.querySelector('#header__slide__img');
let count = 1;
setInterval(function () {
    img.src = `/images/header/${count}.jpg`;
    count ++;
    if (count == 4) count = 1;

},3000);


////////////              slide category              //////////////

let slide = document.querySelector('.category__product');
let bottonright = document.querySelector('.category__next');
let bottonleft = document.querySelector('.category__back');

bottonleft.addEventListener('click', () => {
    if (window.innerWidth >= 1020) {
        slide.scrollLeft -= 2000;
        bottonleft.disabled = true;
        bottonright.disabled = false;
    }
    slide.scrollLeft -= 200;
})
bottonright.addEventListener('click', () => {
    if (window.innerWidth >= 1020) {
        slide.scrollLeft += 2000;
        bottonright.disabled = true;
        bottonleft.disabled = false;
    }
    slide.scrollLeft += 200;
})


/////////// mark section ////////////
