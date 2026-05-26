let display = document.getElementById("display");
const increaseBtn = document.getElementById("increaseButton");
const decreaseBtn = document.getElementById("decreaseButton");
const resetBtn = document.getElementById("ResetButton");

let count = 0;

increaseBtn.addEventListener("click", () => {
    count = count + 1;
    display.textContent = count;
});

decreaseBtn.addEventListener("click", () => {
    count = count - 1;
    display.innerText = count;
});

resetBtn.addEventListener("click", () => {
    count = 0;
    display.textContent = count;
})