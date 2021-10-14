import React, { useEffect } from 'react';
import Layout from 'components/pages/home';
import { useDispatch } from 'react-redux'
import { setPage } from 'app/state' 
import { getPosts } from 'components/pages/blog/data/posts' 
import { fetchData as fetchRemakes } from 'components/pages/stories/remakes/automata'
import { fetchData as fetchMoviesHistory } from 'components/pages/stories/movies-history/automata'
import { fetchData as fetchMoviesFestivals } from 'components/pages/stories/movies-festivals/automata'

const Page = ( props ) => {
  const dispatch = useDispatch();
 
  useEffect( () => {
    dispatch(setPage({
      breadcrumbs: [],
    }));    

    dispatch( fetchRemakes( {
      entity: "movies",
      renderer: "banner",
      page: 1
    } ) )

    dispatch( fetchMoviesHistory( {
      renderer: "banner",
      page: 1
    } ) )

    dispatch( fetchMoviesFestivals( {
      renderer: "banner",
      page: 1
    } ) )

  }, [])

  const params = { ...props };
  return (
      <Layout {...params}/> 
  )
}

export async function getStaticProps( props ){
  return {
      props: {
          blog: getPosts(1, 5)
      }
  };
}


export default Page;