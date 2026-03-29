const display = document.getElementById("display");
const buttons = document.querySelectorAll("button");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const value = button.textContent;

    if (value === "=" || value === "C") return;

    let lastChar = display.value.slice(-1);

    // Converter "x" para "*"
    let input = value === "x" ? "*" : value;

    // Evitar dois operadores seguidos
    if ("+-*/".includes(lastChar) && "+-*/".includes(input)) {
      return;
    }

    // Evitar começar com operador
    if (display.value === "" && "+-*/".includes(input)) {
      return;
    }

    display.value += input;
  });
});

document.getElementById("btnClear").addEventListener("click", () => {
  display.value = "";
});

document.getElementById("btnIgual").addEventListener("click", () => {
  try {
    display.value = eval(display.value);
  } catch (error) {
    display.value = "Erro";

    setTimeout(() => {
      display.value = "";
    }, 1500);
  }
});
