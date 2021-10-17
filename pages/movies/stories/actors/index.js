import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux'
import { setPage } from 'app/state' 
import { useRouter } from 'next/router';
import Layout from 'components/stories/actors';
import { fetchData } from 'components/stories/actors/automata'

const ENTITY = "movies"

const Page = ( props ) => {
  const dispatch = useDispatch();
  const router = useRouter(); 

  useEffect( () => {
    if(!router.isReady) return;

    var { year, page } = (router && router.query) ? router.query : []; 
    page = (page) ? parseInt(page) : 1;

    dispatch(setPage({
      breadcrumbs: [{name: "movies", url: '/movies'}, {name: "stories", url: '/movies/stories'}, {name: "actors"}]
    }));    

    dispatch( fetchData( {
      renderer: "grid",
      entity: ENTITY,
      page: page,
    } ) )

  }, [])

  return (
      <Layout/> 
  )
}

export default Page;
