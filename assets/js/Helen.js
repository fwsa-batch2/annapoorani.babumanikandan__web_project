// function playingSong(){
//     let audio = new Audio("./../assets/audio/Pon-Thaarame-OvaMusic.com_.mp3");
//     // audio.play();
//     if(audio != null){
//         // audio.play();
//         break;

//     }  
//     else{
//         audio.pause();
//         audio.currentTime=0;
//     }
// }

function playAllSongs(){
    let audio = new Audio("./../assets/audio/Pon-Thaarame-OvaMusic.com_.mp3");
    let audio1 = new Audio("./../assets/audio/Thaarapadhamaake-Mallumusic.info.mp3");
    let audio2 = new Audio("./../assets/audio/Praanante-Kuttyweb.xyz.mp3");
    


    if(audio != null){  
    audio.play();
    }
    else if (audio1 != null){
        
        audio1.play();
    }
    else {
       
    audio2.play();
    return null;

    }


}


// function firstSong(){
//     let audio = new Audio("./../assets/audio/Pon-Thaarame-OvaMusic.com_.mp3");
//     // audio.play();
//     if(audio!=null){
//          audio.play();
//          break; 
//     }
//     else{
//         audio.pause();
//     }
// }
function secondSong(){
    let audio = new Audio("./../assets/audio/Thaarapadhamaake-Mallumusic.info.mp3");
    audio.play();

}
function thirdSong(){
    let audio = new Audio("./../assets/audio/Praanante-Kuttyweb.xyz.mp3");
    audio.play();

}
function fourthSong(){
    let audio = new Audio("./../assets/audio/Pon-Thaarame-OvaMusic.com_.mp3");
    audio.play();

}

function firstSong(){

    let song = document.getElementsByClass("helenSongs");

    if(song.checked){
        let audio = new Audio("./../assets/audio/Pon-Thaarame-OvaMusic.com_.mp3");
    audio.play();
    }
    else{
        let audio = new Audio("./../assets/audio/Pon-Thaarame-OvaMusic.com_.mp3");
        audio.pause();
    }

}