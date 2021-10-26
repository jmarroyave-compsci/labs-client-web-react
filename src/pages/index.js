import React from 'react';
import Layout from 'com/pages/home/page';
import { getPosts } from 'data/blog' 

const Page = ( props ) => {
  const params = { ...props };
  return (
      <Layout {...params} breadcrumbs="/"/> 
  )
}

export async function getStaticProps( props ){
  return {
      props: {
          blog: getPosts(1, 5)
      }
  };
}


export default Page;