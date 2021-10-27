import React from 'react';
import Link from 'core/ui/link';

function LinkComponent( params ) {
	const { id, entity, children, box } = params;
	return (
		<Link box={box} border={false} to={`/video-games/${id}`}>{children}</Link>
	);
}

export default LinkComponent;
