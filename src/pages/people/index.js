import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux'
import { setPage } from 'app/state' 
import { useRouter } from 'next/router';
import Layout from 'com/pages/people/page';
import { fetchData } from 'com/pages/people/automata'

const Page = ( props ) => {
  const dispatch = useDispatch();
  const router = useRouter(); 

  useEffect( () => {
    dispatch(setPage({
      breadcrumbs: [{name: "people"}],
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


