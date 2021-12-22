let movieList =[]
function search(){
    event.preventDefault();
    let searchInput = document.getElementById("searchInput").value;

    // console.log(searchInput);
    movieList.push(searchInput);
    console.log(movieList);

    let movieListInString = JSON.stringify(movieList);
    localStorage.setItem("Movies",movieListInString);
    
    renderingMovieList()
}
function renderingMovieList(){
    let movieListInArray = JSON.parse(localStorage.getItem("Movies"))
    console.log(movieListInArray);
    
    movieList = movieListInArray;
}
renderingMovieList()