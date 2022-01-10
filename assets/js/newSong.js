const currentUrl = window.location.search;
const urlParam = new URLSearchParams(currentUrl);
const movieName = urlParam.get("movie");

console.log(movieName);


function getMovieDetails(name) {

    const movieList = JSON.parse(localStorage.getItem("Movies"));
    console.log(movieList);

    const movie = movieList.find(element => element.movieName == name);
    console.log(movie);

    addingSongs();
    return movie;

}
getMovieDetails(movieName);

function addingSongs() {

    const currentUrlOfPage = window.location.search;
    const urlParams = new URLSearchParams(currentUrlOfPage);
    const movieNames = urlParams.get("movie");
    console.log(movieNames);




    const movieListInParse = JSON.parse(localStorage.getItem("Movies"));

    let songs = ''

    const movie = movieListInParse.filter(movies => movies.movieName == movieNames);
    console.group("movie");
    console.log(movie);
    console.groupEnd("movie");
    const movieSong = movie[0].songs;
    console.log(movieSong);
    const movieNameOfTm = movie[0].movieName;
    const moviePosters = movie[0].moviePoster;
    const artistImg = movie[0].artistImg;
    const artistName = movie[0].artistName;

    

    songs += ` <div class='div1'>
            <span class='span1'>
                
                <br><br>
                <img id='abi' src='${moviePosters}' alt='${movieNameOfTm}'></span>
    
            <div class='artist'>
                <span><h1>Artists</h1></span>
                <span ><img src='${artistImg}' alt='${artistName}' class='artistImg'> <p class='artistName'>${artistName}</p></span>
                <span ><img src='' alt='' class=artistImg> <p class=artistName></p></span>
              
            </div>
            <div class='div2'>
                ${getSongsListHTML(movieSong)}
            </div>`;
    // }

    let movieSongs = document.getElementById("mainContent");
    console.log(movieSongs);

    movieSongs.innerHTML = songs;
    console.log(movieSongs);

}


function getSongsListHTML(songList) {
    let songsHTML = "";

    for (let song of songList) {
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

{/* <li>
${song.nameOfSecondSong}
</li><br>
<li>
<audio controls>
    <source src='${song.urlOfSecondSong}' type='audio/mpeg'>
</audio><br><br>
</li>
<li>
${song.nameOfThirdSong}
</li><br>
<li>
<audio controls>
    <source src='${song.urlOfThirdSong}' type='audio/mpeg'>
</audio><br><br>
</li> */}
