import React from 'react';
import MultiLayout from "layout/multi-layout";
import config from "./.config.js";
import Detail from './com/detail';
import Skeleton from './com/skeleton';
import { fetchData } from './automata';

export default function Layout( props ){
	return (
		<MultiLayout
			params={{
				...props,
				breadcrumbs: (state) => `${props.breadcrumbs}/${state?.data?.festival?.name ?? "loading"}`,
			}}
			config={config}
			fetch={ (params) => fetchData({ ...params }) }
			detail={(props) => <Detail data={props.data}/>}
			skeleton={<Skeleton/>}
		/>
	)
}