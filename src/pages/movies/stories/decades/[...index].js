import React from 'react';
import { useRouter } from 'next/router';
import Layout from 'com/pages/story-decades/list';

const ENTITY = "movies"
const TYPE = "movie"

const Page = ( props ) => {
  const router = useRouter(); 
  var [ decade ] = (router?.query?.index) ? router.query.index : []; 
  decade = (decade) ? decade : new Date().getFullYear().toString().slice(0,3) + "0"
  var { page } = (router && router.query) ? router.query : []; 
  page = (page) ? parseInt(page) : 1;

  return (
      <Layout page={page} decade={decade} type={TYPE} entity={ENTITY} breadcrumbs={`/movies/stories/decades/${decade}`}/> 
  )
}

export default Page;
