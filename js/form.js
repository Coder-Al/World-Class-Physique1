
// thank you message

const form = document.querySelector("form");

if (form) {
  form.addEventListener("submit", function(e) {
    e.preventDefault();

    const name = document.getElementById("name").value;
    const goal = document.getElementById("goal").value;
    const email = document.getElementById("email").value;

    const message = `Hello, my name is ${name}.
I am interested in your training programs.

My goal: ${goal}
Email: ${email}`;

    localStorage.setItem("waMessage", message);

    window.location.href ="../html/thank-you.html";
  });
}