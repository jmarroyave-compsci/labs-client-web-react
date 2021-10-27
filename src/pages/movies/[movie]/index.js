import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux'
import { setPage } from 'app/state' 
import { useRouter } from 'next/router';
import Layout from 'com/pages/movie/page';
import { fetchData } from 'com/pages/movie/automata'

const Page = ( props ) => {
  const dispatch = useDispatch();
  const router = useRouter(); 

  useEffect( () => {

    var id = (router.query && router.query.movie) ? router.query.movie : ""; 
    var name = id;

    dispatch(setPage({
      breadcrumbs: [{name: "movies", url: '/movies'}, {name: name}],
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


