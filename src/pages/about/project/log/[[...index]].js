import React from 'react';
import Layout from 'com/pages/about-project-blog/page';
import { getPosts, getTotalPages } from 'data/blog' 
import { useRouter } from 'next/router';

const Page = ( props ) => {
  var router = useRouter(); 
  var [ page ] = (router && router.query && router.query.index) ? router.query.index : []; 
  page = (page) ? parseInt(page) : 1;


  return (
      <Layout {...props} page={page} breadcrumbs={`/about/project/log`}/> 
  )
}

const pageSize = 10

export async function getStaticProps( props ){
  var [ page ] = ( props.params.index ) ? props.params.index : [];
  page = (page) ? parseInt(page) : 1;

  return {
      props: {
          data: getPosts(page, pageSize)
      }
  };
}

export async function getStaticPaths() {
  const paths = [{ params : { index : [] }}]
  const pages = getTotalPages(pageSize);

  for( var i = 1; i <= pages; i++){
    paths.push({ params : { 
      index : [i.toString()],
      id: i.toString(), 
    }})
  }

  return {
      paths : paths,
      fallback: false,
  }
}


export default Page;