

const data = [
	{ id: "movies", title: "Movies", url: "/movies", tags : ["tv", "awards"] },
	{ id: "awards", title: "Awards", url: "/stories/awards", tags : ["movies", "people", "tv"] },
	{ id: "people", title: "People", url: "/people", tags : ["awards"] },
	{ id: "podcasts", title: "Podcasts", url: "/podcasts", tags : ["podcasts"] },
	{ id: "podcast_music", title: "Music Podcasts", url: "/podcasts/stories/music", tags : ["podcasts"] },
	{ id: "tv", title: "TV", url: "/tv", tags : ["movies", "awards"] },
]


class Stories{
	constructor(){

	}

	getBy( ID ){
		const resp = [];
		data.forEach( item => {
			if(item.id === ID) return;
			if(item.tags.includes(ID)) resp.push(item);	
		})
		return resp;
	}
}

const stories = new Stories();
export default stories;