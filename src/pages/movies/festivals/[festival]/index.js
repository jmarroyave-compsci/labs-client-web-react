import React from 'react'
import { useRouter } from 'next/router';
import Layout from 'com/pages/movie-festival/detail';

const Page = ( props ) => {
  const router = useRouter(); 
  var id = router.query?.['festival'] ?? ""; 

  return (
      <Layout 
        breadcrumbs={`/movies/festivals`} 
        id={id} 
      /> 
  )
}

/*
export async function getStaticPaths(){
  const paths = [
    { params : { festival : "mf00001" } },
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