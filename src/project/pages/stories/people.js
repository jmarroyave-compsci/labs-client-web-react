import React from 'react';
import App from 'components/app'
import Layout from 'components/pages/stories/people';

import { gql, useQuery } from "@apollo/client";

export const QRY_DASHBOARD = gql`
  query getDashboard 
{
  dashboardPeople {
    alive
    profession
    total
    yearBirth
  }
}
  `;

export default function Page( props ){
  var { loading, error, data } = useQuery(QRY_DASHBOARD);
  data = (data) ? data.dashboardPeople : { }; 
	const params = { loading, error, data };
  params.breadcrumbs = [{name: 'people'}]
	return (
		<App {...params}>
			<Layout {...params}/>	
		</App>
	)
}