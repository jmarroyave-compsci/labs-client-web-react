import React from 'react';
import App from 'components/app'
import Layout from 'components/pages/blog/index';
import { getPosts, getTotalPages } from 'components/pages/blog/data/posts' 
import { useRouter } from 'next/router';

const Page = ( props ) => {
  var router = useRouter(); 
  var [ page ] = (router && router.query && router.query.index) ? router.query.index : []; 
  page = (page) ? parseInt(page) : 1;
  const route = { page }

  const params = { ...props, route };
  params.breadcrumbs = [{name: "about", url: '/about'}, {name: "log"}]

  return (
    <App {...params}>
      <Layout {...params}/> 
    </App>
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