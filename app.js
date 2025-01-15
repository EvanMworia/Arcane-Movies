let movies = [
	// {
	// 	id: 1,
	// 	title: 'The Shawshank Redemption',
	// 	year: 1994,
	// 	rating: 9.3,
	// 	image: 'https://www.movieposters.com/cdn/shop/files/shawshank_eb84716b-efa9-44dc-a19d-c17924a3f7df_480x.progressive.jpg?v=1709821984',
	// 	description:
	// 		"The Shawshank Redemption is a 1994 film directed by Frank Darabont, based on Stephen King's novella Rita Hayworth and Shawshank Redemption. The story follows Andy Dufresne, a banker who is wrongfully convicted of murdering his wife and her lover. Sentenced to two consecutive life terms at Shawshank Prison, Andy befriends fellow inmate Ellis Red Redding.",
	// },
];

//Create a new movie

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
	const movieContainer = document.querySelector('.movie');
	movieContainer.innerHTML = '';

	movies.forEach((movie) => {
		const movieDiv = document.createElement('div');
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
                <button id="update" onclick="updateMovieDetails()">Update</button>
                <button id="delete">Delete</button>
            </div>
        `;
		movieContainer.appendChild(movieDiv); // Append the new movie div to the container
	});
}

displayMovies(); // Display the movies when the page loads

//======UPDATE SECTION ========
let updateBtn = document.getElementById('update');
let imageInput = document.getElementById('image');
let titleInput = document.getElementById('title');
let ratingInput = document.getElementById('rating');
let descriptionInput = document.getElementById('description');

function updateMovieDetails() {
	console.log('event listener activated');
	console.log(movies[0].image);

	imageInput.value = movies[0].image;
	titleInput.value = movies[0].title;
	ratingInput.value = movies[0].rating;
	descriptionInput.value = movies[0].description;

	movies.splice(movies[0].id, 1);
	displayMovies();
}

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
