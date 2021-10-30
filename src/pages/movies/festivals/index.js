import React from 'react'
import { useRouter } from 'next/router';
import Layout from 'com/pages/movies-festivals/list';

const Page = ( props ) => {
  const router = useRouter(); 
    var { page }  = (router.query) ? router.query : {}; 
    page = (page) ? parseInt(page) : 1;

  return (
      <Layout 
        breadcrumbs={`/movies/stories/awards`} 
        page={page}
      /> 
  )
}

export default Page;
