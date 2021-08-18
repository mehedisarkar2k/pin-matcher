const generatePinBTN = document.querySelector(".pin-generate-btn");
const generatePinDisplay = document.querySelector(
  ".pin-generator-container .display"
);
const submitBTN = document.getElementById("pin-check");
const pinInputFiled = document.getElementById("pin-input-field");
const success = document.querySelector(".messages .success");
const error = document.querySelector(".messages .warning");
const limitation = document.querySelector(".limitation .count");
const keys = document.querySelectorAll(".key");
const del = document.querySelector(".del");
const clear = document.querySelector(".clear");
const inputBorderField = document.querySelectorAll(".input");

function generatePin() {
  const randomTill4Digit = Math.round(Math.random() * 10000);

  if ((randomTill4Digit + "").length === 4) {
    return randomTill4Digit;
  } else {
    return generatePin();
  }
}

function init() {
  success.classList.remove("active");
  error.classList.remove("active");
  limitation.innerText = 3;
  document.getElementById("pin-input-field").value = "";
  document.querySelector(".limitation").style.color = "#4a934a";
  document.body.style.color = "";
}

generatePinBTN.addEventListener("click", () => {
  generatePinDisplay.innerText = generatePin();
  inputBorderField[0].style.borderColor = "#606c76";
  inputBorderField[1].style.borderColor = "#606c76";
  init();
});

keys.forEach((key) => {
  key.addEventListener("click", () => {
    if (pinInputFiled.value.length < 4) {
      pinInputFiled.value += key.innerText;
    }
  });
});

del.addEventListener("click", () => {
  let inputValue = document.getElementById("pin-input-field").value;
  let value = inputValue.split("");
  value.length = value.length - 1;
  document.getElementById("pin-input-field").value = value.join("");
});

clear.addEventListener("click", () => {
  document.getElementById("pin-input-field").value = "";
});

submitBTN.addEventListener("click", () => {
  let count = limitation.innerText;
  if (count > 0) {
    const inputPin = document.getElementById("pin-input-field").value;

    const pin = generatePinDisplay.innerText;

    if (Number(pin) === Number(inputPin)) {
      inputBorderField[0].style.borderColor = "#4a934a";
      inputBorderField[1].style.borderColor = "#4a934a";
      success.classList.add("active");
    } else {
      success.classList.remove("active");
      error.classList.add("active");
      count--;
      limitation.innerText = count;
    }
  }
  if (count == 0) {
    inputBorderField[0].style.borderColor = "#f32013";
    inputBorderField[1].style.borderColor = "#f32013";
    document.querySelector(".limitation").style.color = "#f32013";
    document.body.style.color = "#f32013";
  }
});
