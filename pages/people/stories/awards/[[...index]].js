import React from 'react';
import App from 'components/app'
import Layout from 'components/pages/stories/awards/layout';
import { useRouter } from 'next/router';


const Page = ( props ) => {
  var router = useRouter(); 
  var [ year, entity, page ] = (router && router.query && router.query.index) ? router.query.index : []; 
  entity = (entity) ? entity : "people";
  page = (page) ? parseInt(page) : 1;
  const route = {page, entity, year}
  const params = { ...props, route };
  params.breadcrumbs = [{name: "people", url: '/people'}, {name: "stories", url: '/people/stories'}, {name: "awards"}]

  return (
    <App {...params}>
      <Layout {...params}/> 
    </App>
  )
}

export default Page;