class WisdomOracle {
  constructor() {
    this.adviceElement = document.querySelector("#advice");
    this.button = document.querySelector("#new-advice");
    this.isLoading = false;

    this.button.addEventListener("click", () => this.getNewWisdom());
    this.init();
  }

  async init() {
    await this.getNewWisdom();
  }

  async getNewWisdom() {
    if (this.isLoading) return;

    this.isLoading = true;
    this.button.disabled = true;

    try {
      const response = await fetch("https://api.adviceslip.com/advice");
      const data = await response.json();

      this.adviceElement.classList.remove("fade-in");
      void this.adviceElement.offsetWidth;
      this.adviceElement.classList.add("fade-in");

      this.adviceElement.textContent = data.slip.advice;
    } catch (error) {
      this.adviceElement.textContent = "Wisdom takes time to load. Please try again.";
    } finally {
      this.isLoading = false;
      this.button.disabled = false;
    }
  }
}

document.addEventListener("DOMContentLoaded", () => {
  new WisdomOracle();
});
