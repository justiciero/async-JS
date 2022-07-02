const API = 'https://youtube-v31.p.rapidapi.com/search?channelId=UCpeBVLKeOgRw34NevXaxBXg&part=snippet%2Cid&order=date&maxResults=3';

const content = null || document.getElementById('content');

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '90db46ef79msh583ff5c9ec5cd14p1e18e3jsnb0b21473c170',
		'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
	}
};

async function fetchData(urlApi){
    const response = await fetch(urlApi, options);
    const data = await response.json();
    return data;
}

(async () =>{
    try{
        const videos = await fetchData(API);
        let view = `
        ${videos.items.map(video => `
        <span>
          <div class="youtube-video">
                 <div class="minatura-yt">
                     <img src="${video.snippet.thumbnails.high.url}" alt="${video.snippet.description}"class="ig-min">
                 </div>
                  <div class="yt-titulo">
                     <h3 class="titulo-yt">
                     ${video.snippet.title}
                     </h3>
                 </div>
             </div> </span>
       `).slice(0,3).join('')}
       `;
         content.innerHTML = view;
     } catch(error){
        // alert(error);
        console.log(error)
    }
})();