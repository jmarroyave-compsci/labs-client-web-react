import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux'
import { setPage } from 'app/state' 
import { useRouter } from 'next/router';
import Layout from 'com/pages/search';
import { fetchData } from 'com/pages/search/automata'

const Page = ( props ) => {
  const dispatch = useDispatch();
  const router = useRouter(); 

  var { q, page } = (router.query) ? router.query : {};

  useEffect( () => {
    dispatch(setPage({
      breadcrumbs: [{name: "search"}],
    }));    

    dispatch( fetchData( { qry : q, page: page } ) )
  }, [])

  return (
      <Layout/> 
  )
}

export default Page;