import React from 'react';
import PropTypes from 'prop-types';
import MultiLayout from "layout/multi-layout";
import config from "./.config.js";
import Post from './com/post';

export default function Layout( props ){
  return (
    <MultiLayout
      config={config}
      type={props.render}
      mainCol={() => <Post {...props} />}
      breadcrumbs={props.breadcrumbs}
    />
  )
} 
  
Layout.propTypes = {
  render: PropTypes.oneOf(["banner", "page"]),
};