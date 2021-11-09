import React from 'react';
import PropTypes from 'prop-types';
import MultiLayout from "layout/multi-layout";
import config from "./.config.js";
import Post from './com/post';

export default function Layout( props ){
  const { article } = props 

  return (
    <MultiLayout
      config={config}
      params={props}
      customTitle={article.meta.title}
      customDescription={`sprint ${article.meta.sprint} - day ${article.meta.day}`}
      mainCol={() => <Post {...props} />}
    />
  )
} 
  
Layout.propTypes = {
  render: PropTypes.oneOf(["banner", "page"]),
};