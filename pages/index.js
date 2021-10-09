import React from 'react';
import App from 'components/app'
import Layout from 'components/pages/home';
import { getPosts } from 'components/pages/blog/data/posts' 

const Page = ( props ) => {
  const params = { ...props };
  params.breadcrumbs = []
  return (
    <App {...params}>
      <Layout {...params}/> 
    </App>
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