import React from 'react';
import { useRouter } from 'next/router';
import Layout from 'com/pages/actors/list';

const ENTITY = "movies"

const Page = ( props ) => {
  const router = useRouter(); 
  var { page } = (router && router.query) ? router.query : []; 
  page = (page) ? parseInt(page) : 1;

  return (
      <Layout page={page} entity={ENTITY} breadcrumbs="/movies/stories/actors"/> 
  )
}

export default Page;
