import React from 'react';
import PropTypes from 'prop-types';
import CoreProxy from 'core/ui/layout/proxy';
import DetailLayout from "layout/multi-layout";
import { useSelector } from 'react-redux';
import config from "./.config.js";
import Detail from './com/detail';
import Skeleton from './com/skeleton';

export default function Layout( props ){
  	const state = useSelector(( state ) => state[config.automata.name] )
  	
  	if(!state) return <div/>;

	return (
		<DetailLayout
			config={config}
		    type={props.render}
			data={state.data}
			loading={state.loading}
			error={state.error}
			detail={(data) => <Detail data={data}/>}
			skeleton={<Skeleton/>}
			params={{...state.params}}
		/>
	)
}