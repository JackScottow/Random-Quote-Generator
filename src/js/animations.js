export function addFadeAnimation(element) {
  element.classList.remove("fade-in");
  // Trigger reflow
  void element.offsetWidth;
  element.classList.add("fade-in");
}

export function addFlipAnimation(element) {
  // Remove any existing flip classes
  element.classList.remove("flip-back");
  element.classList.remove("flip");

  // Trigger reflow
  void element.offsetWidth;

  // Add single flip animation
  element.classList.add("flip");

  // Remove class after animation completes
  setTimeout(() => {
    element.classList.remove("flip");
  }, 500);
}
