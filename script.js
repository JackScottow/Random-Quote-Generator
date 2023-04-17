const output = document.querySelector("#advice");
const newAdviceButton = document.querySelector("#new-advice");
const container = document.querySelector("#container");
const title = document.querySelector("#title");

const fetchFn = () => {
  fetch("https://api.adviceslip.com/advice")
    .then((response) => response.json())
    .then((data) => {
      outputFn(data.slip.advice.toString());
    });
};

fetchFn();

const outputFn = (data) => {
  output.innerHTML = ` ${data} `;
};

newAdviceButton.addEventListener("click", () => {
  container.classList.toggle("flip");
  container.classList.toggle("flip-back");
  fetchFn();
});
