const display = document.querySelector(".display-value");

function getValue(val) {
  display.value += val;
}

function calculate() {
  try {
    display.value = eval(display.value);
  }
  catch(err) {
    display.value = "Error";
  }
}

function clearDisplay() {
  display.value = "";
}
