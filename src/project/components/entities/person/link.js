import React from 'react';
import Link from 'core/ui/link';

function PersonLinkComponent( params ) {
	const { id, entity, children } = params;
	return (
		<Link border={false} to={`/person/${id}/${encodeURIComponent(entity)}`}>{children}</Link>
	);
}

export default PersonLinkComponent;
