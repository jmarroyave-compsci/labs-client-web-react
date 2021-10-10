import React from 'react';
import Layout from "components/layout/cols-2-layout";
import Results from './results';

export default function PageComponent( props ){
  return (
    <Layout 
      mainCol={<Results {...props} />}
    />
  )
}
