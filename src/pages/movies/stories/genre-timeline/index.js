import React from 'react';
import { useRouter } from 'next/router';
import Layout from 'com/pages/story-genre-timeline/list';

const ENTITY = "movies"

const Page = ( props ) => {
  const router = useRouter(); 
  var { page, genre } = (router && router.query) ? router.query : {}; 
  genre = (genre) ? genre : "action";
  page = (page) ? parseInt(page) : 1;

  return (
      <Layout entity={ENTITY} page={page} genre={genre} breadcrumbs={`/movies/stories/genre-timeline/${genre}`}/> 
  )
}

export default Page;
