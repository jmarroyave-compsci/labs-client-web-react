import React from 'react';
import EntityItem from './item';
import Grid from 'com/ui/grid';
import HList from 'com/ui/hlist';

function EntityGrid( params ) {
	const { type, format="grid" } = params;

	switch(format){
		case "hlist":
			return (
				<HList
					{...params}
					item={(item) => <EntityItem format="list" {...item} type={type}/>}
				/>
			)		
		case "grid":
		default:
			return (
				<Grid
					{...params}
					item={(item) => <EntityItem {...item} type={type}/>}
				/>
			)
	}
}

export default EntityGrid;
