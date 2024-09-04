const counterEl = document.querySelector('[data-find="counterValue"]');
const addOneGlassButton = document.getElementById('addOneGlassButton');
const addTwoGlassButton = document.getElementById('addTwoGlassButton');
const resetButton = document.getElementById('resetButton');

const COUNTER_INITIAL_VALUE = 0;

let counter = COUNTER_INITIAL_VALUE;

addOneGlassButton.addEventListener("click", function() {
  counter = counter + parseInt(addOneGlassButton.dataset.glasses);
  counterEl.innerText = counter;
});

addTwoGlassButton.addEventListener("click", function() {
  counter = counter + parseInt(addTwoGlassButton.dataset.glasses);
  counterEl.innerText = counter;
});

resetButton.addEventListener("click", function() {
  counter = COUNTER_INITIAL_VALUE;
  counterEl.innerText = counter;
});
