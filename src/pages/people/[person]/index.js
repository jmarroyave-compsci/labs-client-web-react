import React from 'react'
import { useRouter } from 'next/router';
import Layout from 'com/pages/people/detail';

const Page = ( props ) => {
  const router = useRouter(); 
  var id = (router.query && router.query.person) ? router.query.person : ""; 

  return (
      <Layout 
        breadcrumbs={`/people`} 
        id={id} 
      /> 
  )
}

export default Page;

