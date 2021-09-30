import React from 'react';
import App from 'components/app'
import Layout from 'components/pages/search';
import { useParams } from "react-router-dom";

import mData from 'res/mockup-data/pages/search/results';

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

export default function Page( props ){
  const route = useParams();
  const { qry, page } = route;
  const { loading, error, data } = useQuery(QRY_RESULTS, { variables: { qry: qry, page: (page) ? parseInt(page) : 1 } });
	const params = { loading, error, data, route,  };
  params.data = (params.data) ? params.data.searchResults : null;
  params.breadcrumbs = [{name: 'search'}]
	return (
		<App {...params}>
			<Layout qry={decodeURIComponent(qry)} {...params}/>	
		</App>
	)
}