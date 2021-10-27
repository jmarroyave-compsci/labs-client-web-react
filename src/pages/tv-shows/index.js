import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux'
import { setPage } from 'app/state' 
import { useRouter } from 'next/router';
import Layout from 'com/pages/tv-shows/page';
import { fetchData } from 'com/pages/tv-shows/automata'

const Page = ( props ) => {
  const dispatch = useDispatch();
  const router = useRouter(); 

  useEffect( () => {
    dispatch(setPage({
      breadcrumbs: [{name: "tv-shows"}],
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


