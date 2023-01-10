let result_input = document.querySelector("#result_input");
let guessBtn = document.querySelector("#guessBtn");
let feedback = document.querySelector("#feedback");
let reload = document.querySelector("#reload");
let randomNum = Math.floor(Math.random() * 100) + 1;
let attempts = 0;

reload.addEventListener("click", () => {
  window.location.reload();
});

guessBtn.addEventListener("click", () => {
  if (!result_input.value) {
    feedback.innerHTML = "Please fill in the input above!";
  } else if (result_input.value == randomNum) {
    attempts++;
    feedback.innerHTML =
      "Congratulations, you win! The number of attempt is " + attempts + ".";
    setTimeout(() => {
      window.location.reload();
    }, 2000);
  } else if (result_input.value > randomNum) {
    feedback.innerHTML = "Too high.";
    attempts++;
  } else if (result_input.value < randomNum) {
    feedback.innerHTML = "Too low.";
    attempts++;
  }
});
