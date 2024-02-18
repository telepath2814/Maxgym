function init() {
    const memberCards = document.querySelectorAll('.team__member-card');
    for (let card of memberCards) {
        card.addEventListener('click', onCardClick);
    }
}


function onCardClick(e) {
    const card = e.currentTarget;

    const cardDetails = card.querySelector('.team__member-details');
    const cardAchievements = card.querySelector('.team__member-achievements');
    const cardImg = card.querySelector('.team__member-img');

    cardDetails.classList.toggle('team__member-details--slide');
    cardAchievements.classList.toggle('team__member-achievements--show');
    cardImg.classList.toggle('team__member-img--hide');
}


export { init };