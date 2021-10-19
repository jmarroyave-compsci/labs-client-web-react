import React, { useEffect } from 'react';
import Layout from 'components/pages/home';
import { useDispatch } from 'react-redux'
import { setPage } from 'app/state' 
import { getPosts } from 'components/pages/blog/data/posts' 
import { fetchData as fetchMovies } from 'components/stories/movies/automata'
import { fetchData as fetchPeople } from 'components/stories/people/automata'
import { fetchData as fetchTVShows } from 'components/stories/tv-shows/automata'
import { fetchData as fetchVideoGames } from 'components/stories/video-games/automata'
import { fetchData as fetchPodcasts } from 'components/stories/podcasts/automata'
//import { fetchData as fetchRemakes } from 'components/stories/remakes/automata'
import { fetchData as fetchPodcastsMusic } from 'components/stories/podcast-music/automata'
import { fetchData as fetchMoviesFestivals } from 'components/stories/movies-festivals/automata'
import { fetchData as fetchMoviesAwards } from 'components/stories/awards/automata'
import { fetchData as fetchProfessions } from 'components/stories/professions/automata'

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

    /*
    dispatch( fetchRemakes( {
      entity: "movies",
      renderer: "banner",
      page: 1
    } ) )
    */

    dispatch( fetchMoviesAwards( {
      renderer: "banner",
      entity: "movies",
      year: (process.env.NEXT_PUBLIC_LOCAL) ? 2005 : 2018 - (Math.floor(Math.random() * 50)),
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