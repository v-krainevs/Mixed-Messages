"use strict";

const prompt = require("prompt-sync")({ sigint: true });
const db = require("./db.js");
const full_name = db.full_name;

let name;
let surname;
let patronymic;

// Get the answers and store them in an answers array
for (let i = 0; i <= 2; i++) {
  let num = prompt("Choose a number between 0 and 9: >> ");
  if (isNaN(num)) {
    console.log("Input must be of number type");
    break;
  } else {
    num = parseInt(num, 8);
    console.log(`Your input was: ${num}`);
  }
  switch (i) {
    case 0:
      name = full_name.name[num];
      break;
    case 1:
      surname = full_name.surname[num];
      break;
    case 2:
      patronymic = full_name.patronymic[num];
      break;
    default:
      break;
  }
}

if (name && surname && patronymic) {
  console.log(`Your Full Name is: ${name} ${surname} ${patronymic}`);
}
