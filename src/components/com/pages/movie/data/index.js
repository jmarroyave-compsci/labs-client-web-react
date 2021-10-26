import { gql } from "@apollo/client";
import { fetch }  from 'lib/graphql'; 

export const fetchData = ( id ) => fetch( GET_DATA, { id: id } , (resp) => { return { ...resp, data: resp.data.movie } } )

const GET_DATA = gql`
query getMovie($id:String!) {
  movie(id: $id){
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
    releasedDate
    classification
    streamBy {
      name
      yearAdded
    }
    directors{
      id
      name
    }
    cast {
      id
      name
    }
    writers{
      id
      name
    }
    crew{
      id
      name
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