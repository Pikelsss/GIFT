// app/javascript/application.js
import "@hotwired/turbo-rails"; // Import Turbo
import "controllers"; // Import Stimulus controllers

// Import jQuery and make it available globally
import $ from "jquery";
window.$ = $;
window.jQuery = $;

// Import Bootstrap's JavaScript
import "bootstrap";

// Your custom JavaScript code can go here
// In a separate JS file, maybe app/javascript/application.js

document.addEventListener('mousemove', function(e) {
    const background = document.getElementById('background');
    const x = e.clientX / window.innerWidth;
    const y = e.clientY / window.innerHeight;
    
    // Add an effect like parallax based on mouse position
    background.style.backgroundPosition = `${x * 100}% ${y * 100}%`;
  });
import "controllers"
