document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("contactForm");
    const statusMessage = document.getElementById("formStatus");

    form.addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent page reload

        // Get input values
        let name = document.getElementById("name").value.trim();
        let email = document.getElementById("email").value.trim();
        let message = document.getElementById("message").value.trim();

        // Basic validation
        if (name === "" || email === "" || message === "") {
            showStatusMessage("All fields are required!", "error");
            return;
        }

        if (!isValidEmail(email)) {
            showStatusMessage("Please enter a valid email address!", "error");
            return;
        }

        // Simulate successful submission (Here, you can integrate backend API calls)
        setTimeout(() => {
            showStatusMessage("Your message has been sent successfully!", "success");
            form.reset();
        }, 1000);
    });

    function showStatusMessage(message, type) {
        statusMessage.textContent = message;
        statusMessage.className = type;
        statusMessage.classList.remove("hidden");
    }

    function isValidEmail(email) {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    }
});
