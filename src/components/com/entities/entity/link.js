import React from 'react';
import LinkMovie from 'com/entities/movie/link';
import LinkPerson from 'com/entities/person/link';
import LinkPodcast from 'com/entities/podcast/link';
import LinkTVShow from 'com/entities/tv-show/link';
import LinkVideoGame from 'com/entities/video-game/link';

function EntityLink( params ) {
	const { id, type, children } = params;

	switch( type ){
		case "movie":
			return <LinkMovie id={id}>{children}</LinkMovie>
		case "person":
			return <LinkPerson id={id}>{children}</LinkPerson>
		case "podcast":
			return <LinkPodcast id={id}>{children}</LinkPodcast>
		case "tv-show":
			return <LinkTVShow id={id}>{children}</LinkTVShow>
		case "video-game":
			return <LinkVideoGame id={id}>{children}</LinkVideoGame>
	}

	return <div>ENTITY {type} NOT FOUND</div>
}

export default EntityLink;
