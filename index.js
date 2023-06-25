// const body = document.querySelector("body")

// const title = document.createElement("div")
// title.classList.add("title")


// const titlename = document.createElement("p")
// titlename.classList.add("title-name")
// titlename.innerText = "Testing DOM manipulation"
// titlename.style.color = "red"
// titlename.style.fontSize = "2rem"




// const movieslist = document.createElement("div")
// movieslist.setAttribute("id","movies-list")

// body.append(title)
// body.append(movieslist)
// title.append(titlename)

// const movies = [ 
//     {
//         "name" : "SISU",
//         "imG" : "https://cinema.mu/wp-content/uploads/2023/06/Sisu-2-500x740.jpg"
//     },
//     {
//         "name" : "Indiana Jones",
//         "imG" : "https://cinema.mu/wp-content/uploads/2023/06/indiana-jones-dial-destiny-2-500x740.jpg"
//     },    {
//         "name" : "Elemental",
//         "imG" : "https://cinema.mu/wp-content/uploads/2023/06/Elemental-2-500x740.jpg"
//     }
// ]
// // Render movies
// function renderMovies() {
//     const moviesContainer = document.getElementById('movies-list');

//     movies.forEach(movie => {
//         const movieTemplate = document.getElementById('movieTemplate');
//         const movieClone = movieTemplate.content.cloneNode(true);

//         movieClone.querySelector('.movie img').src = movie.imG;
//         movieClone.querySelector('.movie p').textContent = movie.name;

//         moviesContainer.appendChild(movieClone);
//     });
// }

// // Call the renderMovies function to display movies
// renderMovies();


// const btn2 = document.querySelector('.btn-2')

// console.log(btn2)

// function alertbtn2 () {
//     alert('btn-2 clicked')
// }

// btn2.addEventListener("click" , alertbtn2)

// const btn3 = document.querySelector('.btn-3')

// function changeColor () {
//     btn3.style.backgroundColor = "red"
//     btn3.style.scale = "1.2"
// }
// function changebtn2(){
//     btn2.style.backgroundColor = "green"
// }

// btn3.addEventListener("mouseover" , changeColor)
// btn3.addEventListener("click", changebtn2)


// project 1 random quote gen


const randomQuoteAPI = async() => {
    const res = await fetch("https://type.fit/api/quotes")
    const data = await res.json()
    let Slicedata = data.slice(0,10)    
    Slicedata = quotedata(Slicedata)
}

function quotedata(data){
    console.log(data)
    
    const quotes = document.getElementById('quotes')
    data.forEach(quote => {
        const quoteCard = document.createElement('div')
        quoteCard.classList.add('quote-card');
        const quotedesc = document.createElement('p')
        quotedesc.classList.add('quote-desc');
        quotedesc.innerText = quote.text  
        
        const quoteauthor = document.createElement('p')
        quoteauthor.classList.add('quote-author')
        quoteauthor.innerText = quote.author

        quoteCard.append(quotedesc)
        quoteCard.append(quoteauthor)
        quotes.append(quoteCard)
    }
    )


}


randomQuoteAPI()