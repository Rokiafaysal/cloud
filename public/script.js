document.addEventListener("DOMContentLoaded", function() {
    // Dynamic Clock
    function updateClock() {
        document.getElementById("clock").innerText = new Date().toLocaleTimeString();
    }
    setInterval(updateClock, 1000);
    updateClock(); // Run once to avoid delay

    // Form Submission
    document.getElementById("contactForm").addEventListener("submit", function(event) {
        event.preventDefault();
        document.getElementById("formMessage").innerText = "Thank you! Your message has been sent.";
    });
});
