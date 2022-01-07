let malayalaMoviesInArray = []

function addingMovie(event) {
    event.preventDefault();
    let movieName = document.getElementById("malayalamMovieName").value;
    console.log(movieName);
    let moviePoster = document.getElementById("malayalamMoviePoster").value;
    console.log(moviePoster);
    let musicDirector = document.getElementById("malayalamMusicDirector").value;

    let firstSongNameOfMm = document.getElementById("firstSongName").value;
    let firstSong = document.getElementById("firstSongUrl").value;
    
    let secondSongNameOfMm = document.getElementById("secondSongName").value;
    let secondSong = document.getElementById("secondSongUrl").value;

    let thirdSongNameOfMm = document.getElementById("thirdSongName").value;
    let thirdSong = document.getElementById("thirdSongUrl").value;

    let artistName = document.getElementById("artistName").value;
    let artistImg = document.getElementById("artistImg").value;

    const listOfMalayalamMovies = {
        "movieName": movieName,
        "moviePoster": moviePoster,
        "musicDirector":musicDirector,
        "malayalamSong":[{"name":firstSongNameOfMm,"url":firstSong,"name":secondSongNameOfMm,"url":secondSong ,"name":thirdSongNameOfMm,"url":thirdSong}],
        "artistName":artistName,
        "artistImg":artistImg
    }

    const validatingMovieName = validateMovieName(movieName);
    if(validatingMovieName){
        alert("This movie name is already exist!");
        return;
    }

    malayalaMoviesInArray.push(listOfMalayalamMovies);
    console.log(malayalaMoviesInArray);

    const movieListInString = JSON.stringify(malayalaMoviesInArray);
    localStorage.setItem("MalayalamMovies", movieListInString);


    renderingMovie();
    
    window.location.href = "./../pages/moreMalayalamMovies.html"
}

function renderingMovie() {

    const movieListInParse = JSON.parse(localStorage.getItem("MalayalamMovies"));
    if (movieListInParse == null) {
        localStorage.setItem("MalayalamMovies", "[]");
    }
    console.table(movieListInParse);
    malayalaMoviesInArray = movieListInParse;

}
renderingMovie();

function validateMovieName(movieNames){
    const movieListInParse = JSON.parse(localStorage.getItem("MalayalamMovies"));
    let isExist=false;
    
    if(movieListInParse!=null){
        for(let i=0;i<movieListInParse.length;i++){
            const malayalaMovieName = movieListInParse[i].movieName;
        
            if(movieNames.toLowerCase()==malayalaMovieName.toLowerCase()){
                isExist =true;
                break;
        }
    }
    return isExist;
}
}