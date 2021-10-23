import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import config from "./.config.js";
import { fetchData } from './automata';
import Layout from "layout/cols-2-layout";
import Results from './results';

export default function Proxy( props ){
	const dispatch = useDispatch();
  	const state = useSelector(( state ) => state[config.automata.name] )

  	if(!state) return <div/>;

	return (
	    <Layout 
			mainCol={
				<Results
					{...props}
					{...state} 
					{...state.params} 
					{...state.results}
					onPageChange={(page) => dispatch( fetchData({ ...state.params, page: page }) ) }
				/>
			}
		/>
	)
}	
