// Show a thank you alert when user downloads CV
document.querySelectorAll('.btn').forEach(button => {
    button.addEventListener('click', () => {
      if (button.textContent.includes("Download CV")) {
        alert("Thanks for downloading my CV!");
      }
    });
  });
  
  // Handle contact form submission
  function sendMessage(event) {
    event.preventDefault();
  
    // Optional: you can capture input values like this
    const name = document.querySelector('.contact-form input[type="text"]').value;
    const email = document.querySelector('.contact-form input[type="email"]').value;
    const message = document.querySelector('.contact-form textarea').value;
  
    if (name && email && message) {
      alert(`Thanks, ${name}! Your message has been sent.`);
      // Reset the form
      document.querySelector('.contact-form').reset();
    } else {
      alert("Please fill in all fields.");
    }
  
    return false;
  }
  