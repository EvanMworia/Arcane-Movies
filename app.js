let movies= [{
    "id": 1,
    "title": "The Shawshank Redemption",
    "year": 1994,
    "rating": 9.3,
    "image": "https://www.movieposters.com/cdn/shop/files/shawshank_eb84716b-efa9-44dc-a19d-c17924a3f7df_480x.progressive.jpg?v=1709821984",
    "description":"The Shawshank Redemption is a 1994 film directed by Frank Darabont, based on Stephen King's novella Rita Hayworth and Shawshank Redemption. The story follows Andy Dufresne, a banker who is wrongfully convicted of murdering his wife and her lover. Sentenced to two consecutive life terms at Shawshank Prison, Andy befriends fellow inmate Ellis Red Redding."
}]
  
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
        <button onclick ="addMovie(${movie.id})">Add</button>
          <button onclick="deleteMovie(${movie.id})">Delete</button>
        </div>
      `;
      movieContainer.appendChild(movieDiv);
    });
  }
  
  //delete a movie by id
  function deleteMovie(id) {
    // filter with a given id
    movies = movies.filter((movie) => movie.id !== id);
  
    // Update
    displayMovies();
  }
  // Initial display 
displayMovies()