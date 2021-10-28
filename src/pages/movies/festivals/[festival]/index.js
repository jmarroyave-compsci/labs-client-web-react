import React from 'react'
import { useRouter } from 'next/router';
import Layout from 'com/pages/movie-festival/detail';

const Page = ( props ) => {
  const router = useRouter(); 
  var id = (router.query && router.query.festival) ? router.query.festival : ""; 

  return (
      <Layout 
        breadcrumbs={`/movies/festivals`} 
        id={id} 
      /> 
  )
}

export default Page;