import React from 'react'
import Layout from 'com/pages/about-project/page';
import { getPosts } from 'data/blog' 

const Page = ( props ) => {
  return (
      <Layout {...props} breadcrumbs={`/about/project`}/> 
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