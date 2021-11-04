import React from 'react'
import { useRouter } from 'next/router';
import Layout from 'com/pages/movie/detail';

const Page = ( props ) => {
  const router = useRouter(); 
  var id = router?.query?.movie ?? ""; 

  return (
      <Layout 
        breadcrumbs={`/movies`} 
        id={id} 
      /> 
  )
}

export default Page;