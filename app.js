let movies = [
	{
		id: 1,
		title: 'The Shawshank Redemption',
		year: 1994,
		rating: 9.3,
		image: 'https://www.movieposters.com/cdn/shop/files/shawshank_eb84716b-efa9-44dc-a19d-c17924a3f7df_480x.progressive.jpg?v=1709821984',
		description:
			"The Shawshank Redemption is a 1994 film directed by Frank Darabont, based on Stephen King's novella Rita Hayworth and Shawshank Redemption. The story follows Andy Dufresne, a banker who is wrongfully convicted of murdering his wife and her lover. Sentenced to two consecutive life terms at Shawshank Prison, Andy befriends fellow inmate Ellis Red Redding.",
	},
];

const movieContainer = document.querySelector('.movie-container');

// Create a new movie
const button = document.getElementById('add');
button.addEventListener('click', addMovie);

function addMovie() {
	const title = document.getElementById('title').value;
	const rating = document.getElementById('rating').value;
	const image = document.getElementById('image').value;
	const description = document.getElementById('description').value;
	const id = movies.length + 1;

	const newMovie = {
		id,
		title,
		rating,
		image,
		description,
	};

	movies.push(newMovie);
	displayMovies();
}

// Display movies
function displayMovies() {
	movieContainer.innerHTML = ''; // Clear the container first

	movies.forEach((movie) => {
		const movieDiv = document.createElement('div');
		movieDiv.classList.add('movie'); // Optional: add a class for styling
		movieDiv.innerHTML = `
            <img src="${movie.image}" alt="${movie.title}" />
            <div class="movie-properties">
                <h2 class="movie-name">${movie.title}</h2>
                <div class="rating">
                    <span>${movie.rating}</span>
                </div>
                <p>${movie.description}</p>
            </div>
            <div class="action-buttons">
                <button class="update" data-id="${movie.id}">Update</button>
                <button class="delete" data-id="${movie.id}">Delete</button>
            </div>
        `;
		movieContainer.appendChild(movieDiv); // Append the new movie div to the container
	});

	// Add event listeners for the delete buttons
	const deleteButtons = document.querySelectorAll('.delete');
	deleteButtons.forEach((button) => {
		button.addEventListener('click', (event) => {
			const movieId = event.target.getAttribute('data-id');
			deleteMovie(parseInt(movieId)); // Call deleteMovie with the id of the clicked movie
		});
	});

	// Add event listeners for the UPDATE buttons
	const updateButtons = document.querySelectorAll('.update');
	updateButtons.forEach((button) => {
		button.addEventListener('click', (event) => {
			const movieId = event.target.getAttribute('data-id');
			populateMovieDetails(parseInt(movieId)); // Call populateMovieDetails with the id of the clicked movie
		});
	});
}

// Delete a movie by id
function deleteMovie(id) {
	// Filter the movies array to remove the movie with the given id
	movies = movies.filter((movie) => movie.id !== id);
	displayMovies(); // Re-render the movie list
}

displayMovies(); // Display the movies when the page loads

//======UPDATE SECTION ========
let updateBtn = document.getElementById('update');
let imageInput = document.getElementById('image');
let titleInput = document.getElementById('title');
let ratingInput = document.getElementById('rating');
let descriptionInput = document.getElementById('description');
let idOfMovieBeingUpdated = null;
//populateMovieDetails is called when an update button is clicked
function populateMovieDetails(id) {
	//the id is gotten from the parsing the movie.id generated while creating/adding a new movie
	console.log('the id of interest is', id);

	let movie = movies.find((movie) => {
		console.log('the id of clicked card is', movie.id);
		return movie.id == id;
	});
	console.log(movie);

	if (movie) {
		idOfMovieBeingUpdated = id;
		imageInput.value = movie.image;
		titleInput.value = movie.title;
		ratingInput.value = movie.rating;
		descriptionInput.value = movie.description;
	}
}

//The updateMovieDetails should Apply changes from the populated fields
function updateMovieDetails() {
	// const applyUpdateButton = document.getElementById('apply-updates');
	let indexOfMovieBeingUpdated = movies.findIndex((movie) => movie.id == idOfMovieBeingUpdated);

	movies[indexOfMovieBeingUpdated].image = imageInput.value;
	movies[indexOfMovieBeingUpdated].title = titleInput.value;
	movies[indexOfMovieBeingUpdated].rating = ratingInput.value;
	movies[indexOfMovieBeingUpdated].description = descriptionInput.value;

	// Clear the input fields
	imageInput.value = '';
	titleInput.value = '';
	ratingInput.value = '';
	descriptionInput.value = '';
	displayMovies();
	idOfMovieBeingUpdated = null;
}
// Add an event listener for the "SAVE" button
const applyUpdateButton = document.getElementById('apply-updates');
applyUpdateButton.addEventListener('click', updateMovieDetails);

function moviePresence() {
	if (movies.length == 0) {
		const movieContainer = document.querySelector('.movie');
		movieContainer.innerHTML = `<h1>No Movies to Display</h1>
		<p>Add your favorite movies below</p>`;
	} else {
		displayMovies();
	}
}

moviePresence();
