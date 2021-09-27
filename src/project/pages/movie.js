import React from 'react';
import App from 'components/app'
import Layout from 'components/pages/movie';
import { useParams } from "react-router-dom";

import { gql, useQuery } from "@apollo/client";

export const QRY = gql`
query getMovie($id:String!) {
  movie(id: $id){
    id
    title
    originalTitle
    country
    type
    genre
    duration
    rating {
      averageRating
      name
      votes
    }
    releasedDate
    classification
    streamBy {
      name
      yearAdded
    }
    director{
      id
    }
    cast {
      id
    }
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
  params.data = (params.data) ? params.data.movie : null; 
  params.breadcrumbs = [{name: "movies", url: '/movies'}, {name: route.name.toLowerCase()}]
	return (
		<App {...params}>
			<Layout {...params}/>	
		</App>
	)
}