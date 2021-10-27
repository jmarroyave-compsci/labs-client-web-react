import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import MultiLayout from "layout/multi-layout";
import { useSelector, useDispatch } from 'react-redux';
import config from "./.config.js";
import { fetchData } from './automata';
import Dashboard from './com/dashboard';
import { number } from 'core/lib/format';

export default function Layout( props ){
	const dispatch = useDispatch();

	useEffect( () => {
	    dispatch( fetchData( {
	      renderer: props.render,
	    }))
	}, [])

  	const state = useSelector(( state ) => state[config.automata.name] )

  	if(!state) return <div/>;

  	if(state.data){
  		var total = state?.data?.total ?? 0;
  		config.page.description = config.page.description.replace("???", number(total, "0.0a").toUpperCase())
  	}

	return (
		<MultiLayout
			config={config}
			type={props.render}
            url={config.page.url(state.params.entity)}
			data={state.data}
			dashboard={(props) => <Dashboard data={state.data} loading={state.loading}/>}
			loading={state.loading}
			params={{...state.params}}
			breadcrumbs={props.breadcrumbs}
		/>
	)
}	
	

Layout.propTypes = {
	render: PropTypes.oneOf(["banner", "page"]),
};