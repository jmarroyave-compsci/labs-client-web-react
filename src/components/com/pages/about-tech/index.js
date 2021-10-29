import React from 'react';
import PropTypes from 'prop-types';
import MultiLayout from "layout/multi-layout";
import config from "./.config.js";
import Content from './com/content'

export default function Layout( props ){
	return (
		<MultiLayout
			noData
			config={config}
			type={props.render}
			mainCol={(props) => <Content {...props} />}
			breadcrumbs={props.breadcrumbs}
		/>
	)
}	
	
Layout.propTypes = {
	render: PropTypes.oneOf(["banner", "page"]),
};