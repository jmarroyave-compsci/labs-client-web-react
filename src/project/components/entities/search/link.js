import React from 'react';
import Link from 'core/ui/link';

function SearchLinkComponent( params ) {
	return (
		<Link border={false} to={`/search/${encodeURIcomponent(slug)}`}>{this.props.children}</Link>
	);
}

export default PersonLinkComponent;
