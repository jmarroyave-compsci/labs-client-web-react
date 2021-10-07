import React from 'react';
import App from 'components/app'
import Layout from 'components/pages/movie';
import { useRouter } from 'next/router';
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
    image {
      poster
    }
    boxOffice
    production
    language
    plot
  }
}
`;


const Page = ( props ) => {
  var router = useRouter(); 
  var [ id, name ] = (router && router.query && router.query.movie) ? router.query.movie : []; 
  name = decodeURIComponent(name).toLowerCase();

  const { loading, error, data } = useQuery(QRY, { variables : { id : id}});
  const params = { ...props, loading, error, data };
  params.data = (params.data) ? params.data.movie : null; 
  params.breadcrumbs = [{name: "movies", url: '/movies'}, {name: name}]

  return (
    <App {...params}>
      <Layout {...params}/> 
    </App>
  )
}

export default Page;