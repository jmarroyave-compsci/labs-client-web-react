import { gql } from "@apollo/client";
import { fetch }  from 'lib/graphql'; 

export const PERSON_TINY_FRAGMENT = gql`
fragment PersonInfoTiny on Person {
  id
  name
}
`;

export const MOVIE_TINY_FRAGMENT = gql`
${PERSON_TINY_FRAGMENT}
fragment MovieInfoTiny on Movie {
  id
  title
  releaseYear
  directed{
    id{
      ...PersonInfoTiny
    } 
  }
}
`;

export const fetchData = ( id ) => fetch( GET_DATA, { id: id } , (resp) => { return { ...resp, data: resp.data.person } } )

const GET_DATA = gql`
${MOVIE_TINY_FRAGMENT}
query getPerson($id:String!) {
  person(id: $id){
    id
    name
    birthYear
    deathYear
    profession
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
    produced{
      id{
        ...MovieInfoTiny
      } 
    }
    directed{
      id{
        ...MovieInfoTiny
      } 
    }
    acted {
      id{
        ...MovieInfoTiny
      } 
      as
    }
    wrote{
      id{
        ...MovieInfoTiny
      } 
    }
    crew{
      id{
        ...MovieInfoTiny
      } 
      as
      cat
      job
    }    
  }
}
`

