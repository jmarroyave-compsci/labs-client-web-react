import React from 'react';
import App from 'components/app'
import Layout from 'components/pages/podcast';
import { useRouter } from 'next/router';
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



const Page = ( props ) => {
  var router = useRouter(); 
  var [ id, name ] = (router && router.query && router.query.podcast) ? router.query.podcast : []; 
  name = decodeURIComponent(name).toLowerCase();

  const { loading, error, data } = useQuery(QRY, { variables : { id : id}});
  const params = { ...props, loading, error, data };
  params.data = (params.data) ? params.data.podcast : null; 
  params.breadcrumbs = [{name: "podcasts", url: '/podcasts'}, {name: name}]

  return (
    <App {...params}>
      <Layout {...params}/> 
    </App>
  )
}

export default Page;