import { Controller } from "stimulus";

export default class extends Controller {
  static targets = ["yesButton", "noButton", "fireworks"];

  respondNo() {
    const yesButton = this.yesButtonTarget; // Reference the "Yes" button
    const currentScale = getComputedStyle(yesButton).transform === 'none' ? 1 : parseFloat(getComputedStyle(yesButton).transform.match(/matrix\(([^,]+)/)[1]); // Get current scale
    const newScale = currentScale + 0.2; // Increase the scale (adjust the increment as needed)
    
    yesButton.style.transform = `scale(${newScale})`; // Apply the new scale
    yesButton.style.transition = "transform 0.2s ease"; // Add a transition for smooth scaling
  }

  respondYes() {
    this.fireworksTarget.classList.remove('hidden');
    this.showCatAnimation();
  }

  showCatAnimation() {
    // Logic to animate cat and show letter with a page-turning effect
  }
}
