import React from 'react';
import App from 'com/app'
import Layout from 'com/pages/soon';

const Page = ( props ) => {
  const params = { ...props };
  params.breadcrumbs = [{name: "stories"}]

  return (
    <App {...params}>
      <Layout {...params}/> 
    </App>
  )
}

export default Page;