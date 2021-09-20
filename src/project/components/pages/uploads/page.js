import React from 'react';
import CoreProxy from 'core/ui/layout/proxy';
import App from 'components/app';
import XS from "./page-xs";
import { gql, useQuery } from "@apollo/client";

export const QRY_DASHBOARD = gql`
  query getDashboard{ 
    dashboard {
      actors
      countries
      directors
      genres
      lastUpdate
      movies
      people
      types
      yearsAdded
      yearsReleased
    }
  }`;

export default function Proxy( props ){
  const { loading, error, data } = useQuery(QRY_DASHBOARD);
	const { page, trends } = props;

	return (
    <App>
  		<CoreProxy 
  			xs={<XS page={page} data={data} loading={loading} error={error}/>}
  		/>
    </App>
	)
}	
