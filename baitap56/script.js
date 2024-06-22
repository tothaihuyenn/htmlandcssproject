const input = document.querySelector("input");
const guess = document.querySelector(".guess");
const checkButton = document.querySelector("button");
const remainChances = document.querySelector(".chances");

input.focus();

let randomNum = Math.floor(Math.random() * 100);
console.log(randomNum);

let chance = 10;

checkButton.addEventListener("click", () => {
  let inputValue = input.value;

  if (isNaN(inputValue) || inputValue.trim() == "") {
    [guess.textContent] = ["Vui long2 nhap so"];
    return;
  }

  chance--;

  if (inputValue == randomNum) {
    [guess.textContent, checkButton.disabled] = ["Congratulations", true];
    [checkButton.textContent, guess.style.color] = ["Replay", "#333"];
  } else if (inputValue > randomNum && inputValue < 100) {
    [guess.textContent, remainChances.textContent] = [
      "Your guess is high",
      chance,
    ];
    guess.style.color = "#333";
  } else if (inputValue < randomNum && inputValue > 0) {
    [guess.textContent, remainChances.textContent] = [
      "Your guess is high",
      chance,
    ];
    guess.style.color = "#333";
  } else {
    [guess.textContent, remainChances.textContent] = [
      "Your number is invalid",
      chance,
    ];
    guess.style.color = "#333";
  }
  if (chance == 0) {
    [checkButton.textContent, input.disabled, inputValue] = [
      "Replay",
      true,
      "",
    ];
    [guess.textContent, guess.style.color] = ["You lost the game", "#DE0611"];
  }

  if (chance < 0) {
    window.location.reload();
  }
});
