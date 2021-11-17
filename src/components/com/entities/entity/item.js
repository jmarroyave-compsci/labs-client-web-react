import React from 'react';
import ItemMovie from 'com/entities/movie/item';
import ItemPerson from 'com/entities/person/item';
import ItemPodcast from 'com/entities/podcast/item';
import ItemTVShow from 'com/entities/tv-show/item';
import ItemVideoGame from 'com/entities/video-game/item';
import Error from 'core/ui/error';

function EntityItem( params ) {
	const { id, type, children, box } = params;

	switch( type ){
		case "movie":
			return <ItemMovie {...params}/>
		case "person":
			return <ItemPerson {...params}/>
		case "podcast":
			return <ItemPodcast {...params}/>
		case "tv-show":
			return <ItemTVShow {...params}/>
		case "video-game":
			return <ItemVideoGame {...params}/>
	}

	return <Error from={"Entity Item"} data={`ENTITY ${type} NOT FOUND`}/>	
}

export default EntityItem;
