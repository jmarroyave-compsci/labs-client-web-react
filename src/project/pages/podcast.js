import React from 'react';
import App from 'components/app'
import Layout from 'components/pages/podcast';
import { useParams } from "react-router-dom";

import { gql, useQuery } from "@apollo/client";

export const QRY = gql`
query getPodcast($id:String!) {
  podcast(id: $id){
    id
    title
    subtitle
    feedUrl
    description
    summary
    author
    link
    language
    image
    category
    subcategory
    createdDate
  }
}
`;

export default function Page( props ){
  var route = useParams(); 
  route.name = decodeURIComponent(route.name);

  const { loading, error, data } = useQuery(QRY, { variables : { id : route.id }});
  const params = { loading, error, data, route };
  params.data = (params.data) ? params.data.podcast : null; 
  params.breadcrumbs = [{name: "podcasts", url: '/podcasts'}, {name: route.name.toLowerCase()}]
	return (
		<App {...params}>
			<Layout {...params}/>	
		</App>
	)
}