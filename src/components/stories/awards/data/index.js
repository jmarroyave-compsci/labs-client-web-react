import { gql } from "@apollo/client";
import { fetch }  from 'lib/graphql'; 

export const fetchData = ( entity, year, page ) => fetch( GET_DATA, { entity: entity, year: parseInt(year), page: parseInt(page) } , (resp) => { return { ...resp, data: resp.data.storiesMoviesAwards } } )

const GET_DATA = gql`
query get($entity:String, $year: Int, $page: Int) {
  storiesMoviesAwards(entity: $entity, year: $year, page: $page){
    id
    title
    awards {
      category
      name
      won
      year
    }
    image {
      poster
    }
  }
}
`