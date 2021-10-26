import { gql } from "@apollo/client";
import { fetch }  from 'lib/graphql'; 

export const fetchData = ( entity, year, page ) => fetch( GET_DATA, { entity: entity, year: parseInt(year), page: parseInt(page) } , (resp) => { return { ...resp, data: resp.data.storiesMoviesAwards } } )

const GET_DATA = gql`
query get($year: Int, $page: Int) {
  storiesMoviesAwards(year: $year, page: $page) {
    festival {
      id
      name
    }
    year
    awarded{
      category
      entity
      won
      id
    }
  }
}
`