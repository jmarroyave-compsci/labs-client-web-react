import React from 'react';
import MultiLayout from "layout/multi-layout";
import config from "./.config.js";
import Content from './com/content.server'

export default function Layout( props ){
	return (
		<MultiLayout
			params={props}
			config={config}
			mainCol={(props) => <Content {...props} />}
		/>
	)
}	
	
