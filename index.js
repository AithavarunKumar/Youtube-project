import {  fetchYoutubeVideos, fetchYoutubeSearch} from "./fetch.js";

//adding icons to the web page
let iconbars = document.createElement("h6");
iconbars.innerHTML = "☰"
iconbars.id = "iconBar"
//adding image to the web page
let image = document.createElement("img");
image.src = "WatchVibes.jpg"

//adding youtube icon to the web page
let WATCHVIBES = document.createElement("h1");
WATCHVIBES.id="WATCHVIBES"
WATCHVIBES.innerHTML = "WATCHVIBES";
WATCHVIBES.style.color="rgb(19, 2, 49);"

let superscript=document.createElement("span");
superscript.className="superscript"
superscript.innerHTML="IN"

let iconDiv = document.createElement("div");
iconDiv.classList.add("icon-container");
iconDiv.append(iconbars);
iconDiv.append(image);
iconDiv.append(WATCHVIBES);
iconDiv.append(superscript)


let Maindiv = document.createElement("div");
Maindiv.id = "MainDiv"
Maindiv.append(iconDiv);

//search div main
let searchDiv = document.createElement("div");
searchDiv.classList.add("search-container");

//fas fa search
let fasfasearch = document.createElement("i");
fasfasearch.classList.add("fas", "fa-search");
fasfasearch.classList.add("fas-fa-search")
//fas fa mike icon
let fasfaMicroPhone = document.createElement("i");
fasfaMicroPhone.classList.add("fas", "fa-microphone")
fasfaMicroPhone.id = "fas-fa-microPhone"

//search icon 
let searchIcon = document.createElement("div");
searchIcon.id = "search-icon"
//adding search bar to the web page
let searchBar = document.createElement("input");
searchBar.id = "input-bar"
searchBar.placeholder = "Search"


searchDiv.append(searchBar);
searchDiv.append(searchIcon);
searchDiv.append(fasfasearch);
Maindiv.append(searchDiv);
searchIcon.append(fasfasearch);
searchDiv.append(fasfaMicroPhone);


//adding right side div
let signupDiv = document.createElement("div");
signupDiv.classList.add("signUpDiv");
//bell icon
let fasfaBellIcon = document.createElement("i");
fasfaBellIcon.classList.add("fas", "fa-bell")
fasfaBellIcon.id = "fas-fa-bell"
//video icon
let fasfavideoicon = document.createElement("i");
fasfavideoicon.classList.add("fas", "fa-camera");
fasfavideoicon.id = "fas-fa-video-camera";
//fa-user-circle
let fasfauser = document.createElement("i");
fasfauser.classList.add("fas", "fa-user-circle");
fasfauser.id = "fas-fa-user-circle";

//fas - fa - Nextbutton
let fasfaNext = document.createElement("i");
fasfaNext.classList.add("fas", "fa-angle-right");
fasfaNext.id = "fas-fa-angle-right";
//fas-fa-PreviousButtton
let fasfaPervious = document.createElement("i");
fasfaPervious.classList.add("fas", "fa-angle-left");
fasfaPervious.id = "fas-fa-angle-left";


let button1=document.createElement("button");
button1.id="PreviousButtton";
button1.appendChild(fasfaPervious);
let button2=document.createElement("button");
button2.id="NextButtton";
button2.appendChild(fasfaNext)

Maindiv.append(signupDiv);
signupDiv.append(fasfaBellIcon);
signupDiv.append(fasfavideoicon);
signupDiv.append(fasfauser);

let buttondiv=document.createElement("div");
buttondiv.className="buttonDiv";
buttondiv.append(button1,button2);
document.body.appendChild(buttondiv);

button1.addEventListener('click',function(){
       if(previousToken)
       fetchImages(previousToken)
})
button2.addEventListener('click',function(){
        fetchImages(nextToken);
        
})
let body = document.body.appendChild(Maindiv);
document.body.style.margin = "0px";

// UTUBE HOME 
let searchinput = "";
let nextToken;
let previousToken;
let token = '';
searchIcon.addEventListener('click', function () {
        searchinput = searchBar.value;
        fetchImages(token)
})
//enter input value 
document.body.addEventListener('keyup', function (e) {
        if (e.key === "Enter") {
                searchinput = searchBar.value;
                fetchImages();
        }
})
//clearing the div container
let divContainer = document.createElement("div");
divContainer.className = "divContainer"

async function fetchImages(token) {
        
        let result = await fetchYoutubeSearch(searchinput,token);        
        nextToken=result.nextPageToken;
        previousToken=result.prevPageToken;
        divContainer.innerHTML = "";

        for (let i = 0; i < 15; i++) {
                let thumbnail = result.items[i].snippet.thumbnails.high.url;
                let videoTitles= result.items[i].snippet.title;
                let channelTitles = result.items[i].snippet.channelTitle;
                let div = document.createElement("div");
                div.classList = 'box';
                let img = document.createElement('img');
                img.className = "thumbnail-image"
                img.src = thumbnail
                div.appendChild(img);

                //adding video titles to the thumbnails
                let VideoTitles = document.createElement('h4');
                VideoTitles.className = "titleNames";
                VideoTitles.innerHTML = videoTitles;
                
                div.append(VideoTitles);

                //adding channelTitles to the thumbnails
                let ChannelTitles = document.createElement('h4');
                ChannelTitles.className = "channelTitle";
                ChannelTitles.innerHTML = channelTitles;

                div.append(ChannelTitles);
                divContainer.append(div);

        }
        document.body.append(divContainer);

}

fetchImages();











