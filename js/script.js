const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");
const overlay = document.querySelector(".nav-overlay");
const navItems = document.querySelectorAll(".nav-links a");

/* toggle menu */

menuToggle.addEventListener("click", () => {

navLinks.classList.toggle("active");
overlay.classList.toggle("active");

});

/* click overlay closes menu */

overlay.addEventListener("click", () => {

navLinks.classList.remove("active");
overlay.classList.remove("active");

});

/* clicking link closes menu */

navItems.forEach(link => {

link.addEventListener("click", () => {

navLinks.classList.remove("active");
overlay.classList.remove("active");

});

});

const header = document.querySelector(".header");

window.addEventListener("scroll", function () {

  if (window.scrollY > 40) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }

});