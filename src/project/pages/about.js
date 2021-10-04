import React from 'react';
import App from 'components/app'
import Layout from 'components/pages/about';

import { gql, useQuery } from "@apollo/client";

export const QRY = gql`
  query qry
{
   infoAbout {
    sources {
      added
      name
      url
    } 
  }
}  
  `;

export default function Page( props ){
  var { loading, error, data } = useQuery(QRY);
  data = (data) ? data.infoAbout : data;
	const params = { loading, error, data };
  params.breadcrumbs = [{name: 'about'}]
	return (
		<App {...params}>
			<Layout {...params}/>	
		</App>
	)
}