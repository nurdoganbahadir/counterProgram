const score = document.getElementById("score");
const increaseBtn = document.getElementById("increaseBtn");
const resetBtn = document.getElementById("resetBtn");
const decreaseBtn = document.getElementById("decreaseBtn");

let count = 0;

increaseBtn.onclick = function () {
  count++;
  score.textContent = count;
};
decreaseBtn.onclick = function () {
  count--;
  score.textContent = count;
};
resetBtn.onclick = function () {
  count = 0;
  score.textContent = count;
};
