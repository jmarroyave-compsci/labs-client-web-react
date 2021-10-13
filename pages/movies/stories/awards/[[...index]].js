import React from 'react';
import App from 'components/app'
import Layout from 'components/pages/stories/awards';
import { useRouter } from 'next/router';


const Page = ( props ) => {
  var router = useRouter(); 
  var [ year, entity, page ] = (router && router.query && router.query.index) ? router.query.index : []; 
  entity = (entity) ? entity : "movies";
  page = (page) ? parseInt(page) : 1;
  const route = {page, entity, year}
  const params = { ...props, route };
  params.breadcrumbs = [{name: "movies", url: '/movies'}, {name: "stories", url: '/movies/stories'}, {name: "awards"}]

  return (
    <App {...params}>
      <Layout {...params}/> 
    </App>
  )
}

export default Page;