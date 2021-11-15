import { gql } from "@apollo/client";
import { fetch }  from 'lib/graphql'; 

export const FESTIVAL_FRAGMENT = gql`
fragment FestivalFragment on MovieFestival {
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
`;

export const fetchData = ( id ) => fetch( GET_DATA, { id: id } , (resp) => { return { ...resp, data: resp.data.movieFestival } } )

const GET_DATA = gql`
  ${FESTIVAL_FRAGMENT}
  query GetData($id: String!)
  {
    movieFestival(id: $id) {
      ...FestivalFragment
    }
  }
`