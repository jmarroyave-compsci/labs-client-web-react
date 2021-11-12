import { gql } from "@apollo/client";
import { fetch }  from 'lib/graphql'; 

export const fetchData = (  ) => fetch( GET_DATA, {  } , (resp) => { return { ...resp, data: resp.data.dashboardPodcasts } } )

const GET_DATA = gql`
  query GetData
  {
    dashboardPodcasts {
      total
      author
      countries
      languages
      category
      subcategory
    }

  }
`
