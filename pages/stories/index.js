import React from 'react';
import App from 'components/app'
import Layout from 'components/pages/soon';

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