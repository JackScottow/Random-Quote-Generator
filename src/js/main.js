import { fetchAdvice } from "./api.js";
import { addFlipAnimation } from "./animations.js";

class AdviceGenerator {
  constructor() {
    this.adviceElement = document.querySelector("#advice");
    this.button = document.querySelector("#new-advice");
    this.container = document.querySelector("#container");

    this.button.addEventListener("click", () => this.generateNewAdvice());
    this.init();
  }

  async init() {
    await this.generateNewAdvice();
  }

  async generateNewAdvice() {
    if (this.button.disabled) return;

    this.button.disabled = true;
    addFlipAnimation(this.container);

    const advice = await fetchAdvice();
    this.updateAdvice(advice);

    setTimeout(() => {
      this.button.disabled = false;
    }, 500);
  }

  updateAdvice(advice) {
    this.adviceElement.textContent = advice;
  }
}

// Initialize the app
document.addEventListener("DOMContentLoaded", () => {
  new AdviceGenerator();
});
