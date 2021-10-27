import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux'
import { setPage } from 'app/state' 
import { useRouter } from 'next/router';
import Layout from 'com/pages/tv-show/page';
import { fetchData } from 'com/pages/tv-show/automata'

const Page = ( props ) => {
  const dispatch = useDispatch();
  const router = useRouter(); 

  useEffect( () => {

    var id = (router.query && router.query['tv-show']) ? router.query['tv-show'] : ""; 
    var name = id;

    dispatch(setPage({
      breadcrumbs: [{name: "tv-shows", url: '/tv-shows'}, {name: name}],
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


