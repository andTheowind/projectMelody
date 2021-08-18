let counterArrowUp = document.querySelector('.counter-arrow-up');
let counterArrowDown = document.querySelector('.counter-arrow-down');
let counter = document.querySelector('.counter');


const counterPlus = () => {
    let counterPlusOne = Number(counter.textContent) + 1;
    counter.textContent = counterPlusOne.toString().padStart(2, '0');
}
const counterMinus = () => {
    if(counter.textContent > 1) {
        let counterMinusOne = Number(counter.textContent) - 1;
        counter.textContent = counterMinusOne.toString().padStart(2, '0');
    }
}


counterArrowUp.addEventListener('click', counterPlus);
counterArrowDown.addEventListener('click', counterMinus);