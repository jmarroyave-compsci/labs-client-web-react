import React from 'react';
import Link from 'core/ui/link';

function PodcastLinkComponent( params ) {
	const { id, entity, children } = params;
	return (
		<Link border={false} to={`/podcast/${id}/${encodeURIComponent(entity)}`}>{children}</Link>
	);
}

export default PodcastLinkComponent;
