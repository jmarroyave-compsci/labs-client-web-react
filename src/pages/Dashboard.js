import Countries from '../components/dashboard/Countries';

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

export default function Dashbaord() {
  const { loading, error, data } = useQuery(QRY_DASHBOARD);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error { error.toString() }</p>;

  console.log(data.dashboard.countries);

  return <div>
      <h1>Dashboard</h1>
      <Countries data={data.dashboard.countries} format="graph"/>
    </div>
}