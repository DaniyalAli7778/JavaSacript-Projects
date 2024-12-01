let songs =[{name:"Pehla ma bhi", image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyMgI6PR7z6WXtVeeRSpHbY1r05Dt7BeBWXgueZGQohjMcH2ykR5rXvhTorgPe29Df6wM&usqp=CAU", duration:"3:56"},

  {name:"Chai", image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyMgI6PR7z6WXtVeeRSpHbY1r05Dt7BeBWXgueZGQohjMcH2ykR5rXvhTorgPe29Df6wM&usqp=CAU", duration:"3:56" },
  {name:"Pehla ma bhi", image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyMgI6PR7z6WXtVeeRSpHbY1r05Dt7BeBWXgueZGQohjMcH2ykR5rXvhTorgPe29Df6wM&usqp=CAU", duration:"3:56" },
  {name:"Pehla ma bhi", image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyMgI6PR7z6WXtVeeRSpHbY1r05Dt7BeBWXgueZGQohjMcH2ykR5rXvhTorgPe29Df6wM&usqp=CAU", duration:"3:56" }
];

function showSongs(){
let cullter ="";
let songsList =songs.map((song)=>{
  cullter=`<div class="song-card">
            <div class="card-part-1">
              <img
                src="${song.image}"
                alt=""
                srcset=""
              />
              <h4> ${song.name}</h4>
            </div>
             
            <h6>${song.duration}</h6>
          </div>`
          
});
document.querySelector('.all-songs').innerHTML=cullter;

console.log();

};

showSongs();