import React, { useEffect } from 'react';
import Layout from 'components/pages/stories/movies';
import { useSelector, useDispatch } from 'react-redux'
import { setPage } from 'app/state' 

import { gql, useQuery } from "@apollo/client";

export const QRY_DASHBOARD = gql`
  query getDashboard 
{
  dashboardMovies {
    awards
    classification
    country
    genre
    rating
    streamBy
    total
    type
    yearReleased
  }
}
`;

const Page = ( props ) => {
  const dispatcher = useDispatch();

  useEffect( () => {

    dispatcher(setPage({
      breadcrumbs: [{name: 'movies'}],
    }));    

  }, [])


  var { loading, error, data } = useQuery(QRY_DASHBOARD);
  data = (data) ? data.dashboardMovies : { }; 
  const params = { ...props, loading, error, data };
  return (
    <Layout {...params}/> 
  )
}

export default Page;