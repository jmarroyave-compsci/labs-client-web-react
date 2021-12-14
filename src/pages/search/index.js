import React from 'react';
import { useRouter } from 'next/router';
import Layout from 'com/pages/search/page';

const Page = ( props ) => {
  const router = useRouter(); 
  if( !router.isReady ) return null;

  const { q, page } = (router.query) ? router.query : {};

  return (
      <Layout query={q} page={page} breadcrumbs="/search"/> 
  )
}

export default Page;