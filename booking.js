// ===============================
// Get Movie Name From URL
// ===============================

const params = new URLSearchParams(window.location.search);

const movieName = params.get("movie");


// Put movie name inside the form

if (movieName) {
    document.getElementById("movie").value = movieName;
}


// ===============================
// Set Minimum Booking Date
// ===============================

const dateInput = document.getElementById("date");

const today = new Date();

const year = today.getFullYear();

const month = String(
    today.getMonth() + 1
).padStart(2, "0");

const day = String(
    today.getDate()
).padStart(2, "0");

const todayDate =
    `${year}-${month}-${day}`;

dateInput.min = todayDate;

const ticketsInput =

    document.getElementById("tickets");

const totalPriceInput =

    document.getElementById("totalPrice");

const ticketPrice = 200;

ticketsInput.addEventListener("input", function() {

    const tickets =

        Number(ticketsInput.value);

    const totalPrice =

        tickets * ticketPrice;

    totalPriceInput.value =

        totalPrice + " EGP";

});

const form =
    document.getElementById("bookingForm");


form.addEventListener("submit", function(event) {

    event.preventDefault();

    const name =
        document.getElementById("name").value;

    const email =
        document.getElementById("email").value;

    const movie =
        document.getElementById("movie").value;

    const date =
        document.getElementById("date").value;

    const tickets =
        document.getElementById("tickets").value;

const ticketPrice = 200;
const totalPrice = tickets * ticketPrice;

    const time =
        document.getElementById("time").value;

// Save booking in localStorage

    let bookings =

        JSON.parse(localStorage.getItem("bookings")) || [];

    let newBooking = {

        name: name,
        email: email,
        movie: movie,
        date: date,
        time: time,
        tickets: tickets,
ticketPrice: ticketPrice,
totalPrice: ticketPrice

    };

    bookings.push(newBooking);

    localStorage.setItem(

        "bookings",

        JSON.stringify(bookings)

    );

    // Show confirmation

    const confirmation =
        document.getElementById("confirmation");

    const bookingDetails =
        document.getElementById("bookingDetails");


    bookingDetails.innerHTML = `
        <strong>Movie:</strong> ${movie}<br>
        <strong>Name:</strong> ${name}<br>
        <strong>Email:</strong> ${email}<br>
        <strong>Date:</strong> ${date}<br>
        <strong>Tickets:</strong> ${tickets}<br>
        <strong>Ticket Price:</strong> ${ticketPrice} EGP<br>
<strong>Total Price:</strong> ${totalPrice} EGP<br>
        <strong>Showtime:</strong> ${time}

    `;


    confirmation.style.display = "flex";

});