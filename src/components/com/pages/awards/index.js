import React from 'react';
import MultiLayout from "layout/multi-layout";
import config from "./.config.js";
import { fetchData } from './automata';
import Item from './com/item';
import Content from './com/content'

export default function Layout( props ){
	return (
		<MultiLayout
			params={props}
			config={config}
			fetch={ (params) => fetchData({ ...params }) }
			item={(data) => <Item full {...data}/>}
			mainCol={ (props) => <Content {...props}/> }
		/>
	)
}


