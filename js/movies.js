let movies = JSON.parse(localStorage.getItem("movies")) || [];

function displayMoviesByCategory(category) {

    let container = document.getElementById("movieContainer");

    if (!container) {
        return;
    }

    let categoryMovies = movies.filter(function(movie) {
        return movie.category.toLowerCase() === category.toLowerCase();
    });

    categoryMovies.forEach(function(movie) {

        container.innerHTML += `
            <div class="card">

                <img src="${movie.image}" alt="${movie.name}">

                <h3>${movie.name}</h3>

                <p>
                    ⏱ ${movie.duration}
                    ⭐ ${movie.rating}
                </p>

                <a href="booking.html?movie=${encodeURIComponent(movie.name)}">
                    Book Now
                </a>

            </div>
        `;

    });
}