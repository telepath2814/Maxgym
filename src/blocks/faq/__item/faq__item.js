function init() {
    const faqItems = document.querySelectorAll('.faq__item');
    for (let item of faqItems) {
        item.addEventListener('click', onItemClick);
    }
}


function onItemClick(e) {
    const item = e.currentTarget;
    const button = item.querySelector('.faq__button');
    const buttonLineV = button.querySelector('.faq__button-line-v');
    const answer = item.querySelector('.faq__item-answer');

    item.classList.toggle('faq__item--open');
    button.classList.toggle('ui-button--black');
    buttonLineV.classList.toggle('faq__button-line-v--rotate');
    answer.classList.toggle('faq__item-answer--show');
}


export { init };