import React from 'react';
import App from 'components/app'
import Layout from 'components/pages/game';
import { useRouter } from 'next/router';
import { gql, useQuery } from "@apollo/client";

export const QRY = gql`
query get($id:String!) {
  game(id: $id){
    id
    title
    country
    type
    genre
    rating {
      averageRating
      name
      votes
    }
    releasedDate
    director{
      id
    }
    cast {
      id
    }
    image {
      poster
    }
    boxOffice
    production
    language
  }
}
`;


const Page = ( props ) => {
  var router = useRouter(); 
  var [ id, name ] = (router && router.query && router.query.page) ? router.query.page : []; 
  name = decodeURIComponent(name).toLowerCase();

  const { loading, error, data } = useQuery(QRY, { variables : { id : id}});
  const params = { ...props, loading, error, data };
  params.data = (params.data) ? params.data.game : null; 
  params.breadcrumbs = [{name: "games", url: '/games'}, {name: name}]

  return (
    <App {...params}>
      <Layout {...params}/> 
    </App>
  )
}

export default Page;