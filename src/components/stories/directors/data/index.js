import { gql } from "@apollo/client";
import { fetch }  from 'lib/graphql'; 

export const fetchData = ( page ) => fetch( GET_DATA, { page: page } , (resp) => { return { ...resp, data: resp.data.storiesMoviesRemakes } } )

const GET_DATA = gql`
  query GetData($page: Int)
  {
    storiesPeopleDirectors(page: $page){
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
`