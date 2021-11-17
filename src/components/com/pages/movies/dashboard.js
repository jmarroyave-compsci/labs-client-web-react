import React from 'react';
import MultiLayout from "layout/multi-layout";
import config from "./.config.js";
import Dashboard from './com/dashboard';
import { fetchData } from './automata';

export default function Layout( props ){
	return (
		<MultiLayout
    		params={{ ...props, render:"page"}}
			config={config}
			fetch={ (params) => fetchData({ ...params }) }
			dashboard={( {data, loading } ) => <Dashboard data={data} loading={loading}/>}
		/>
	)
}
