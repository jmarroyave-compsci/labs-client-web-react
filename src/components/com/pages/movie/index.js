import React from 'react';
import PropTypes from 'prop-types';
import DetailLayout from "layout/detail-layout";
import { useSelector } from 'react-redux';
import config from "./.config.js";
import Detail from './detail';
import Skeleton from './skeleton';

export default function Layout( props ){
  	const state = useSelector(( state ) => state[config.automata.name] )
  	
  	if(!state) return <div/>;

	return (
		<DetailLayout
			data={state.data}
			loading={state.loading}
			detail={(data) => <Detail data={data}/>}
			skeleton={<Skeleton/>}
			params={{...state.params}}
		/>
	)
}