import React from 'react';
import App from 'components/app'
import Layout from 'components/pages/search';
import { useRouter } from 'next/router';
import { gql, useQuery } from "@apollo/client";

export const QRY_RESULTS = gql`
query getResults($qry:String, $page: Int) {
  searchResults(qry: $qry, page: $page){
    entity
    entityId
    type
  }
}
`;

const Page = ( props ) => {
  const router = useRouter();
  var [ qry, page ] = (router && router.query && router.query.search) ? router.query.search : [];
  qry = decodeURIComponent(qry)
  const route = {qry, page}
  
  const { loading, error, data } = useQuery(QRY_RESULTS, { variables: { qry: qry, page: (page) ? parseInt(page) : 1 } } );
  const params = { ...props, loading, error, data, route };
  params.data = (params.data) ? params.data.searchResults : null;
  params.breadcrumbs = [{name: 'search'}]
  return (
    <App {...params}>
      <Layout {...params}/> 
    </App>
  )
}

export default Page;