import React from 'react'
import { useRouter } from 'next/router';
import Layout from 'com/pages/awards/page';

const ENTITY = "movies"

const Page = ( props ) => {
  const router = useRouter(); 
  var { year, page } = (router.query) ? router.query : {}; 
  page = (page) ? parseInt(page) : 1;
  year = (year) ? year : 2017;

  return (
      <Layout 
        breadcrumbs={`/movies/stories/awards`} 
        year={year} 
        entity={ENTITY}
        page={page}
      /> 
  )
}

export default Page;

