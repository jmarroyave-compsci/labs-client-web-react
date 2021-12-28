import React from 'react';
import MultiLayout from "layout/multi-layout";
import config from "./.config.js";
import { fetchData } from './automata';
import ItemList from './com/item_list';
import { ItemBanner } from './com/item_banner';

export default function Layout( props ){
	return (
		<MultiLayout
			params={props}
			config={config}
			fetch={ (params) => fetchData({ ...params }) }
			item={(data) => {
				return (props.render === "banner") ? <ItemBanner {...data}/> : <ItemList full {...data}/>
			}}
		/>
	)
}
