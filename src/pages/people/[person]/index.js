import React from 'react'
import { useRouter } from 'next/router';
import Layout from 'com/pages/person/detail';

const Page = ( props ) => {
  const router = useRouter(); 
  var id = router.query?.person ?? ""; 

  return (
      <Layout 
        breadcrumbs={`/people`} 
        id={id} 
      /> 
  )
}

/*

export async function getStaticPaths(){
  const paths = [
    { params : { "person" : "nm0000158" }},
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