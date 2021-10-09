import React from 'react';
import App from 'components/app'
import Layout from 'components/pages/stories/tv-shows';

import { gql, useQuery } from "@apollo/client";

export const QRY_DASHBOARD = gql`
  query getDashboard 
{
  dashboardTV {
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
  var { loading, error, data } = useQuery(QRY_DASHBOARD);
  data = (data) ? data.dashboardTV : { }; 
  const params = { ...props, loading, error, data };
  params.breadcrumbs = [{name: 'tv-shows'}]
  return (
    <App {...params}>
      <Layout {...params}/> 
    </App>
  )
}

export default Page;