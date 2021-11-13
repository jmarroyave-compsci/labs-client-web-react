import { gql } from "@apollo/client";
import { fetch }  from 'lib/graphql'; 

export const fetchData = ( id ) => fetch( GET_DATA, { id: id } , (resp) => { return { ...resp, data: resp.data.movieFestival } } )

const GET_DATA = gql`
  query GetData($id: String!)
  {
    movieFestival(id: $id) {
      id
      name
      wiki
      startYear
      country
      continent
      image{
        poster
      }
    }
  }
`