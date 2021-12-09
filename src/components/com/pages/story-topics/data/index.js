import { gql } from "@apollo/client";
import { fetch }  from 'lib/graphql'; 

export const fetchItems = ( { page, entity, genre, decade } ) => fetch( GET_DATA( { ENTITY: entity.replace(/-/g, "_") } ), { page: page, year: parseInt(decade), genre: genre } , (resp) => { return { ...resp, data: resp.data.storyTopics } } )

const GET_DATA = ( { ENTITY } ) => gql`
query ${ENTITY}_topics($page: Int, $genre: String, $year: Int){
  storyTopics(page: $page, genre: $genre, year: $year){
    year
    genre
    max
    min
    words{
      n
      p
    }
  }
}
`