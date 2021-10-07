import React from 'react';
import Link from 'core/ui/link';

function PodcastLinkComponent( params ) {
	const { id, entity, children } = params;

	return (
		<Link border={true} to={`/podcasts/${id}/${encodeURIComponent(entity)}`}>{children}</Link>
	);
}

export default PodcastLinkComponent;
