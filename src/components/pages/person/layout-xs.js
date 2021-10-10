import React from 'react';
import Layout from "components/layout/cols-2-layout";
import Content from './content';

export default function PageComponent( props ){
  return (
    <Layout 
      mainCol={<Content {...props} />}
    />
  )
}
