import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import CoreProxy from 'core/ui/layout/proxy';
import MultiLayout from "layout/multi-layout";
import { useSelector, useDispatch } from 'react-redux';
import config from "./.config.js";
import { fetchData } from './automata';
import Item from './item';

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

	return (
		<MultiLayout
			type={state.params.renderer}
			config={config}
            url={config.page.url(state.params.entity)}
			data={state.data}
			loading={state.loading}		
			error={state.error}		
			onPageChange={(page) => dispatch( fetchData({ ...state.params, page: page }) ) }
			item={(data) => <Item full {...data}/>}
			params={{...state.params}}
		    breadcrumbs={props.breadcrumbs}

		/>
	)
}	
	

Layout.propTypes = {
	type: PropTypes.oneOf(["banner", "grid"]),
};