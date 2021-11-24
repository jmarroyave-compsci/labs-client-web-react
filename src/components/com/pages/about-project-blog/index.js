import React from 'react';
import { useRouter } from 'next/router'
import PropTypes from 'prop-types';
import MultiLayout from "layout/multi-layout";
import config from "./.config.js";
import Item from 'com/entities/blog/item'

export default function Layout( props ){
	const router = useRouter();
	return (
		<MultiLayout
			config={config}
			data={props.data}
			item={(data) => <Item {...data}/>}
			params={{...props, loading: false}}
			fetch={( params ) => {
				if(props.render === "banner") return
				router.push(`${config.page.url()}/${params.page}`)}
			}
		/>
	)
}	
	
Layout.propTypes = {
	render: PropTypes.oneOf(["banner", "page"]),
};