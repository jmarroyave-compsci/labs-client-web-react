import React, { useEffect } from 'react';
import Layout from 'components/pages/home';
import { useDispatch } from 'react-redux'
import { setPage } from 'app/state' 
import { getPosts } from 'components/pages/blog/data/posts' 

const Page = ( props ) => {
  const dispatcher = useDispatch();
 
  useEffect( () => {
    dispatcher(setPage({
      breadcrumbs: [],
    }));    

  }, [])

  const params = { ...props };
  return (
      <Layout {...params}/> 
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