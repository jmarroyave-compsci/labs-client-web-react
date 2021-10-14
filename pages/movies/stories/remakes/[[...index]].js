import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux'
import { setPage } from 'app/state' 
import { useRouter } from 'next/router';
import Layout from 'components/pages/stories/remakes';
import { fetchData } from 'components/pages/stories/remakes/automata'

const ENTITY = "movies";

const Page = ( props ) => {
  const dispatch = useDispatch();
  const router = useRouter(); 

  useEffect( () => {
    if(!router.isReady) return;

    var [ page ] = (router.query && router.query.index) ? router.query.index : []; 
    page = (page) ? parseInt(page) : 1;

    dispatch(setPage({
      breadcrumbs: [{name: "movies", url: '/movies'}, {name: "stories", url: '/movies/stories'}, {name: "remakes"}],
    }));    

    dispatch( fetchData( {
      renderer: "grid",
      entity: ENTITY,
      page: page
    } ) )

  }, [router.isReady])

  return (
      <Layout/> 
  )
}

export default Page;