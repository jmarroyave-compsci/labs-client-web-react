import React from 'react';
import ItemMovie from 'com/entities/movie/item';
import ItemPerson from 'com/entities/person/item';
import ItemPodcast from 'com/entities/podcast/item';
import ItemTVShow from 'com/entities/tv-show/item';
import ItemVideoGame from 'com/entities/video-game/item';
import ItemMovieFestival from 'com/entities/movie-festival/item';
import Error from 'core/ui/error';

function EntityItem( params ) {
	const { type } = params;

	switch( type ){
		case "movie":
			return <ItemMovie {...params}/>
		case "movieFestival":
			return <ItemMovieFestival {...params}/>
		case "person":
			return <ItemPerson {...params}/>
		case "podcast":
			return <ItemPodcast {...params}/>
		case "tvShow":
			return <ItemTVShow {...params}/>
		case "videoGame":
			return <ItemVideoGame {...params}/>
	}

	return <Error from={"Entity Item"} data={`ENTITY ${type} NOT FOUND`}/>	
}

export default EntityItem;
