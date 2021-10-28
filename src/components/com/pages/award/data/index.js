import { gql } from "@apollo/client";
import { fetch }  from 'lib/graphql'; 

export const fetchData = ( festival, year ) => fetch( GET_DATA, { festival: festival, year: parseInt(year) } , (resp) => { return { ...resp, data: ((resp.data.storiesMoviesAwards) ? resp.data.storiesMoviesAwards[0] : null) } } )

const GET_DATA = gql`
query get($festival: String, $year: Int) {
  storiesMoviesAwards(festival: $festival, year: $year) {
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