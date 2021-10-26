import React from 'react';
import Link from 'core/ui/link';

function LinkComponent( params ) {
	const { id, children } = params;
	return (
		<Link box border={false} to={`/movies/festivals/${id}`}>{children}</Link>
	);
}

export default LinkComponent;
