const countElemnt = document.getElementById("count");

let count = 0;

function showCount() {
  countElemnt.textContent = count;
}

function decrease() {
  count -= 1;
  showCount();
}

function increase() {
  count += 1;
  showCount();
}

function reset() {
  count = 0;
  showCount();
}

document.getElementById("decrement").addEventListener("click", decrease);
document.getElementById("increment").addEventListener("click", increase);
document.getElementById("reset").addEventListener("click", reset);
