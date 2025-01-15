let movies = [
    {
      id: 1,
      image: "https://www.movieposters.com/cdn/shop/files/shawshank_eb84716b-efa9-44dc-a19d-c17924a3f7df_480x.progressive.jpg?v=1709821984",
      name: "Shawshank Redemption",
      rating: 4,
      description: "A story of hope and friendship in the most unlikely place.",
    },
    {
      id: 2,
      image: "https://www.movieposters.com/cdn/shop/files/lotr_480x.progressive.jpg?v=1709821984",
      name: "Lord of the Rings",
      rating: 5,
      description: "An epic journey in the world of Middle-earth.",
    },
  ];
  
  // DOM elements
  const movieContainer = document.querySelector(".movie-container");
  
  // Function to display movies
  function displayMovies() {
    movieContainer.innerHTML = ""; // Clear the container
  
    movies.forEach((movie) => {
      const movieDiv = document.createElement("div");
      movieDiv.classList.add("movie");
  
      movieDiv.innerHTML = `
        <img src="${movie.image}" alt="${movie.name}" />
        <div class="movie-properties">
          <h2 class="movie-name">${movie.name}</h2>
          <div class="rating">
            <ion-icon name="star"></ion-icon>
            <span>${movie.rating}</span>
          </div>
          <p>${movie.description}</p>
        </div>
        <div class="action-buttons">
          <button onclick="deleteMovie(${movie.id})">Delete</button>
        </div>
      `;
      movieContainer.appendChild(movieDiv);
    });
  }
  
  // Function to delete a movie by id
  function deleteMovie(id) {
    // Filter out the movie with the given id
    movies = movies.filter((movie) => movie.id !== id);
  
    // Update the displayed list
    displayMovies();
  }
  
  // Initial display of movies
  displayMovies()