import { gql } from "@apollo/client";
import { fetch }  from 'lib/graphql'; 

export const fetchData = ( id ) => fetch( GET_DATA, { id: id } , (resp) => { return { ...resp, data: resp.data.tVShow } } )

const GET_DATA = gql`
  query GetData($id: String!)
  {
    tVShow(id: $id) {
    id
    title
    country
    type
    genre
    duration
    rating {
      averageRating
      name
    }
    releaseYear
    classification
    streamBy {
      name
      yearAdded
    }
    awards {
      category
      festival{
        id
        name
      }
      won
      year
    }
    references {
      imdb
    }
    image {
      poster
    }
    boxOffice
    production
    language
    plot
    }
  }
`