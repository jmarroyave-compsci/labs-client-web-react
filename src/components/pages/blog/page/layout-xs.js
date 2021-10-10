import React from 'react';
import Layout from "components/layout/cols-2-layout";
import Post from './post';

export default function PageComponent( props ){
  return (
    <Layout 
      mainCol={<Post {...props} />}
    />
  )
}

