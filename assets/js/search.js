let movieName =[];
// console.log(movieName);
function search(){
    searchInput = document.getElementById("searchInput").value;
    console.log(searchInput);

    movieName.push(searchInput);

    // const searchedMovie = JSON.stringify(Setitem)
   


    // let movieListInArray = JSON.parse(localStorage.getItem("Movies"));
    // console.log(movieListInArray);

if(getMovieDetails(searchInput)!= null){

    window.location.href="./../pages/master.html"
}

else{

    window.location.href="./../pages/master.html"

}


}
function getMovieDetails(name){
    
    const movieList = JSON.parse(localStorage.getItem("Movies"));
    console.log(movieList);

    const movie = movieList.find(element => element.movieName == name);
    console.log(movie);

   
    return movie;

}

function showMovie(){

   
  let movie = getMovieDetails(movieName);

  console.log(movie);

    


}
showMovie();

function myFunction() {
    var popup = document.getElementById("user");
    popup.classList.toggle("show");
  }