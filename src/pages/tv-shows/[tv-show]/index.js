import React from 'react'
import { useRouter } from 'next/router';
import Layout from 'com/pages/tv-show/detail';

const Page = ( props ) => {
  const router = useRouter(); 
  var id = router.query?.['tv-show'] ?? ""; 

  return (
      <Layout 
        breadcrumbs={`/tv-shows`} 
        id={id} 
      /> 
  )
}

/*
export async function getStaticPaths(){
  const paths = [
    { params : { "tv-show" : "tt0454876" }},
  ]
  
  return {
      paths : paths,
      fallback: "blocking",
  }
}

export async function getStaticProps( props ){
  return { props : {} }
}
*/

export default Page;