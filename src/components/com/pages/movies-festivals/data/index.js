import { gql } from "@apollo/client";
import { fetch }  from 'lib/graphql'; 

export const fetchData = ( page ) => fetch( GET_DATA, { page: page } , (resp) => { return { ...resp, data: resp.data.movieFestivals } } )

const GET_DATA = gql`
  query GetData($page: Int)
  {
    movieFestivals(page: $page) {
      id
      name
      wikiTopic
      established
      country
      continent
    }
  }
`