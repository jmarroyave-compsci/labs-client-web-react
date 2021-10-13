import React, { useEffect } from 'react';
import Layout from 'components/pages/stories/remakes';
import { useSelector, useDispatch } from 'react-redux'
import { setPage } from 'app/state' 
import { useRouter } from 'next/router';
import { fetchData } from 'components/pages/stories/remakes/data/slice'

const Page = ( props ) => {
  const dispatcher = useDispatch();
  const router = useRouter(); 

  var [ page ] = (router && router.query && router.query.index) ? router.query.index : []; 
  page = (page) ? parseInt(page) : 1;

  useEffect( () => {

    dispatcher(setPage({
      breadcrumbs: [{name: "movies", url: '/movies'}, {name: "stories", url: '/movies/stories'}, {name: "remakes"}],
    }));    

    dispatcher( fetchData( {
      page: page,
      entity: "movies",
    } ) )

  }, [])

  return (
      <Layout/> 
  )
}

export default Page;