
let movies = JSON.parse(localStorage.getItem("movies")) || [];

let bookings = JSON.parse(localStorage.getItem("bookings")) || [];

let users = JSON.parse(localStorage.getItem("users")) || [];

function showSection(sectionId) {

    let sections = document.querySelectorAll(".section");
    sections.forEach(function(section) {
        section.style.display = "none";
    });
    document.getElementById(sectionId).style.display = "block";
}

function openMovieForm() {
    document.getElementById("movieForm").style.display = "block";
}

function saveMovie() {
    let name = document.getElementById("movieName").value;

    let category = document.getElementById("movieCategory").value;

    let duration = document.getElementById("movieDuration").value;

    let rating = document.getElementById("movieRating").value;

    let movieId = document.getElementById("movieId").value;

   let image = document.getElementById("movieImage").value;
if (image !== "" && !image.startsWith("images/")) {
    image = "images/" + image;
}


    if (name === "" || category === "" || duration === "" || rating === "") {

        alert("Please fill all fields");

        return;
    }

    if (movieId === "") {
        let newMovie = {
            id: Date.now(),
            name: name,
            category: category,
            duration: duration,
            rating: rating,
            image:image,
        };
        movies.push(newMovie);
    }

    else {
        let movie = movies.find(function(movie) {
            return movie.id == movieId;
        });

        movie.name = name;
        movie.category = category;
        movie.duration = duration;
        movie.rating = rating;

    }

    localStorage.setItem("movies", JSON.stringify(movies));

    clearForm();
    displayMovies();

}

function displayMovies() {

    let table = document.getElementById("movieTable");

    table.innerHTML = "";

    movies.forEach(function(movie) {

        table.innerHTML += `

            <tr>
                <td>${movie.name}</td>
                <td>${movie.category}</td>
                <td>${movie.duration}</td>
                <td>⭐ ${movie.rating}</td>
                <td>

                    <button
                        class="edit-btn"
                        onclick="editMovie(${movie.id})">
                        Edit
                    </button>

                    <button
                        class="delete-btn"
                        onclick="deleteMovie(${movie.id})">
                        Delete
                    </button>
                </td>
            </tr>
        `;
    });
    document.getElementById("movieCount").innerText = movies.length; /*number of movies*/
}

function editMovie(id) {

    let movie = movies.find(function(movie) {
        return movie.id === id;
    });

    document.getElementById("movieId").value = movie.id;

    document.getElementById("movieName").value = movie.name;

    document.getElementById("movieCategory").value = movie.category;

    document.getElementById("movieDuration").value = movie.duration;

    document.getElementById("movieRating").value = movie.rating;


    document.getElementById("movieForm").style.display = "block";

}

function deleteMovie(id) {

    let confirmDelete = confirm(
        "Are you sure you want to delete this movie?"
    );

    if (confirmDelete) {

        movies = movies.filter(function(movie) {

            return movie.id !== id;

        });

        localStorage.setItem(
            "movies",
            JSON.stringify(movies)
        );
        displayMovies();
    }

}

function clearForm() { /*every input returns empty*/

    document.getElementById("movieId").value = "";

    document.getElementById("movieName").value = "";

    document.getElementById("movieCategory").value = "";

    document.getElementById("movieDuration").value = "";

    document.getElementById("movieRating").value = "";

    document.getElementById("movieForm").style.display = "none";

}

function displayBookings() {

    let table = document.getElementById("bookingTable");

    table.innerHTML = "";


    bookings.forEach(function(booking) {

        table.innerHTML += `

            <tr>

                <td>${booking.name}</td>

                <td>${booking.movie}</td>

                <td>${booking.date}</td>

                <td>${booking.time}</td>

                <td>${booking.tickets}</td>

            </tr>

        `;

    });


    document.getElementById("bookingCount").innerText =
        bookings.length;

}

function displayUsers() {

    let table = document.getElementById("userTable");

    table.innerHTML = "";

    users.forEach(function(user) {

        table.innerHTML += `

            <tr>

                <td>${user.email}</td>

            </tr>

        `;

    });
    document.getElementById("userCount").innerText =
        users.length;
}

displayMovies();
displayBookings();
displayUsers();