import React from 'react';
import App from 'components/app'
import Layout from 'components/pages/stories/movie-awards';

export default function Page( props ){
  const params = {  };
  params.breadcrumbs = [{name: 'movies', url: '/movies'}, {name: 'stories', url: '/movies/stories'}, {name: 'awards'}]
	return (
		<App {...params}>
			<Layout {...params}/>	
		</App>
	)
}