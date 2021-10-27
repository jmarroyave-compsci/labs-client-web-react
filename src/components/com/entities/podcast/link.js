import React from 'react';
import Link from 'core/ui/link';

function PodcastLinkComponent( params ) {
	const { id, entity, children, box } = params;

	return (
		<Link box={box} border={true} to={`/podcasts/${id}`}>{children}</Link>
	);
}

export default PodcastLinkComponent;
