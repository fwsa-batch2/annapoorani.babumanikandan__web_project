let movieInArray = [];
function renderingMovie() {

    const movieListInParse = JSON.parse(localStorage.getItem("Movies"));
    if (movieListInParse == null) {
        localStorage.setItem("Movies", "[]");
    }
    console.table(movieListInParse);
    movieInArray = movieListInParse;
}
function clickHandler(event) {
    event.preventDefault();
    console.group("addingMovieInHtml");
    const movieListInParse = JSON.parse(localStorage.getItem("Movies"));
    console.log(movieListInParse);
    let len = movieListInParse.length;
    console.log(len);
    for (let i = 0; i < len; i++) {
        let movieNames = movieListInParse[i].movieName;
        console.log(movieNames);
        let moviePosters = movieListInParse[i].moviePoster;
        console.log(moviePosters);
        // let musicDirector = movieListInParse[i].musicDirector;

        // moviePoster();

        let movie = '';
        movie += ` <div id='movieList'>
    <img src="${moviePosters}" alt="${movieNames}" class='poster' ></div>`

        let movieInHtml = document.getElementById('mainContent');
        movieInHtml.innerHTML = movie;
        console.log(movieInHtml.innerHTML);
        // console.groupEnd("addingMovieInHtml");
        // document.getElementById("movieList").innerHtml += movie;
    }
}

// function moviePoster(moviePosters) {
//     let posterList = '';
//     for (let poster of moviePosters) {
//         posterList += `
//             <div id='movieList'>
//            <img src="${poster.moviePosters}" alt="${poster.movieNames}" class='poster' ></div>`
//     }
//     return posterList;
// }