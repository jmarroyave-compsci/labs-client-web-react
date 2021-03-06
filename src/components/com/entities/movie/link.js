import React from 'react';
import Link from 'core/ui/link';

function MovieLinkComponent( params ) {
	const { id, entity, children, box } = params;

	if(!id) return children;

	return (
		<Link box={box} border={false} to={`/movies/${id}`}>{children}</Link>
	);
}

export default MovieLinkComponent;
