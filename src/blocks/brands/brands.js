function init() {
    const brands = document.querySelector('.brands');
    const container = document.querySelector('.brands__list');
    container.style.animationPlayState = 'running';
    brands.append(container.cloneNode(true));
}

export { init };