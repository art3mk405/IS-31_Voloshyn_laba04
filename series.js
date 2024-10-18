// SEARCH

document.getElementById("search-toggle").addEventListener("click", function (event) {
    event.preventDefault();
    const searchContainer = document.getElementById("search-container");
    searchContainer.classList.toggle("active");
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


    const carouselComedies = document.getElementById('carousel-comedies');
    const leftBtnComedies = document.getElementById('left-btn-comedies');
    const rightBtnComedies = document.getElementById('right-btn-comedies');

    let scrollAmountComedies = 0;
    const scrollStepComedies = 250;
    const maxScrollComedies = carouselComedies.scrollWidth - carouselComedies.clientWidth;

    rightBtnComedies.addEventListener('click', () => {
        if (scrollAmountComedies < maxScrollComedies) {
            scrollAmountComedies += scrollStepComedies;
            carouselComedies.style.transform = `translateX(-${scrollAmountComedies}px)`;
        }
    });

    leftBtnComedies.addEventListener('click', () => {
        if (scrollAmountComedies > 0) {
            scrollAmountComedies -= scrollStepComedies;
            carouselComedies.style.transform = `translateX(-${scrollAmountComedies}px)`;
        }
    });


    const carouselHorrors = document.getElementById('carousel-horrors');
    const leftBtnHorrors = document.getElementById('left-btn-horrors');
    const rightBtnHorrors = document.getElementById('right-btn-horrors');

    let scrollAmountHorrors = 0;
    const scrollStepHorrors = 250;
    const maxScrollHorrors = carouselHorrors.scrollWidth - carouselHorrors.clientWidth;

    rightBtnHorrors.addEventListener('click', () => {
        if (scrollAmountHorrors < maxScrollHorrors) {
            scrollAmountHorrors += scrollStepHorrors;
            carouselHorrors.style.transform = `translateX(-${scrollAmountHorrors}px)`;
        }
    });

    leftBtnHorrors.addEventListener('click', () => {
        if (scrollAmountHorrors > 0) {
            scrollAmountHorrors -= scrollStepHorrors;
            carouselHorrors.style.transform = `translateX(-${scrollAmountHorrors}px)`;
        }
    });

    