import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux'
import { setPage } from 'app/state' 
import { useRouter } from 'next/router';
import Layout from 'com/pages/podcasts/page';
import { fetchData } from 'com/pages/podcasts/automata'

const Page = ( props ) => {
  const dispatch = useDispatch();
  const router = useRouter(); 

  useEffect( () => {
    dispatch(setPage({
      breadcrumbs: [{name: "podcasts"}],
    }));    

    dispatch( fetchData( {
      renderer: "page",
    } ) )

  }, [])

  return (
      <Layout/> 
  )
}

export default Page;


