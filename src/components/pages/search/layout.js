import React from 'react';
import CoreProxy from 'core/ui/layout/proxy';
import XS from "./layout-xs";
import { useSelector, useDispatch } from 'react-redux';
import config from "./.config.js";
import { fetchData } from './automata';

export default function Proxy( props ){
	const dispatch = useDispatch();
  	const state = useSelector(( state ) => state[config.automata.name] )

  	if(!state) return <div/>;

	return (
		<CoreProxy 
			xs={<XS 
				{...props} 
				{...state.params} 
				{...state.results}
				onPageChange={(page) => dispatch( fetchData({ ...state.params, page: page }) ) }
			/>}
		/>
	)
}	
