// setting owl carousel

let navText = ["<i class='bx bx-chevron-left'></i>", "<i class='bx bx-chevron-right'></i>"]

$('#hero-carousel').owlCarousel({
    items: 1,
    dots: false,
    loop: true,
    nav: true,
    navText: navText,
    autoplay: true,
    autoplayHoverPause: true
})

// Burger-menu

document.addEventListener('DOMContentLoaded', () => {
    const burgerMenu = document.getElementById('burger-menu');
    const navMenu = document.getElementById('nav-menu');

    burgerMenu.addEventListener('click', () => {
        navMenu.style.display = navMenu.style.display === 'none' ? 'block' : 'none';
    });
})

// Search

document.getElementById("search-toggle").addEventListener("click", function (event) {
    event.preventDefault();
    const searchContainer = document.getElementById("search-container");
    searchContainer.classList.toggle("active");
});


// MOVIES

const carouselEkshn = document.getElementById('carousel-ekshn');
const leftBtnEkshn = document.getElementById('left-btn-ekshn');
const rightBtnEkshn = document.getElementById('right-btn-ekshn');

let scrollAmountEkshn = 0;
const scrollStepEkshn = 250;  // Кількість пікселів для прокрутки
const maxScrollEkshn = carouselEkshn.scrollWidth - carouselEkshn.clientWidth;  // Максимальна прокрутка

rightBtnEkshn.addEventListener('click', () => {
    if (scrollAmountEkshn < maxScrollEkshn) {
        scrollAmountEkshn += scrollStepEkshn;
        carouselEkshn.style.transform = `translateX(-${scrollAmountEkshn}px)`;
    }
});

leftBtnEkshn.addEventListener('click', () => {
    if (scrollAmountEkshn > 0) {
        scrollAmountEkshn -= scrollStepEkshn;
        carouselEkshn.style.transform = `translateX(-${scrollAmountEkshn}px)`;
    }
});

const carouselDetectives = document.getElementById('carousel-detectives');
const leftBtnDetectives = document.getElementById('left-btn-detectives');
const rightBtnDetectives = document.getElementById('right-btn-detectives');

let scrollAmountDetectives = 0;
const scrollStepDetectives = 250;  
const maxScrollDetectives = carouselDetectives.scrollWidth - carouselDetectives.clientWidth;  

rightBtnDetectives.addEventListener('click', () => {
    if (scrollAmountDetectives < maxScrollDetectives) {
        scrollAmountDetectives += scrollStepDetectives;
        carouselDetectives.style.transform = `translateX(-${scrollAmountDetectives}px)`;
    }
});

leftBtnDetectives.addEventListener('click', () => {
    if (scrollAmountDetectives > 0) {
        scrollAmountDetectives -= scrollStepDetectives;
        carouselDetectives.style.transform = `translateX(-${scrollAmountDetectives}px)`;
    }
});

const carouselHorror = document.getElementById('carousel-horror');
const leftBtnHorror = document.getElementById('left-btn-horror');
const rightBtnHorror = document.getElementById('right-btn-horror');

let scrollAmountHorror = 0;
const scrollStepHorror = 250;
const maxScrollHorror = carouselHorror.scrollWidth - carouselHorror.clientWidth;

rightBtnHorror.addEventListener('click', () => {
    if (scrollAmountHorror < maxScrollHorror) {
        scrollAmountHorror += scrollStepHorror;
        carouselHorror.style.transform = `translateX(-${scrollAmountHorror}px)`;
    }
});

leftBtnHorror.addEventListener('click', () => {
    if (scrollAmountHorror > 0) {
        scrollAmountHorror -= scrollStepHorror;
        carouselHorror.style.transform = `translateX(-${scrollAmountHorror}px)`;
    }
});

const carouselAdventure = document.getElementById('carousel-adventure');
    const leftBtnAdventure = document.getElementById('left-btn-adventure');
    const rightBtnAdventure = document.getElementById('right-btn-adventure');

    let scrollAmountAdventure = 0;
    const scrollStepAdventure = 250;
    const maxScrollAdventure = carouselAdventure.scrollWidth - carouselAdventure.clientWidth;

    rightBtnAdventure.addEventListener('click', () => {
        if (scrollAmountAdventure < maxScrollAdventure) {
            scrollAmountAdventure += scrollStepAdventure;
            carouselAdventure.style.transform = `translateX(-${scrollAmountAdventure}px)`;
        }
    });

    leftBtnAdventure.addEventListener('click', () => {
        if (scrollAmountAdventure > 0) {
            scrollAmountAdventure -= scrollStepAdventure;
            carouselAdventure.style.transform = `translateX(-${scrollAmountAdventure}px)`;
        }
    });

    const carouselDramas = document.getElementById('carousel-dramas');
    const leftBtnDramas = document.getElementById('left-btn-dramas');
    const rightBtnDramas = document.getElementById('right-btn-dramas');

    let scrollAmountDramas = 0;
    const scrollStepDramas = 250;
    const maxScrollDramas = carouselDramas.scrollWidth - carouselDramas.clientWidth;

    rightBtnDramas.addEventListener('click', () => {
        if (scrollAmountDramas < maxScrollDramas) {
            scrollAmountDramas += scrollStepDramas;
            carouselDramas.style.transform = `translateX(-${scrollAmountDramas}px)`;
        }
    });

    leftBtnDramas.addEventListener('click', () => {
        if (scrollAmountDramas > 0) {
            scrollAmountDramas -= scrollStepDramas;
            carouselDramas.style.transform = `translateX(-${scrollAmountDramas}px)`;
        }
    });











