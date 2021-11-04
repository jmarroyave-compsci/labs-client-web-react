import React from 'react'
import { useRouter } from 'next/router';
import Layout from 'com/pages/podcast/detail';

const Page = ( props ) => {
  const router = useRouter(); 
  var id = router.query?.podcast ?? ""; 

  return (
      <Layout 
        breadcrumbs={`/podcasts`} 
        id={id} 
      /> 
  )
}

/*

export async function getStaticPaths(){
  const paths = [
    { params : { "podcast" : "0002da5f-49a2-31ba-b44c-cdeabdf113cb" }},
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