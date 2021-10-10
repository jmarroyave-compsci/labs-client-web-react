import React from 'react';
import Layout from "components/layout/cols-2-layout";
import Banner from './banner';
import Content from './dashboard';

export default function PageComponent( props ){
  return (
    <Layout 
      banner={<Banner hero/>} 
      mainCol={<Content {...props} />}
    />
  )
}

