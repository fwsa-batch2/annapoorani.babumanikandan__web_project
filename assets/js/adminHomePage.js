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

    // switch(){
    //     case home = cli ;
    // }
    addMovie();

}
function addMovie() {

    console.group("addingMovieInHtml");

    const movieListInParse = JSON.parse(localStorage.getItem("Movies"));
    console.log(movieListInParse);
    let len = movieListInParse.length;
    console.log(len);
    let movie = '';
    let sampleValues = movieListInParse(splice(0,2,2));
    lo
    
    // for (let i = 0; i < len; i++) {
    //     let movieNames = movieListInParse[i].movieName;
    //     console.log(movieNames);
    //     let moviePosters = movieListInParse[i].moviePoster;
    //     console.log(moviePosters);



        movie += ` <div id='movieList'>
    <img src="${sampleValues}" alt="${}" class='poster' ></div>`

        // let movieInHtml = document.getElementById('mainContent');
        // movieInHtml.innerHTML = movie;
        // console.log(movieInHtml.innerHTML);

        let movieInHtml = document.getElementById('mainContent');
        movieInHtml.innerHTML = movie;
        console.groupEnd("addingMovieInHtml");

    }

   

    