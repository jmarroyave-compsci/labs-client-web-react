import React from 'react';
import PropTypes from 'prop-types';
import CoreProxy from 'core/ui/layout/proxy';
import MultiLayout from "layout/multi-layout";
import { useSelector, useDispatch } from 'react-redux';
import config from "./.config.js";
import { fetchData } from './automata';
import Content from './content'
import Item from './item';

export default function Layout( props ){
	const dispatch = useDispatch();
  	const state = useSelector(( state ) => state[config.automata.name] )
  	
  	if(!state || !state.params.entity) return <div/>;

	return (
		<CoreProxy 
			xs={
			<MultiLayout
				config={config}			
				mainCol={( props ) => <Content {...props} />}
				type={state.params.renderer}
                url={config.page.url(state.params)}
				data={state.data}
				loading={state.loading}
				onPageChange={( params ) => dispatch( fetchData({ ...state.params, ...params }) ) }
				item={(data) => <Item full {...data}/>}
				params={{...state.params}}
			/>}
		/>
	)
}	
	

Layout.propTypes = {
	type: PropTypes.oneOf(["banner", "grid"]),
};