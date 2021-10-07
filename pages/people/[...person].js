import React from 'react';
import App from 'components/app'
import Layout from 'components/pages/person';
import { useRouter } from 'next/router';
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


const Page = ( props ) => {
  var router = useRouter(); 
  var [ id, name ] = (router && router.query && router.query.person) ? router.query.person : []; 
  name = decodeURIComponent(name).toLowerCase();

  const { loading, error, data } = useQuery(QRY, { variables : { id : id}});
  const params = { ...props, loading, error, data };
  params.data = (params.data) ? params.data.person : null; 
  params.breadcrumbs = [{name: "people", url: '/people'}, {name: name}]

  return (
    <App {...params}>
      <Layout {...params}/> 
    </App>
  )
}

export default Page;