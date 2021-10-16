import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux'
import { setPage } from 'app/state' 
import { useRouter } from 'next/router';
import Layout from 'components/stories/podcast-music';
import { fetchData } from 'components/stories/podcast-music/automata'

const Page = ( props ) => {
  const dispatch = useDispatch();
  const router = useRouter(); 

  useEffect( () => {
    var { page }  = (router.query) ? router.query : {}; 
    page = (page) ? parseInt(page) : 1;

    dispatch(setPage({
      breadcrumbs: [{name: "podcasts", url: '/podcasts'}, {name: "stories", url: '/podcasts/stories'}, {name: "music"}],
    }));    

    dispatch( fetchData( {
      renderer: "grid",
      page: page
    } ) )

  }, [])

  return (
      <Layout/> 
  )
}

export default Page;


