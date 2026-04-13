// thank-you.js - Auto-redirect to WhatsApp after 3 seconds

// Get the user's name from localStorage (saved by form.js)
const userName = localStorage.getItem("userName");
const waMessage = localStorage.getItem("waMessage");
const phoneNumber = "12428220994";

// Update the thank-you message with the user's name
if (userName && document.querySelector("h1")) {
  document.querySelector("h1").innerHTML = `Thank You, ${userName}! 🎉`;
}

// Auto-redirect to WhatsApp after 3 seconds
let seconds = 3;

// Create a countdown element if it doesn't exist
const heroContent = document.querySelector(".hero-content");
if (heroContent && !document.getElementById("countdown")) {
  const countdownP = document.createElement("p");
  countdownP.id = "countdown";
  countdownP.style.marginTop = "1rem";
  countdownP.style.fontWeight = "bold";
  heroContent.appendChild(countdownP);
}

const countdownEl = document.getElementById("countdown");

const interval = setInterval(() => {
  seconds--;
  if (countdownEl) {
    countdownEl.textContent = `Redirecting to WhatsApp in ${seconds} seconds...`;
  }
  
  if (seconds <= 0) {
    clearInterval(interval);
    
    // Clean up localStorage
    localStorage.removeItem("userName");
    localStorage.removeItem("waMessage");
    
    // Redirect to WhatsApp with the pre-written message
    if (waMessage) {
      window.location.href = `https://wa.me/${phoneNumber}?text=${waMessage}`;
    } else {
      window.location.href = `https://wa.me/${phoneNumber}`;
    }
  }
}, 1000);