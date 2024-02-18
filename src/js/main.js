const blocks = [
    await import('../blocks/header/header.js'),
    await import("../blocks/brands/brands.js"),
    await import('../blocks/team/team.js'),
    await import('../blocks/prices/__switch/prices__switch.js'),
    await import('../blocks/faq/__item/faq__item.js')
];

blocks.forEach((b) => {
    b.init();
});