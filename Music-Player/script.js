let songs = [

  { name: " Darling Jatt Di", url: "./Music/Darling Jatt Di Amrinder Gill 128 Kbps (1).mp3", image: " ./images/ Darling.jpg", duration: "2:56" },
  { name: "Game Changer", url: "./Music/Game Changer Surender Romio 128 Kbps.mp3", image: "./images/ GameChanger.jpg ", duration: "4:08" },
  { name: "Kissik Pushpa 2", url: "./Music/Kissik Pushpa 2 The Rule 128 Kbps.mp3", image: "./images/ Kissik.jpg", duration: "4:08" },
  { name: "Mahiyaa Sameer", url: "./Music/Mahiyaa Sameer Khan 128 Kbps.mp3 ", image: " ./images/ Mahiya.jpg", duration: "3:41" },

  {
    name: "Game Changer", url: "https://www.youtube.com/watch?v=a8HeAvHBmzk", image: "./images/ GameChanger.jpg ", duration: "4:08"
  },{name: "Game Changer", url: "./Music/Game Changer Surender Romio 128 Kbps.mp3", image: "./images/ GameChanger.jpg ", duration: "4:08"},{name: "Game Changer", url: "./Music/Game Changer Surender Romio 128 Kbps.mp3", image: "./images/ GameChanger.jpg ", duration: "4:08"},{name: "Game Changer", url: "./Music/Game Changer Surender Romio 128 Kbps.mp3", image: "./images/ GameChanger.jpg ", duration: "4:08"},{name: "Game Changer", url: "./Music/Game Changer Surender Romio 128 Kbps.mp3", image: "./images/ GameChanger.jpg ", duration: "4:08"},{name: "Game Changer", url: "./Music/Game Changer Surender Romio 128 Kbps.mp3", image: "./images/ GameChanger.jpg ", duration: "4:08"},{name: "Game Changer", url: "./Music/Game Changer Surender Romio 128 Kbps.mp3", image: "./images/ GameChanger.jpg ", duration: "4:08"},{name: "Game Changer", url: "./Music/Game Changer Surender Romio 128 Kbps.mp3", image: "./images/ GameChanger.jpg ", duration: "4:08"}
]
let audio = new Audio();
const allSongs = document.querySelector('.all-songs');

let selectedSong = 0;


function showSongs() {
  let cullter = "";
  let songsList = songs.map((song, idx) => {
    cullter += `<div class="song-card " id="${idx}">
            <div class="card-part-1">
              <img
                src="${song.image}"
                srcset=""
              />
              <h4> ${song.name}</h4>
            </div>
 
            <h6>${song.duration}</h6>
          </div>`


  });
  var poster = document.querySelector('.left');
  allSongs.innerHTML = cullter;
  audio.src = songs[selectedSong].url
  poster.style.backgroundImage = `url('${songs[selectedSong].image}') `;
  poster.style.backgroundSize = "cover";
   

};

function playMusic() {
  allSongs.addEventListener('click', (e) => {
    durationOfSong();
    if (e.target.classList.contains('song-card')) {
       selectedSong = e.target.id;
      showSongs();
      audio.play();
      if (audio.play) {
        durationOfSong();
      }
      

      document.querySelector('#stop').style.display = "inline-block";
      document.querySelector('#play').style.display = "none";
      

    }
  })
}

function musicFunctionalty() {
  let play = document.querySelector('#play').addEventListener('click', function () {
 
    document.querySelector('#stop').style.display = "inline-block";
    document.querySelector('#play').style.display = "none";   
    audio.play()
    if (audio.play) {
      durationOfSong();
    }
    

  })

  let pause = document.querySelector('#stop').addEventListener('click', function () {

    document.querySelector('#stop').style.display = "none";
    document.querySelector('#play').style.display = " inline-block";
    audio.pause();
  })
}
let forward =document.querySelector('#farward');
let backward= document.querySelector('#backword')
forward.addEventListener('click',function(){
  if(selectedSong <= songs.length){
    selectedSong++
   
    showSongs()
    musicFunctionalty()

    document.querySelector('#stop').style.display = "inline-block";
    document.querySelector('#play').style.display = "none";   
   audio.play()
   if (audio.play) {
    durationOfSong();
  }
  
  }
   
   
})
backward.addEventListener('click',function(){
  if(selectedSong >= 0){
    selectedSong--
   
    showSongs()
   musicFunctionalty()
   document.querySelector('#stop').style.display = "inline-block";
    document.querySelector('#play').style.display = "none";   
   audio.play()
   if (audio.play) {
    durationOfSong();
  }
  
  }
 
})
  function durationOfSong  (){
  
       const intervald=setInterval(()=>{
        const songDuration=    Math.floor(audio.currentTime/audio.duration *100 )
         const progress= document.querySelector(".progressBar");
        progress.style.width= songDuration + "%";
         if( audio.currentTime >= audio.duration){
          clearInterval(intervald);
           
        }
       },1000)
  
        
  

 
    
  
 }
 
 musicFunctionalty();

playMusic();
showSongs();