// Get the form
const form = document.querySelector("form");

if (form) {
  form.addEventListener("submit", async function(e) {
    e.preventDefault(); // Stop normal submission
    
    // Get form values for WhatsApp message and thank-you page
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
    localStorage.setItem("userName", name);
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
      
      // Always redirect to thank-you page, whether Formspree succeeded or not
      window.location.href = "../html/thank-you.html";
      
    } catch (error) {
      // Still redirect to thank-you page even if network error
      window.location.href = "../html/thank-you.html";
    }
  });
}