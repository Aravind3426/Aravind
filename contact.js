// contact.js
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission behavior

    // Get form values
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    // Basic validation
    if (!name || !email || !message) {
        showMessage('Please fill out all fields.', 'error');
        return;
    }

    // Create an object to represent the form data
    const formData = {
        name: name,
        email: email,
        message: message
    };

    // Simulate sending data to a server (here, we just log it to the console)
    console.log('Sending contact form data:', formData);

    // Simulate a successful submission
    // In a real application, you would send formData to a server
    setTimeout(() => {
        showMessage('Your message has been sent successfully!', 'success');
        document.getElementById('contactForm').reset(); // Reset the form fields
    }, 1000);
});

function showMessage(message, type) {
    const messageElement = document.getElementById('responseMessage');
    messageElement.textContent = message;
    messageElement.className = `message ${type}`;
    messageElement.style.display = 'block';
}
