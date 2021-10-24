import React from 'react';
import Layout from 'com/pages/soon';

const Page = ( props ) => {
  const params = { ...props };
  params.breadcrumbs = [{name: "stories"}]

  return (
      <Layout {...params}/> 
  )
}

export default Page;