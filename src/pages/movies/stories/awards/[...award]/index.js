import React from 'react'
import { useRouter } from 'next/router';
import Layout from 'com/pages/award/detail';

const Page = ( props ) => {
  const router = useRouter(); 
  var [ id, year ] = router.query.award ?? []; 
  year = year ?? new Date().getFullYear();

  return (
      <Layout 
        breadcrumbs={`/movies/stories/awards`} 
        id={id}
        year={year} 
      /> 
  )
}

export default Page;