import React from 'react';
import { useRouter } from 'next/router';
import Layout from 'com/pages/story-genre-timeline/list';

const ENTITY = "movies"

const Page = ( props ) => {
  const router = useRouter(); 
  var [ genre ] = (router?.query?.index) ? router.query.index : []; 
  genre = (genre) ? genre : "action";
  var { page } = (router && router.query) ? router.query : []; 
  page = (page) ? parseInt(page) : 1;

  return (
      <Layout entity={ENTITY} page={page} genre={genre} breadcrumbs={`/movies/stories/genre-timeline/${genre}`}/> 
  )
}

export default Page;
