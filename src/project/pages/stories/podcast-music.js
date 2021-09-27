import React from 'react';
import App from 'components/app'
import Layout from 'components/pages/stories/podcast-music';
import { useParams } from "react-router-dom";

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
  const { loading, error, data } = useQuery(QRY_DASHBOARD);
  const route = useParams();
  const params = { loading, error, data, route };
  params.data = (params.data) ? params.data.storiesPodcastMusic : {};
  params.breadcrumbs = [{name: 'podcasts', url: '/podcasts'}, {name: 'stories', url: '/podcasts/stories'}, {name: 'music'}]
	return (
		<App {...params}>
			<Layout {...params}/>	
		</App>
	)
}