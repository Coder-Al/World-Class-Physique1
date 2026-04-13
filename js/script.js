// Get the form
const form = document.querySelector("form");

if (form) {
  form.addEventListener("submit", async function(e) {
    e.preventDefault(); // Stop normal submission
    
    // Get form values for WhatsApp message
    const name = document.getElementById("name").value;
    const goal = document.getElementById("goal").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const training = document.getElementById("training").value;
    const messageText = document.getElementById("message").value;
    
    // Build the WhatsApp message
    const waMessage = `Hello! My name is ${name}.
    
I'm interested in your training programs.

Goal: ${goal}
Training Type: ${training}
Email: ${email}
Phone: ${phone}

Additional Info: ${messageText}`;
    
    // Save to localStorage for the thank-you page to use
    localStorage.setItem("waMessage", encodeURIComponent(waMessage));
    
    // Show loading state
    const submitBtn = form.querySelector('button[type="submit"]');
    const originalText = submitBtn.textContent;
    submitBtn.textContent = "Sending...";
    submitBtn.disabled = true;
    
    // Send to Formspree (capture data)
    const formData = new FormData(form);
    
    try {
      const response = await fetch("https://formspree.io/f/xlgarzzg", {
        method: "POST",
        body: formData,
        headers: {
          "Accept": "application/json"
        }
      });
      
      if (response.ok) {
        // Success! Redirect to thank-you page
        // The thank-you page will handle the WhatsApp redirect
        window.location.href = "../html/thank-you.html";
      } else {
        // Formspree error but still redirect to WhatsApp
        alert("There was a problem saving your info. We'll still redirect you to WhatsApp.");
        window.location.href = "../html/thank-you.html";
      }
    } catch (error) {
      // Network error but still redirect to WhatsApp
      alert("Network issue. We'll still redirect you to WhatsApp.");
      window.location.href = "../html/thank-you.html";
    }
  });
}