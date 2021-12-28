import React from 'react';
import { useRouter } from 'next/router';
import Layout from 'com/pages/story-topics/list';

const ENTITY = "movies"

const Page = ( props ) => {
  const router = useRouter(); 
  var { page, decade, genre } = (router && router.query) ? router.query : {}; 
  decade = (decade) ? decade : new Date().getFullYear().toString().slice(0,3) + "0"
  genre = (genre) ? genre : "action";
  page = (page) ? parseInt(page) : 1;

  return (
      <Layout entity={ENTITY} page={page} decade={decade} genre={genre} breadcrumbs={`/movies/stories/topics/${decade}/${genre}`}/> 
  )
}

export default Page;
