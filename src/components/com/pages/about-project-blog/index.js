import React from 'react';
import { useRouter } from 'next/router'
import PropTypes from 'prop-types';
import MultiLayout from "layout/multi-layout";
import config from "./.config.js";
import Item from './com/item'

export default function Layout( props ){
	const router = useRouter();

	return (
		<MultiLayout
			config={config}
			type={props.render}
			data={props.data}
			item={(data) => <Item {...data}/>}
			breadcrumbs={props.breadcrumbs}
			params={(props.route) ? props.route : { page : 1}}
			onPageChange={( page ) => router.push(`${config.page.url}/${page}`)  }
		/>
	)
}	
	
Layout.propTypes = {
	render: PropTypes.oneOf(["banner", "page"]),
};