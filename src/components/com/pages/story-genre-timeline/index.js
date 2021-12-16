import React from 'react';
import MultiLayout from "layout/multi-layout";
import config from "./.config.js";
import { fetchData } from './automata';
import { Item } from './com/item';
import Quote from 'com/quote';
import Content from './com/content'

export default function Layout( props ){
	return (
		<MultiLayout
			params={props}
			config={config}
			fetch={ (params) => fetchData( params ) }
			item={(data) => <Item type={props.type} {...data} header={props.render != "banner"} />}
			mainCol={ (props) => <Content {...props}/> }
			customTitle={(params) => `${config.page.title}: ${params.genre}`}			
			customDescription={(params)=> (params.genre) ? <Quote tag={params.genre}/> : ""}			
            customUrl={ (params) => config.page.url(params)}
		/>
	)
}
