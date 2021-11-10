import React from 'react'
import { useRouter } from 'next/router';
import Layout from 'com/pages/remakes/list';

const ENTITY = "tv-shows"

const Page = ( props ) => {
  const router = useRouter(); 
  var { page } = (router && router.query) ? router.query : []; 
  page = (page) ? parseInt(page) : 1;

  return (
      <Layout 
        breadcrumbs={`/tv-shows/stories/remakes`} 
        entity={ENTITY}
        page={page}
      /> 
  )
}

export default Page;