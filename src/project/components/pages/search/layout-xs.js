import React from 'react';
import Body from 'core/ui/layout/body';
import Results from './results';

export default function PageComponent( props ){
	return (
		<Body>
	 		<Results {...props} />
		</Body>
	)
}