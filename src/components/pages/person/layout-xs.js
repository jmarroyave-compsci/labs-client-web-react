import React from 'react';
import Body from 'core/ui/layout/body';
import Dashboard from './dashboard';

export default function PageComponent( props ){
	return (
		<Body noPadding>
	 		<Dashboard {...props} />
		</Body>
	)
}