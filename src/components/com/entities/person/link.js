import React from 'react';
import Link from 'core/ui/link';

function PersonLinkComponent( params ) {
	const { id, entity, children, box } = params;

	if(!id) return children;

	return (
		<Link box={box} border={false} to={`/people/${id}`}>{children}</Link>
	);
}

export default PersonLinkComponent;
