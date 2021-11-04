import React from 'react'
import { useRouter } from 'next/router';
import Layout from 'com/pages/award/detail';

const Page = ( props ) => {
  const router = useRouter(); 
  console.log( router?.query?.award)
  var [ id, year ] = router?.query?.award ?? []; 
  year = year ?? new Date().getFullYear();

  return (
      <Layout 
        breadcrumbs={`/movies/stories/awards`} 
        id={id}
        year={year} 
      /> 
  )
}
/*

export async function getStaticPaths(){
  const paths = [
    { params : { award : [ "mf00001", '2015' ] } },
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