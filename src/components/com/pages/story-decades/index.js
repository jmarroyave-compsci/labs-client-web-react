import React from 'react';
import MultiLayout from "layout/multi-layout";
import config from "./.config.js";
import { fetchData } from './automata';
import Item from 'com/entities/entity/item';
import Quote from 'com/quote';
import Content from './com/content'

export default function Layout( props ){
	return (
		<MultiLayout
			params={props}
			config={config}
			fetch={ (params) => fetchData( params ) }
			item={(data) => <Item type={props.type} {...data}/>}
			mainCol={ (props) => <Content {...props}/> }
			customTitle={(params) => `${config.page.title}: ${params.decade}s`}			
			customDescription={(params)=> (params.decade) ? <Quote tag={params.decade}/> : ""}			
            customUrl={ (params) => config.page.url(params)}
		/>
	)
}
