const form = document.getElementById("myform");
// Declare API Url
const urlAPI = "https://gist.githubusercontent.com/aryapradipta9/e6492383477803b233916e01f36d5465/raw/66942c739d66d3774303f84071696aa865a07077/single-sample.json"

// get ID for Album
const tTitle = document.getElementById("trackTitle");
const tArtist = document.getElementById("trackArtist");
const tAlbum = document.getElementById("trackAlbum");
const tImg = document.querySelector("img");

function onSubmit(event) {
  if (event) {
    event.preventDefault();
    console.log(event);
    alert("This is Alert!!!");
  }
}

function reqAPI(urlAPI) {
    fetch(urlAPI)//fetch api
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        const { name, album, artists } = data;
    
        // Input Data to Table
        tTitle.innerText = name;
        tArtist.innerText = artists.map((artist) => `${artist.name} `);
        tAlbum.innerText = album.name;
        tImg.src = album.images[1].url;

      })
      .catch((err) => {
        alert("API Request Failed! Please Try Again!!!", err);
      });
}
  
  reqAPI(urlAPI);

form.addEventListener("submit", onSubmit);