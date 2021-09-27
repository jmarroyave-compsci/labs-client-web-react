import React from 'react';
import App from 'components/app'
import Layout from 'components/pages/stories/awards-oscar';
import { useParams } from "react-router-dom";

import { gql, useQuery } from "@apollo/client";

export const QRY_DASHBOARD = gql`
  query getDashboard{ 
    dashboard {
      countries
      genres
      movies
      types
      yearsAdded
      yearsReleased
    }
  }`;

export default function Page( props ){
  //const { loading, error, data } = useQuery(QRY_DASHBOARD);
  const route = useParams();
  //const params = { loading, error, data, route };
  const params = { route };
  params.breadcrumbs = [{name: 'awards', url: '/awards'}, {name: 'oscars'}]
	return (
		<App {...params}>
			<Layout {...params}/>	
		</App>
	)
}