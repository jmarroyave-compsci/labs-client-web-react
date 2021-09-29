import React from 'react';
import App from 'components/app'
import Layout from 'components/pages/stories/awards';

export default function Page( props ){
  const params = {  };
  params.breadcrumbs = [{name: 'stories', url: '/stories'}, {name: 'awards'}]
	return (
		<App {...params}>
			<Layout {...params}/>	
		</App>
	)
}