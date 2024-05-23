import "./style.css";
import javascriptLogo from "./javascript.svg";
import viteLogo from "/vite.svg";
import { setupCounter } from "./counter.js";
import "./calculator.css";

const app = document.querySelector("#app");
let counter = 0;

const input = document.createElement("input");
input.type = "text";
input.style = "grid-column: 1 / span 3; width: 100%; height: 40px;";
app.appendChild(input); // ajoute l'input au DOM

for (let i = 0; i <= 9; i++) {
  const button = document.createElement("button");
  button.innerHTML = i;
  button.style =
    "width: 100%; height: 50px; justify-content: center; align-items: center; display: flex; background-color: back; border: 1px solid #000;";
  button.addEventListener("click", () => {
    input.value += i;
  });
  app.appendChild(button);
}

const operands = ["*", "/", "+", "-"];

// operands permet de créer les boutons pour les opérateurs
operands.forEach((operand) => {
  const button = document.createElement("button");
  button.innerHTML = operand;
  button.style =
    "width: 100%; height: 50px; justify-content: center; align-items: center; display: flex;";
  button.addEventListener("click", () => {
    input.value += operand;
  });
  app.appendChild(button);
});

// execute du code quand on clique sur le bouton
const equalsButton = document.createElement("button");
equalsButton.innerHTML = "=";
equalsButton.addEventListener("click", () => {
  input.value = eval(input.value);
});
app.appendChild(equalsButton);

// cette fonction permet de vider le champ de texte
const clearButton = document.createElement("button");
clearButton.innerHTML = "C";
clearButton.addEventListener("click", () => {
  input.value = "";
});
app.appendChild(clearButton);

const powerButton = document.createElement("button");
powerButton.innerHTML = "x^y";
powerButton.addEventListener("click", () => {
  input.value += "Math.pow(";
});
app.appendChild(powerButton);

const commaButton = document.createElement("button");
commaButton.innerHTML = ",";
commaButton.addEventListener("click", () => {
  input.value += ",";
});
app.appendChild(commaButton);

const openParenthesesButton = document.createElement("button");
openParenthesesButton.innerHTML = "(";
openParenthesesButton.addEventListener("click", () => {
  input.value += "(";
});
app.appendChild(openParenthesesButton);

const closeParenthesesButton = document.createElement("button");
closeParenthesesButton.innerHTML = ")";
closeParenthesesButton.addEventListener("click", () => {
  input.value += ")";
});
app.appendChild(closeParenthesesButton);

// cette fonction permet de vider le champ de texte
const sqrtButton = document.createElement("button");
sqrtButton.innerHTML = "sqrt";
sqrtButton.addEventListener("click", () => {
  input.value += "Math.sqrt(";
});
app.appendChild(sqrtButton);

// document.querySelector("#app").innerHTML = `
//   <div>
//     <div class="card">
//       <button id="counter" type="button"></button>
//     </div>
//   </div>
// `;

// const input = document.createElement("input");
// input.type = "number";
// input.value = "";
// const name = document.createElement("h1");
// let count = 0;

// app.appendChild(input);
// app.appendChild(name);

// input.addEventListener("click", (e) => {
//   count = e.target.value;
//   name.innerHTML = count;
// });

// const incrementButton = document.createElement("button");
// incrementButton.textContent = "Increment";

// const decrementButton = document.createElement("button");
// decrementButton.textContent = "Decrement";

// const number = document.createElement("h1");
// number.textContent = counter;

// app.appendChild(incrementButton);
// app.appendChild(decrementButton);
// app.appendChild(number);

// incrementButton.addEventListener("click", () => {
//   counter++;
//   number.innerHTML = counter;
//   counter = -5.22233;
//   console.log(Math);
// });

// decrementButton.addEventListener("click", () => {
//   counter--;
//   number.innerHTML = counter;
// });

// const multiplyButton = document.createElement("button");
// multiplyButton.innerHTML = "*";
// multiplyButton.addEventListener("click", () => {
//   input.value += "*";
// });
// app.appendChild(multiplyButton);

// const divideButton = document.createElement("button");
// divideButton.innerHTML = "/";
// divideButton.addEventListener("click", () => {
//   input.value += "/";
// });
// app.appendChild(divideButton);

// const addButton = document.createElement("button");
// addButton.innerHTML = "+";
// addButton.addEventListener("click", () => {
//   input.value += "+";
// });
// app.appendChild(addButton);

// const subtractButton = document.createElement("button");
// subtractButton.innerHTML = "-";
// subtractButton.addEventListener("click", () => {
//   input.value += "-";
// });
// app.appendChild(subtractButton);
