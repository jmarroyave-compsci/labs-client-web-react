
const entities = [
  {name : 'people', value: "person"},
  {name : 'movies', value: "movie"},
  {name : 'tv shows', value: "tv_show"},
  {name : 'video games', value: "video_game"},
  {name : 'podcasts', value: "podcast"},
  {name : 'movie festivals', value: "festival"},
]

export function getEntities(){
	return entities;
}

export function getEntitiesState( defaultValue=true){
	var resp = {};

	entities.forEach( e => {
		resp[e.value] = defaultValue
	})

	return resp;
}

export function getEntitiesArrayState( defaultValue=true){
	var resp = [];

	entities.forEach( e => {
		if(defaultValue)
			resp.push(e.value);
	})

	return resp;
}


export function getArrayFromState( ents ){
	var resp = [];

	Object.keys(ents).forEach( e => {
		if( ents[e] ) resp.push(e);
	})

	return resp;

}