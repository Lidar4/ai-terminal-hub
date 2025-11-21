// script.js - Typewriter Effect & Interactions

document.addEventListener('DOMContentLoaded', function() {
    const welcomeElement = document.getElementById('welcome-message');
    const text = "System Initializing... Welcome to AI Security Hub (v1.0). For educational use only.";
    let index = 0;

    function typeWriter() {
        if (index < text.length) {
            welcomeElement.textContent += text.charAt(index);
            index++;
            setTimeout(typeWriter, 50); // Speed of typing in milliseconds
        }
    }

    typeWriter(); // Start the typewriter effect

    // Optional: Add click functionality to module links if you want to load content dynamically
    const moduleLinks = document.querySelectorAll('.module-link');
    moduleLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault(); // Prevent default anchor behavior
            const moduleName = this.textContent.trim();
            alert(`Loading module: ${moduleName}\n(This is a demo. Actual content loading not implemented.)`);
            // Here you could use fetch() to load content or change the display
        });
    });
});
