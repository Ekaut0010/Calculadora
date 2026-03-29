const display = document.getElementById("display");
const buttons = document.querySelectorAll("button:not(#toggle-theme)");

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

// Alternar tema claro/escuro
const toggle = document.getElementById("toggle-theme");

toggle.addEventListener("click", () => {
  document.body.classList.toggle("dark");
});
toggle.addEventListener("click", () => {
  if (document.body.classList.contains("dark")) {
    toggle.textContent = "☀️";
  } else {
    toggle.textContent = "🌙";
  }
});
