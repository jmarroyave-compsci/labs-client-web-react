import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux'
import { setPage } from 'app/state' 
import { useRouter } from 'next/router';
import Layout from 'components/stories/people';
import { fetchData } from 'components/stories/people/automata'

const Page = ( props ) => {
  const dispatch = useDispatch();
  const router = useRouter(); 

  useEffect( () => {
    dispatch(setPage({
      breadcrumbs: [{name: "people"}],
    }));    

    dispatch( fetchData( {
      renderer: "grid",
    } ) )

  }, [])

  return (
      <Layout/> 
  )
}

export default Page;


