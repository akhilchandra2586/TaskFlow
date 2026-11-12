
// TaskFlow JavaScript

// Contact Form
const form = document.querySelector("form");

if (form) {
  form.addEventListener("submit", function(event) {
    event.preventDefault();

    const success = document.getElementById("successMessage");

    if (success) {
      success.textContent =
        "Message sent successfully! Thank you.";
    }

    form.reset();
  });
}

// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener("click", function(event) {
    const target = document.querySelector(
      this.getAttribute("href")
    );

    if (target) {
      event.preventDefault();
      target.scrollIntoView({
        behavior: "smooth"
      });
    }
  });
});

console.log("TaskFlow Website Loaded Successfully!");
