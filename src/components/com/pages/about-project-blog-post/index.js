import React from 'react';
import PropTypes from 'prop-types';
import MultiLayout from "layout/multi-layout";
import config from "./.config.js";
import Post from './com/post';

export default function Layout( props ){
  const { article } = props 

  return (
    <MultiLayout
      noData
      config={config}
      title={article.meta.title}
      description={`sprint ${article.meta.sprint} - day ${article.meta.day}`}
      type={props.render}
      mainCol={() => <Post {...props} />}
      breadcrumbs={props.breadcrumbs}
    />
  )
} 
  
Layout.propTypes = {
  render: PropTypes.oneOf(["banner", "page"]),
};