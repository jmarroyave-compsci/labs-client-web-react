import React from 'react';
import PropTypes from 'prop-types';
import CoreProxy from 'core/ui/layout/proxy';
import MultiLayout from "components/layout/dashboard-layout";
import { useSelector, useDispatch } from 'react-redux';
import config from "./.config.js";
import { fetchData } from './automata';
import Dashboard from './dashboard';

export default function Layout( props ){
	const dispatch = useDispatch();
  	const state = useSelector(( state ) => state[config.automata.name] )
  	
  	if(!state) return <div/>;

	return (
		<CoreProxy 
			xs={
			<MultiLayout
				type={state.params.renderer}
				title={config.page.title}
				description={config.page.description}
                url={config.page.url(state.params.entity)}
				data={state.data}
				dashboard={<Dashboard data={state.data} loading={state.loading}/>}
				loading={state.loading}
				params={{...state.params}}
			/>}
		/>
	)
}	
