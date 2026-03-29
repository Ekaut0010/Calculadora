const display = document.getElementById("display");
const buttons = document.querySelectorAll("button");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const value = button.textContent;
    display.value += value;
  });
});

document.getElementById("btnClear").addEventListener("click", () => {
  display.value = "";
});
