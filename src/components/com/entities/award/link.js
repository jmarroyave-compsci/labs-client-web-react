import React from 'react';
import Link from 'core/ui/link';

function AwardLink( params ) {
	const { box, id, year, entity, children } = params;
	return (
		<Link box={box} to={`${entity}/stories/awards/${id}/${year}`}>{children}</Link>
	);
}

export default AwardLink;
