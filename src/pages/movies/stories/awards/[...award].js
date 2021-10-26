import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux'
import { setPage } from 'app/state' 
import { useRouter } from 'next/router';
import Layout from 'com/pages/awards';
import { fetchData } from 'com/pages/awards/automata'

const ENTITY = "movies"

const Page = ( props ) => {
  const dispatch = useDispatch();
  const router = useRouter(); 

  useEffect( () => {
    if(!router.isReady) return;

    var { year, page } = (router.query) ? router.query : {}; 
    page = (page) ? parseInt(page) : 1;
    year = (year) ? year : 2017;

    dispatch(setPage({
      breadcrumbs: [{name: "movies", url: '/movies'}, {name: "stories", url: '/movies/stories'}, {name: "awards"}]
    }));    

    dispatch( fetchData( {
      renderer: "grid",
      year: year,
      entity: ENTITY,
      page: page,
    } ) )

  }, [])

  return (
      <Layout/> 
  )
}

export default Page;
