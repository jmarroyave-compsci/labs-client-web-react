import React from 'react'
import { useRouter } from 'next/router';
import Layout from 'com/pages/podcast-music/list';

const Page = ( props ) => {
  const router = useRouter(); 
  var { year, page } = (router && router.query) ? router.query : []; 
  page = (page) ? parseInt(page) : 1;

  return (
      <Layout 
        breadcrumbs={`/podcasts/stories/music`} 
        page={page}
      /> 
  )
}

export default Page;