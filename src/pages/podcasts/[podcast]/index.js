import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux'
import { setPage } from 'app/state' 
import { useRouter } from 'next/router';
import Layout from 'com/pages/podcast';
import { fetchData } from 'com/pages/podcast/automata'

const Page = ( props ) => {
  const dispatch = useDispatch();
  const router = useRouter(); 

  useEffect( () => {

    var id = (router.query.podcast) ? router.query.podcast : ""; 
    var name = id;

    dispatch(setPage({
      breadcrumbs: [{name: "podcasts", url: '/podcasts'}, {name: name}],
    }));    

    dispatch( fetchData( {
      id: id
    } ) )

  }, [router.isReady])

  return (
      <Layout/> 
  )
}

export default Page;