function displayMovies(category){
    let movies = JSON.parse(localStorage.getItem("movies")) || [];

let movieContainer = document.getElementById("movieContainer");

movies.forEach(function(movie) {

    if (movie.category === "Adventure") {

        movieContainer.innerHTML += `
        
            <div class="card">

              <img src=${movie.image}" alt="${movie.name}">

                <h3>${movie.name}</h3>

                <p>
                    ⏱ ${movie.duration}
                    ⭐ ${movie.rating}
                    • ${movie.category}
                </p>

                <a href="booking.html?movie=${movie.name}">
                    Book Now
                </a>

            </div>
        
        `;
    }

});
}

