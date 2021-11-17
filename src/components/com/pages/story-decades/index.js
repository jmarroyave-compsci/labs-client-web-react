import React from 'react';
import MultiLayout from "layout/multi-layout";
import config from "./.config.js";
import { fetchData } from './automata';
import Item from 'com/entities/entity/item';
import Quote from 'com/quote';

export default function Layout( props ){
	console.log(props)
	return (
		<MultiLayout
			params={props}
			config={config}
			fetch={ (params) => fetchData({ ...params, op : { op: "range", field: "releaseYear", value: [parseInt(props.decade), parseInt(props.decade) + 10] }}) }
			item={(data) => <Item type={props.type} {...data}/>}
			customTitle={`${config.page.title}: ${props.decade}s`}			
			customDescription={<Quote tag={props.decade}/>}			
            customUrl={ (params) => config.page.url(params)}
		/>
	)
}
