import React from 'react';
import App from 'components/app'
import Layout from 'components/pages/person';
import { useParams } from "react-router-dom";

import { gql, useQuery } from "@apollo/client";

export const QRY = gql`
query getPerson($id:String!) {
  person(id: $id){
    id
    name
    birthDate
    profession
    awards {
      category
      name
      won
      year
    }
    references {
      imdb
    }
  }
}
`;

export default function Page( props ){
  var route = useParams(); 
  route.name = decodeURIComponent(route.name);

  const { loading, error, data } = useQuery(QRY, { variables : { id : route.id}});
  const params = { loading, error, data, route };
  params.data = (params.data) ? params.data.person : null; 
  params.breadcrumbs = [{name: "people", url: '/people'}, {name: route.name.toLowerCase()}]
	return (
		<App {...params}>
			<Layout {...params}/>	
		</App>
	)
}