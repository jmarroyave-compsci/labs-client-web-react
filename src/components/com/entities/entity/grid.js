import React from 'react';
import EntityItem from './item';
import Grid from 'com/ui/grid';

function EntityGrid( params ) {
	const { type } = params;

	return (
		<Grid
			{...params}
			item={(item) => <EntityItem {...item} type={type}/>}
		/>
	)
}

export default EntityGrid;
