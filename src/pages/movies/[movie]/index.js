import React from 'react'
import { useRouter } from 'next/router';
import Layout from 'com/pages/movie/detail';

const Page = ( props ) => {
  const router = useRouter(); 
  var id = router?.query?.movie ?? ""; 

  return (
      <Layout 
        breadcrumbs={`/movies`} 
        id={id} 
      /> 
  )
}

export async function getStaticPaths(){
  const paths = [
    { params : { movie : "tt0454876" }},
  ]
  
  return {
      paths : paths,
      fallback: false,
  }
}

export async function getStaticProps( props ){
  return { props : {} }
}

export default Page;