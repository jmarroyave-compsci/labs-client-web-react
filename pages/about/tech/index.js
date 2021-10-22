import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux'
import { setPage } from 'app/state' 
import Layout from 'components/pages/soon';

const Page = ( props ) => {
  const dispatch = useDispatch();

  useEffect( () => {
    dispatch(setPage({
      breadcrumbs: [{name: "movies"}],
    }));    

  }, [])

  return (
      <Layout/> 
  )
}

export default Page;


