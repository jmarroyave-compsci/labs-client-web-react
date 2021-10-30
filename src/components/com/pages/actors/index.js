import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import CoreProxy from 'core/ui/layout/proxy';
import MultiLayout from "layout/multi-layout";
import { useSelector, useDispatch } from 'react-redux';
import config from "./.config.js";
import { fetchData } from './automata';
import Item from './com/item';
import Quote from 'com/quote';

export default function Layout( props ){
	const dispatch = useDispatch();
  	const state = useSelector(( state ) => state[config.automata.name] )

	useEffect( () => {
		dispatch( fetchData( {
		  renderer: props.render,
		  entity: props.entity,
		  page: props.page,
		} ) )
	}, [])
  	
  	if(!state) return <div/>;

  	console.log(state)

	return (
		<MultiLayout
			config={config}
			description={<Quote tag="actor"/>}			
            url={config.page.url(state.params.entity)}
			params={{...state.params}}
			type={state.params.renderer}
			data={state.data}
			loading={state.loading}				
			onPageChange={(page) => dispatch( fetchData({ ...state.params, page: page }) ) }
			item={(data) => <Item full {...data}/>}
			breadcrumbs={props.breadcrumbs}
		/>
	)
}	
	

Layout.propTypes = {
	type: PropTypes.oneOf(["banner", "grid"]),
};