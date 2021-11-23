import { gql } from "@apollo/client";
import { fetch }  from 'lib/graphql'; 
import { PERSON_TINY_FRAGMENT } from 'com/entities/person/data';
import { MOVIE_FESTIVAL_TINY_FRAGMENT } from 'com/entities/movie-festival/data';


export const fetchItems = ( { entity, year, page } ) => fetch( GET_ITEMS(), { entity: entity, year: parseInt(year), page: parseInt(page) } , (resp) => { return { ...resp, data: resp.data.storyAwards } } )
const GET_ITEMS = ( ) => gql`
query awards($year: Int, $page: Int) {
  storyAwards(year: $year, page: $page) {
    festival {
      id: _id
      name
      image{
        poster
      }
    }
    year
    awarded{
      category
      entity
      won
      entityId: entity_id
    }
  }
}
`

export const fetchItem = ( { id, year } ) => fetch( GET_ITEM(), { festival: id, year: parseInt(year) } , (resp) => { return { ...resp, data: resp.data.storyAwards[0] } } )
const GET_ITEM = ( ) => gql`
query award($festival: String, $year: Int) {
  storyAwards(festival: $festival, year: $year) {
    festival {
      id: _id
      name
      image{
        poster
      }          
    }
    year
    awarded{
      category
      entity
      won
      entityId: entity_id
    }
  }
}
`