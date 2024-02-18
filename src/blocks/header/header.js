const FIXED_Y = 960;


let header, signUpBtn, mobileBtn;


function init() {
    header = document.querySelector('.header');
    signUpBtn = header.querySelector('.header__sign-up');
    mobileBtn = header.querySelector('.header__mobile');
    addEventListener('scroll', onScroll);
}


function onScroll() {
    if (window.scrollY >= FIXED_Y) {
        header.classList.add('header--fixed');
        signUpBtn.classList.add('header__sign-up--show');
    }
    else {
        header.classList.remove('header--fixed');
        signUpBtn.classList.remove('header__sign-up--show');
    }
}


export { init };