import React from 'react';
import Link from 'core/ui/link';

function PersonLinkComponent( params ) {
	const { id, entity, children } = params;
	return (
		<Link border={false} to={`/people/${id}`}>{children}</Link>
	);
}

export default PersonLinkComponent;
