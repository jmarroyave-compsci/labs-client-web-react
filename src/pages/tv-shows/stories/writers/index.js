import React from 'react';
import { useRouter } from 'next/router';
import Layout from 'com/pages/writers/list';

const ENTITY = "tv-shows"

const Page = ( props ) => {
  const router = useRouter(); 
  var { page } = (router && router.query) ? router.query : []; 
  page = (page) ? parseInt(page) : 1;

  return (
      <Layout page={page} entity={ENTITY} breadcrumbs="/tv-shows/stories/writers"/> 
  )
}

export default Page;
