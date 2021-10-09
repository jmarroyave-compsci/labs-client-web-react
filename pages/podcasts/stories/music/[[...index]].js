import React from 'react';
import App from 'components/app'
import Layout from 'components/pages/stories/podcast-music/layout';
import { useRouter } from 'next/router';


const Page = ( props ) => {
  var router = useRouter(); 
  var [ page ] = (router && router.query && router.query.index) ? router.query.index : []; 
  page = (page) ? parseInt(page) : 1;
  const route = { page }
  const params = { ...props, route };
  params.breadcrumbs = [{name: "podcasts", url: '/podcasts'}, {name: "stories", url: '/podcasts/stories'}, {name: "music"}]

  return (
    <App {...params}>
      <Layout {...params}/> 
    </App>
  )
}

export default Page;