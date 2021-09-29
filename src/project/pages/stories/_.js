import React from 'react';
import App from 'components/app'
import Layout from 'components/pages/stories/_';

export default function Page( props ){
  const params = {  };
  params.breadcrumbs = [{name: 'stories'}]
	return (
		<App {...params}>
			<Layout {...params}/>	
		</App>
	)
}