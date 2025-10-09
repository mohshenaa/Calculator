var off = true;
var display = document.getElementById("display");
function append(value) {
  if (off) return;
  display.value += value;
}

function clearDisplay() {
  display.value = " ";
}
function Off() {
  off = true;
  display.value = "";
  display.removeAttribute("placeholder");
}
function on() {
  off = false;
  display.ON = "ON";

  //display.setAttribute('placeholder', 0)
}
function calculate() {
  try {
    display.value = eval(display.value);
  } catch {
    display.value = "error";
  }
}
