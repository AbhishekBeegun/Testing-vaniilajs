const body = document.querySelector("body")

const title = document.createElement("div")
title.classList.add("title")


const titlename = document.createElement("p")
titlename.classList.add("title-name")
titlename.innerText = "Testing DOM manipulation"
titlename.style.color = "red"
titlename.style.fontSize = "2rem"




const movieslist = document.createElement("div")
movieslist.setAttribute("id","movies-list")

body.append(title)
body.append(movieslist)
title.append(titlename)

const movies = [ 
    {
        "name" : "SISU",
        "imG" : "https://cinema.mu/wp-content/uploads/2023/06/Sisu-2-500x740.jpg"
    },
    {
        "name" : "Indiana Jones",
        "imG" : "https://cinema.mu/wp-content/uploads/2023/06/indiana-jones-dial-destiny-2-500x740.jpg"
    },    {
        "name" : "Elemental",
        "imG" : "https://cinema.mu/wp-content/uploads/2023/06/Elemental-2-500x740.jpg"
    }
]
// Render movies
function renderMovies() {
    const moviesContainer = document.getElementById('movies-list');

    movies.forEach(movie => {
        const movieTemplate = document.getElementById('movieTemplate');
        const movieClone = movieTemplate.content.cloneNode(true);

        movieClone.querySelector('.movie img').src = movie.imG;
        movieClone.querySelector('.movie p').textContent = movie.name;

        moviesContainer.appendChild(movieClone);
    });
}

// Call the renderMovies function to display movies
renderMovies();

