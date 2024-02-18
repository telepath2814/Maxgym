let pricesSwitch; 


function init() {
    pricesSwitch = document.querySelector('.ui-switch');
    pricesSwitch.addEventListener('click', onSwitchClick);
}


function onSwitchClick(e) {
    let switchSlider = pricesSwitch.querySelector('.ui-switch__slider');
    switchSlider.classList.toggle('ui-switch__slider--switch');

    let prices = document.querySelectorAll('.prices__card-price');
    prices.forEach(p => {
        p.classList.toggle('prices__card-price--switch');
    });
}


export { init };