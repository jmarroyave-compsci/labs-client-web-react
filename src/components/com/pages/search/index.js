import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import config from "./.config.js";
import { fetchData } from './automata';
import { setPage } from 'app' 
import Layout from "layout/cols-2-layout";
import Results from './com/results';

export default function Proxy( props ){
	const dispatch = useDispatch();
  	const state = useSelector(( state ) => state[config.automata.name])

	useEffect( () => {
		if( props.breadcrumbs )
			dispatch(setPage({
				breadcrumbs: props.breadcrumbs,
			}));    
	}, [props.breadcrumbs])

  	
	useEffect( () => {
	    dispatch( fetchData( { qry : props.query, page: props.page } ) )
	}, []);

	if( !state ) return <div/>;

	return (
	    <Layout 
			mainCol={
				<Results
					params={state.params}
					{...props}
					{...state} 
					{...state.results}
					onPageChange={(page) => dispatch( fetchData({ ...state.params, page: page }) ) }
					onFiltersChanged={( params ) => dispatch( fetchData({ ...params }) ) }
				/>
			}
		/>
	)
}	
