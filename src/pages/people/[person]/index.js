import React from 'react'
import { useRouter } from 'next/router';
import Layout from 'com/pages/person/detail';

const Page = ( props ) => {
  const router = useRouter(); 
  var id = (props.id) ? props.id : router.query?.person ?? ""; 

  return (
      <Layout 
        breadcrumbs={`/people`} 
        id={id} 
      /> 
  )
}

export default Page;