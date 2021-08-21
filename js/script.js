let counterArrowUp = document.querySelector('.counter-arrow-up');
let counterArrowDown = document.querySelector('.counter-arrow-down');
let counter = document.querySelector('.counter');
let floor = Array.from(document.querySelectorAll('.home-image > path'));
let modal = document.querySelector('.modal');
let openModal = document.querySelector('.btn-primary');
let closeModal = document.querySelector('.modal-close-button');

const counterPlus = () => {
    if(counter.textContent < 17) {
        let counterPlusOne = Number(counter.textContent) + 1;
        counter.textContent = counterPlusOne.toString().padStart(2, '0');
        floorColorize();
    }
}

const counterMinus = () => {
    if(counter.textContent > 1) {
        let counterMinusOne = Number(counter.textContent) - 1;
        counter.textContent = counterMinusOne.toString().padStart(2, '0');
        floorColorize();
    }
}

const floorColorize = () => {
    floor.map((el) => {
        el.style.opacity = '0';
    })
    let digitFloor = Number(counter.textContent);
    floor[digitFloor-1].style.opacity = '1';
}
counterArrowUp.addEventListener('click', counterPlus);
counterArrowDown.addEventListener('click', counterMinus);

openModal.addEventListener('click', function() {
    modal.classList.remove('is-close');
    modal.classList.add('is-open');
});

closeModal.addEventListener('click', function() {
    modal.classList.remove('is-open');
    modal.classList.add('is-close');
});
