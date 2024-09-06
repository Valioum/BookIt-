document.getElementById('reservationForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent the form from submitting

    // Get values from the input fields
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const numberOfPeople = document.getElementById('numberOfPeople').value;
    const date = document.getElementById('date').value;
    const time = document.getElementById('time').value;
    const duration = document.getElementById('duration').value;

    // Create a reservation object
    const reservation = {
        name,
        email,
        numberOfPeople,
        date,
        time,
        duration
    };

    // Simulate saving (e.g., log to console)
    console.log('Reservation:', reservation);

    // Show a message
    document.getElementById('message').textContent = 'Reservation submitted successfully!';

    // Optional: Clear the form
    document.getElementById('reservationForm').reset();
});
// Collaborate