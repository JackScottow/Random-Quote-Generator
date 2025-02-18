const API_URL = "https://api.adviceslip.com/advice";

export async function fetchAdvice() {
  try {
    const response = await fetch(API_URL);
    if (!response.ok) {
      throw new Error("Failed to fetch advice");
    }
    const data = await response.json();
    return data.slip.advice;
  } catch (error) {
    console.error("Error fetching advice:", error);
    return "Failed to load advice. Please try again.";
  }
}
