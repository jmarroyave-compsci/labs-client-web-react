import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux'
import { setPage } from 'app/state' 
import { useRouter } from 'next/router';
import Layout from 'com/pages/person/page';
import { fetchData } from 'com/pages/person/automata'

const Page = ( props ) => {
  const dispatch = useDispatch();
  const router = useRouter(); 

  useEffect( () => {

    var id = (router.query && router.query.person) ? router.query.person : ""; 
    var name = id;

    dispatch(setPage({
      breadcrumbs: [{name: "people", url: '/people'}, {name: name}],
    }));    

    dispatch( fetchData( {
      id: id
    } ) )

  }, [router.isReady])

  return (
      <Layout/> 
  )
}

export default Page;

