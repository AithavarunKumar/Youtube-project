const API_KEY = "AIzaSyC2_wMxDWObA44_taopavf6_45Wnyn_63k";
async function fetchYoutubeSearch(input,token){
        var Jdata=await fetch(`https://www.googleapis.com/youtube/v3/search?key=${API_KEY}&type=video&part=snippet&maxResults=15&q=${input}&pageToken=${token || "  "}`); 
        var resDetails=await Jdata.json();
        return resDetails;
}
async function fetchYoutubeVideos(videoId){
        var Jdata=await fetch(` https://www.googleapis.com/youtube/v3/videos?key=${API_KEY}&id=${videoId}&part=snippet,statistics`);
        var resDetails=await Jdata.json();  
        return resDetails
}
export {
fetchYoutubeVideos, fetchYoutubeSearch,
}

