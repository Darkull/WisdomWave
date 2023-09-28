"use strict";

document.addEventListener("DOMContentLoaded", () => {
  const adviceNumber = document.querySelector(".advice-number");
  const advice = document.querySelector(".advice");
  const button = document.querySelector("button");

  async function updateAdvice() {
    const response = await fetch("https://api.adviceslip.com/advice");
    const data = await response.json();

    if (response.ok) {
      adviceNumber.textContent = "advice #" + data.slip.id;
      advice.textContent = '"' + data.slip.advice + '"';
    } else {
      advice.textContent = "An error occured";
      console.log(data);
    }
  }
  button.addEventListener("click", updateAdvice);
  updateAdvice();
});
