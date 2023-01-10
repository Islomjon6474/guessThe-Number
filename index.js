let result_input = document.querySelector("#result_input");
let guessBtn = document.querySelector("#guessBtn");
let feedback = document.querySelector("#feedback");
let test = document.querySelector("#test");
let reload = document.querySelector("#reload");

reload.addEventListener("click", () => {
  window.location.reload();
});

let randomNum = Math.floor(Math.random() * 100) + 1;

let attempts = 0;

guessBtn.addEventListener("click", () => {
  if (!result_input.value) {
    feedback.innerHTML = "Please fill in the input above!";
  } else if (result_input.value == randomNum) {
    attempts++;
    feedback.innerHTML =
      "Congratulations, you win! The number of attempt is " + attempts + ".";
  } else if (result_input.value > randomNum) {
    feedback.innerHTML = "Too high.";
    attempts++;
  } else if (result_input.value < randomNum) {
    feedback.innerHTML = "Too low.";
    attempts++;
  }
});
