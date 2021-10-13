import React from 'react';
import App from 'components/app'
import Layout from 'components/pages/stories/remakes';
import { useRouter } from 'next/router';


const Page = ( props ) => {
  var router = useRouter(); 
  var [ page ] = (router && router.query && router.query.index) ? router.query.index : []; 
  const entity = "tv-shows";
  page = (page) ? parseInt(page) : 1;
  const route = { page, entity }
  const params = { ...props, route };
  params.breadcrumbs = [{name: "tv-shows", url: '/tv-shows'}, {name: "stories", url: '/tv-shows/stories'}, {name: "remakes"}]

  return (
    <App {...params}>
      <Layout {...params}/> 
    </App>
  )
}

export default Page;