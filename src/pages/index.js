import React, { useEffect } from 'react';
import Layout from 'com/pages/home';
import { useDispatch } from 'react-redux'
import { setPage } from 'app/state' 
import { getPosts } from 'data/blog' 
import Constants from 'app/config/constants'
import { fetchData as fetchMovies } from 'com/pages/movies/automata'
import { fetchData as fetchPeople } from 'com/pages/people/automata'
import { fetchData as fetchTVShows } from 'com/pages/tv-shows/automata'
import { fetchData as fetchVideoGames } from 'com/pages/video-games/automata'
import { fetchData as fetchPodcasts } from 'com/pages/podcasts/automata'
import { fetchData as fetchRemakes } from 'com/pages/remakes/automata'
import { fetchData as fetchPodcastsMusic } from 'com/pages/podcast-music/automata'
import { fetchData as fetchMoviesFestivals } from 'com/pages/movies-festivals/automata'
import { fetchData as fetchMoviesAwards } from 'com/pages/awards/automata'
import { fetchData as fetchProfessions } from 'com/pages/professions/automata'

const Page = ( props ) => {
  const dispatch = useDispatch();
 
  useEffect( () => {
    dispatch(setPage({
      breadcrumbs: [],
    }));    

    dispatch( fetchMovies( {
      renderer: "banner",
    } ) )

    dispatch( fetchPeople( {
      renderer: "banner",
    } ) )

    dispatch( fetchTVShows( {
      renderer: "banner",
    } ) )

    dispatch( fetchPodcasts( {
      renderer: "banner",
    } ) )

    dispatch( fetchVideoGames( {
      renderer: "banner",
    } ) )

    dispatch( fetchProfessions( {
      renderer: "banner",
    } ) )

    dispatch( fetchRemakes( {
      entity: "movies",
      renderer: "banner",
      page: 1
    } ) )

    dispatch( fetchMoviesAwards( {
      renderer: "banner",
      entity: "movies",
      year: (Constants.LOCAL) ? 2005 : 2018 - (Math.floor(Math.random() * 50)),
      page: 1
    } ) )


    dispatch( fetchPodcastsMusic( {
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