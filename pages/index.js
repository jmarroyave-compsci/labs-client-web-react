import React from 'react';
import App from 'components/app'
import Layout from 'components/pages/home';

const Page = ( props ) => {
  const params = { ...props };
  params.breadcrumbs = []
  return (
    <App {...params}>
      <Layout {...params}/> 
    </App>
  )
}

export default Page;