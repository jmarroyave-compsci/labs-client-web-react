import { gql } from "@apollo/client";
import { fetch }  from 'lib/graphql'; 

export const PERSON_TINY_FRAGMENT = gql`
fragment PersonInfoTiny on Person {
  id
  name
}
`;

export const fetchData = ( id ) => fetch( GET_DATA, { id: id } , (resp) => { return { ...resp, data: resp.data.movie } } )

const GET_DATA = gql`
${PERSON_TINY_FRAGMENT}
query getMovie($id:String!) {
  movie(id: $id){
    id
    title
    country
    type
    genres
    duration
    ratings {
      averageRating
      name
    }
    releaseYear
    classification
    streamBy {
      name
      yearAdded
    }
    produced{
      id{
        ...PersonInfoTiny
      } 
    }
    directed{
      id{
        ...PersonInfoTiny
      } 
    }
    cast {
      id{
        ...PersonInfoTiny
      } 
      as
    }
    written{
      id{
        ...PersonInfoTiny
      } 
    }
    crew{
      id{
        ...PersonInfoTiny
      } 
      as
      cat
      job
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
    remakes{
      id
      title
      releaseYear
      directed{
        id{
          ...PersonInfoTiny
        } 
      }
    }

  }
}
`