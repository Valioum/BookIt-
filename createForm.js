const body = document.querySelector("body");
const book = document.createElement("div");

book.setAttribute("class", "bookScript");
body.append(book);
const bc = document.querySelector(".bookScript");

bc.innerHTML = '<div class="container"><h2>Reservation Form</h2><form id="reservationForm"><label for="name">Name:</label><input type="text" id="name" name="name" required><label for="email">Email:</label><input type="email" id="email" name="email" required><label for="numberOfPeople">Number of People:</label><input type="number" id="numberOfPeople" name="numberOfPeople" required min="1"><label for="date">Date:</label><input type="date" id="date" name="date" required><label for="time">Time:</label><input type="time" id="time" name="time" required><label for="duration">Duration (hours):</label><input type="number" id="duration" name="duration" value="1" min="1" required><button type="submit">Submit</button></form><div id="message"></div></div>';
