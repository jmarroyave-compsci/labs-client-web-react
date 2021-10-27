import React from 'react';
import PropTypes from 'prop-types';
import CoreProxy from 'core/ui/layout/proxy';
import MultiLayout from "layout/multi-layout";
import { useSelector, useDispatch } from 'react-redux';
import config from "./.config.js";
import { fetchData } from './automata';
import Item from 'com/entities/movie-festival/item';

export default function Layout( props ){
	const dispatch = useDispatch();
  	const state = useSelector(( state ) => state[config.automata.name] )
  	
  	if(!state) return <div/>;

  	console.log(state)

	return (
		<CoreProxy 
			xs={
			<MultiLayout
				config={config}
				type={state.params.renderer}
                url={config.page.url(state.params.entity)}
				data={state.data}
				loading={state.loading}
				error={state.error}
				onPageChange={(page) => dispatch( fetchData({ ...state.params, page: page }) ) }
				item={(data) => <Item full {...data}/>}
				params={{...state.params}}
			/>}
		/>
	)
}	
	

Layout.propTypes = {
	type: PropTypes.oneOf(["banner", "grid"]),
};