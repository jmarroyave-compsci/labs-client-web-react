import React from 'react';
import App from 'components/app'
import Layout from 'components/pages/stories/podcast-music';
import { useParams } from "react-router-dom";

export default function Page( props ){
  const route = useParams();
  const params = { route };  
  params.breadcrumbs = [{name: 'podcasts', url: '/podcasts'}, {name: 'stories', url: '/podcasts/stories'}, {name: 'music'}]
	return (
		<App {...params}>
			<Layout {...params}/>	
		</App>
	)
}