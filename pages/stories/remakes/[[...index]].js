import React from 'react';
import App from 'components/app'
import Layout from 'components/pages/stories/remakes/layout';
import { useRouter } from 'next/router';


const Page = ( props ) => {
  var router = useRouter(); 
  var [ page ] = (router && router.query && router.query.index) ? router.query.index : []; 
  page = (page) ? parseInt(page) : 1;
  const route = { page }
  const params = { ...props, route };
  params.breadcrumbs = [{name: "stories", url: '/stories'}, {name: "remakes"}]

  return (
    <App {...params}>
      <Layout {...params}/> 
    </App>
  )
}

export default Page;