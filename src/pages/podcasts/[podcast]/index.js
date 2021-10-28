import React from 'react'
import { useRouter } from 'next/router';
import Layout from 'com/pages/podcast/detail';

const Page = ( props ) => {
  const router = useRouter(); 
  var id = router.query?['podcast'] ?? ""; 

  return (
      <Layout 
        breadcrumbs={`/podcasts`} 
        id={id} 
      /> 
  )
}

export default Page;

