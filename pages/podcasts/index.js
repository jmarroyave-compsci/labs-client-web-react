import React from 'react';
import App from 'components/app'
import Layout from 'components/pages/stories/podcasts';

import { gql, useQuery } from "@apollo/client";

export const QRY_DASHBOARD = gql`
  query getDashboard
{
  dashboardPodcasts {
    category
    language
    country
    total
    yearCreated
  }
}
  `;

const Page = ( props ) => {
  var { loading, error, data } = useQuery(QRY_DASHBOARD);
  data = (data) ? data.dashboardPodcasts : { }; 
  const params = { ...props, loading, error, data };
  params.breadcrumbs = [{name: 'podcasts'}]
  return (
    <App {...params}>
      <Layout {...params}/> 
    </App>
  )
}

export default Page;