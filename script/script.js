"use strict";

const display = document.getElementById("text-display");

// const backspace = document.getElementById("Backspace");

// const textDisplay = display.value;

// function click(input) {
//   input.value = textDisplay;
//   console.log("connected");
// }

// const input = [];

function appendToDisplay(input) {
  display.value += input;
  console.log("connected");
}

// using string method slice to pop up the lase element so we get the output from the backspace
function backSpace() {
  display.value = display.value.slice(0, -1);
}
