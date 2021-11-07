import React from 'react';
import { useRouter } from 'next/router';
import Layout from 'com/pages/search/page';

const Page = ( props ) => {
  const router = useRouter(); 

  var { q, page } = (router.query) ? router.query : {};

  return (
      <Layout query={q} page={page}/> 
  )
}

export default Page;