const API = 'https://youtube-v31.p.rapidapi.com/search?channelId=UCpeBVLKeOgRw34NevXaxBXg&part=snippet%2Cid&order=date&maxResults=3';

const content = null || document.getElementById('content');
const content2 = null || document.getElementById('insta-content');


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

const API2 = 'https://instagram130.p.rapidapi.com/account-feed?username=oportalurbano';


const options2 = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '90db46ef79msh583ff5c9ec5cd14p1e18e3jsnb0b21473c170',
		'X-RapidAPI-Host': 'instagram130.p.rapidapi.com'
	}
};

async function datafetch(urlApi){
    const response = await fetch(urlApi, options2);
    const data = await response.json();
    return data;
}

(async () =>{
    try{
        const post = await datafetch(API2);
        let publi = `
        ${post.items.map(images => `
        <span>
        <div class="insta-post">
            <img src="${images.node.thumbnail_resourses.src}" alt="">
        </div>
    </span>   
        `
         ).slice(0,3).join('')}
        `;
        content2.innerHTML = publi;
    } catch(error){
        console.log(error)
    }
})();