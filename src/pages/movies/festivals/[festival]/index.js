import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux'
import { setPage } from 'app/state' 
import { useRouter } from 'next/router';
import Layout from 'com/pages/movie-festival';
import { fetchData } from 'com/pages/movie-festival/automata'

const Page = ( props ) => {
  const dispatch = useDispatch();
  const router = useRouter(); 

  useEffect( () => {

    var id = (router.query && router.query.festival) ? router.query.festival : ""; 
    var name = id;

    dispatch(setPage({
      breadcrumbs: [{name: "movies", url: '/movies'}, {name: "festivals", url: '/movies/festivals'}, {name: name}],
    }));    

    dispatch( fetchData( {
      id: id
    } ) )

  }, [])

  return (
      <Layout/> 
  )
}

export default Page;


