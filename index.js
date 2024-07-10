const display = document.querySelector(".display-value");

function getValue(val) {
  if (
    display.value == "input required" ||
    display.value == "Error: Invalid Operation" ||
    display.value == "Infinity"
  ) {
    display.value = "";
  }
  display.value += val;
}

function calculate() {
  try {
    if (display.value == "") {
      display.value = "input required";
    } else {
      display.value = eval(display.value);
    }
  } catch (err) {
    display.value = "Error: Invalid Operation";
  }
}

function clearDisplay() {
  display.value = "";
}
