const display = document.querySelector(".display-value");

function getValue(val) {
  display.value += val;
}

function calculate() {
  display.value = eval(display.value);
}

function clearDisplay() {
  display.value = "";
}
