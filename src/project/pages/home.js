import React from 'react';
import App from 'components/app'
import Layout from 'components/pages/home';
import { gql, useQuery } from "@apollo/client";

export const QRY_DASHBOARD = gql`
  query getStory
{
  storiesPodcastMusic {
    id
    title
    link
    image
  }
}
  `;

export default function Page( props ){
  const resp = useQuery(QRY_DASHBOARD);
  var { loading, error, data } = resp;
	const params = { loading, error, data };
  console.log(params.data)
  params.data = (params.data) ? params.data : {};
  params.breadcrumbs = []
	return (
		<App {...params}>
			<Layout {...params}/>	
		</App>
	)
}