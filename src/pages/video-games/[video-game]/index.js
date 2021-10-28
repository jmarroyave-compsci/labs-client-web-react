import React from 'react'
import { useRouter } from 'next/router';
import Layout from 'com/pages/video-game/detail';

const Page = ( props ) => {
  const router = useRouter(); 
  var id = router.query?['video-game'] ?? ""; 

  return (
      <Layout 
        breadcrumbs={`/video-games`} 
        id={id} 
      /> 
  )
}

export default Page;

