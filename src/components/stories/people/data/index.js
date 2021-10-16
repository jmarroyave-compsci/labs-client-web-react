import { gql } from "@apollo/client";
import { fetch }  from 'lib/graphql'; 

export const fetchData = (  ) => fetch( GET_DATA, {  } , (resp) => { return { ...resp, data: resp.data.dashboardPeople } } )

const GET_DATA = gql`
  query GetData
  {
    dashboardPeople {
      alive
      profession
      total
      yearBirth
    }
  }
`