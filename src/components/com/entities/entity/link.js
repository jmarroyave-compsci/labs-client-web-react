import React from 'react';
import LinkMovie from 'com/entities/movie/link';
import LinkPerson from 'com/entities/person/link';
import LinkPodcast from 'com/entities/podcast/link';
import LinkTVShow from 'com/entities/tv-show/link';
import LinkVideoGame from 'com/entities/video-game/link';
import LinkFestival from 'com/entities/movie-festival/link';

function EntityLink( params ) {
	const { id, type, children, box } = params;

	switch( type ){
		case "movie":
			return <LinkMovie box={box} id={id}>{children}</LinkMovie>
		case "person":
			return <LinkPerson box={box} id={id}>{children}</LinkPerson>
		case "podcast":
			return <LinkPodcast box={box} id={id}>{children}</LinkPodcast>
		case "tv-show":
			return <LinkTVShow box={box} id={id}>{children}</LinkTVShow>
		case "video-game":
			return <LinkVideoGame box={box} id={id}>{children}</LinkVideoGame>
		case "festival":
			return <LinkFestival box={box} id={id}>{children}</LinkFestival>
	}

	return <div>ENTITY {type} NOT FOUND</div>
}

export default EntityLink;
