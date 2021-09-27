import React from 'react';
import Link from 'core/ui/link';

function MovieLinkComponent( params ) {
	const { id, entity, children } = params;
	return (
		<Link border={false} to={`/movie/${id}/${encodeURIComponent(entity)}`}>{children}</Link>
	);
}

export default MovieLinkComponent;
