const buttons = document.querySelectorAll('.menu_item');
const menuButton = document.querySelectorAll('.menu-button');
const sideBar = document.querySelector('.menu');
const gallery = document.querySelector('.gallery');
const video = document.querySelector('.video');
const about = document.querySelector('.about');
const contact = document.querySelector('.contact');

function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

menuButton.forEach((el) => {
    el.addEventListener('click', (e) => {
        e.preventDefault();
        sideBar.classList.toggle('active_menu');
    });
});

const closeSideBar = (el) => {
    el.addEventListener('click', () => {
        if (sideBar.classList.contains('active_menu')) {
            sideBar.classList.toggle('active_menu');
        }
    });
};

closeSideBar(gallery);
closeSideBar(video);
closeSideBar(about);
closeSideBar(contact);

for (let button of buttons) {
    button.addEventListener('click', function () {
        buttons.forEach((i) => i.classList.remove('active'));
        this.classList.toggle('active');
    });
}

const activePage = (button, block) => {
    let everyButton = document.querySelectorAll(button);
    everyButton.forEach((el) => {
        el.addEventListener('click', (e) => {
            e.preventDefault();
            document
                .querySelector('.activePage')
                .classList.remove('activePage');
            document.querySelector(block).classList.toggle('activePage');
            sideBar.classList.toggle('active_menu');
            topFunction();
        });
    });
};

activePage('.head_items__gallery', '.gallery');
activePage('.head_items__video', '.video');
activePage('.head_items__about', '.about');
activePage('.head_items__contact', '.contact');

const slider = (swiperContainer, scrollbarElem) => {
    new Swiper(swiperContainer, {
        slidesPerView: 'auto',
        freeMode: true,
        freeModeMomentum: true,
        scrollbar: {
            el: scrollbarElem,
        },
        mousewheel: true,
        observer: true,
        observeParents: true,
        direction: 'horizontal',
        spaceBetween: 100,
    });
};

if (window.screen.width > 425) {
    slider('.gallery', '.gallery-scrollbar');
    slider('.video', '.video-scrollbar');
}
