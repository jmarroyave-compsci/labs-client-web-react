import React from 'react';
import App from 'components/app'
import Layout from 'components/pages/stories/games';

import { gql, useQuery } from "@apollo/client";

export const QRY_DASHBOARD = gql`
  query getDashboard 
{
  dashboardGame {
  classification
  country
  genre
  rating
  total
  type
  yearReleased
  }
}
`;

const Page = ( props ) => {
  var { loading, error, data } = useQuery(QRY_DASHBOARD);
  data = (data) ? data.dashboardGame : { }; 
  const params = { ...props, loading, error, data };
  params.breadcrumbs = [{name: 'games'}]
  return (
    <App {...params}>
      <Layout {...params}/> 
    </App>
  )
}

export default Page;