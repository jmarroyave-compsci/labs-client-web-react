import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import { useDispatch } from 'react-redux'
import { setPage } from 'app/state' 
import Layout from 'components/pages/stories/movies-festivals';

const Page = ( props ) => {
  const dispatcher = useDispatch();

  useEffect( () => {

    dispatcher(setPage({
      breadcrumbs: [{name: "movies", url: '/movies'}, {name: "stories", url: '/movies/stories'}, {name: "festivals"}],
    }));    

  }, [])


  var router = useRouter(); 

  return (
    <Layout/> 
  )
}

export default Page;