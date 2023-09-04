"use strict";

const displayNumbers = document.querySelector(".mainBox__display");
const buttons = document.querySelectorAll("button");

let storeValues = [];
let string;
buttons.forEach((buttons) => {
  buttons.addEventListener("click", (e) => calculate(e.target));
});

function calculate(btnValue) {
   const value = btnValue.textContent;
  if (value === "AC") {
    storeValues = [];
     displayNumbers.textContent = ".";
  } else if (value === "=") {
    console.log(string);
    displayNumbers.textContent = eval(string);
  } else {
    storeValues.push(value);
    string = storeValues.join("");
    displayNumbers.textContent = string;
  }
}
