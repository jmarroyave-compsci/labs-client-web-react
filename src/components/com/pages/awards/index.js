import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import CoreProxy from 'core/ui/layout/proxy';
import MultiLayout from "layout/multi-layout";
import { useSelector, useDispatch } from 'react-redux';
import config from "./.config.js";
import { fetchData } from './automata';
import Content from './com/content'
import Item from './com/item';

export default function Layout( props ){
	const dispatch = useDispatch();
  	const state = useSelector(( state ) => state[config.automata.name] )
  	
	useEffect( () => {
	    dispatch( fetchData( {
	      renderer: props.render,
	      year: props.year,
	      entity: props.entity,
	      page: props.page,
	    } ) )

	}, [])

  	if(!state || !state.params.entity) return <div/>;

	return (
		<MultiLayout
			config={config}			
			mainCol={( props ) => <Content {...props} />}
			type={state.params.renderer}
            url={config.page.url(state.params)}
			data={state.data}
			loading={state.loading}
			error={state.error}
			onPageChange={( params ) => dispatch( fetchData({ ...state.params, ...params }) ) }
			item={(data) => <Item entity={state.params.entity} {...data}/>}
			params={{...state.params}}
	     	breadcrumbs={props.breadcrumbs}
		/>
	)
}