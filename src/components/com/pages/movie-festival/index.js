import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux'
import PropTypes from 'prop-types';
import CoreProxy from 'core/ui/layout/proxy';
import DetailLayout from "layout/multi-layout";
import { useSelector } from 'react-redux';
import config from "./.config.js";
import Detail from './com/detail';
import Skeleton from 'com/default/skeleton';
import { fetchData } from './automata'

export default function Layout( props ){
	const dispatch = useDispatch();
  	const state = useSelector(( state ) => state[config.automata.name] )
  	
	useEffect( () => {
	    dispatch( fetchData( {
	      id: props.id
	    } ) )
	}, [])


  	if(!state) return <div/>;

	return (
		<DetailLayout
			config={config}
		    type={props.render}
			data={state.data}
			loading={state.loading}
			error={state.error}
			detail={(props) => <Detail data={props.data}/>}
			skeleton={<Skeleton/>}
			params={{...state.params}}
			breadcrumbs={`${props.breadcrumbs}/${state?.data?.name ?? "loading"}`}
		/>
	)
}