import React from 'react';
import App from 'components/app'
import Layout from 'components/pages/stories/awards';
import { useParams } from "react-router-dom";

export default function Page( props ){
  const route = useParams();
  const params = { route };  
  params.breadcrumbs = [{name: 'stories', url: '/stories'}, {name: 'awards'}]
	return (
		<App {...params}>
			<Layout {...params}/>	
		</App>
	)
}