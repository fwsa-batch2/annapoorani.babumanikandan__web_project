const currentUrl = window.location.search
const urlParam = new URLSearchParams(currentUrl);
const movieName = urlParam.get("movies");

console.log(movieName);

// Getting movie details.
function getMovieDetails(name) {

    const movieList = JSON.parse(localStorage.getItem("teluguMovies"));
    console.log(movieList);

    const movie = movieList.find(element => element.movieName == name);
    console.log(movie);

    addingSongs();
    return movie;

}
getMovieDetails(movieName);

// Adding movie in html.
function addingSongs() {

    const currentUrlOfPage = window.location.search;
    const urlParams = new URLSearchParams(currentUrlOfPage);
    const kannadaMovieName = urlParams.get("movies");

    const movieListInParse = JSON.parse(localStorage.getItem("teluguMovies"));

    let songs = ''

    const movie = movieListInParse.filter(movies => movies.movieName == kannadaMovieName);
    console.group("movie");
    console.log(movie);
    console.groupEnd("movie");
    const movieSong = movie[0].teluguSong;
    const movieNameOfTm = movie[0].movieName;
    const moviePosters = movie[0].moviePoster;
    const artistImg = movie[0].artistImg;
    const artistName = movie[0].artistName;

    

    songs += ` <div class='div1'>
            <span class='span1'>
                
            <a href="./../pages/musicpage.html" class="homePlaylist">Home</a> .
            <a href="#" class="homePlaylist">Playlist</a> . <a href="#" class="homePlaylist">${movieNameOfTm}</a>
                <br><br>
                <img id='moviePoster' src='${moviePosters}' alt='${movieNameOfTm}'></span>
    
            <div class='artist'>
                <span><h1>Artists</h1></span>
                <span ><img src='${artistImg}' alt='${artistName}' class='artistImg'> <p class='artistName'>${artistName}</p></span>
                <span ><img src='' alt='' class=artistImg> <p class=artistName></p></span>
              
            </div>
            <div class='div2'>

            <p id="id1"><strong>${movieNameOfTm + " Songs"}</strong></p><br><br>
                ${getSongsListHTML(movieSong)};
            </div>`;
    

    let movieSongs = document.getElementById("mainContent");
    console.log(movieSongs);

    movieSongs.innerHTML = songs;
    console.log(movieSongs);

}

// Adding songs in html.
function getSongsListHTML(songList) {
    let songsHTML = "";

    for (let song of songList){
        songsHTML += `
        <ul id='myUl'>
            <li>
                ${song.name}
            </li><br>
            <li>
                <audio controls>
                    <source src='${song.url}' type='audio/mpeg'>
                </audio><br><br>
            </li>
            
        </ul>
        `
    }

    return songsHTML;
}