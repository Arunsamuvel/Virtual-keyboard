"use strict";

const display = document.getElementById("text-display");

const backSpace = document.getElementById("Backspace");

// const textDisplay = display.value;

// function click(input) {
//   input.value = textDisplay;
//   console.log("connected");
// }

const input = [];

function appendToDisplay(input) {
  display.value += input;
  console.log("connected");
}
