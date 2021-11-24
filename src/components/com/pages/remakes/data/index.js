import { gql } from "@apollo/client";
import { fetch }  from 'lib/graphql'; 
import { PERSON_TINY_FRAGMENT } from 'com/entities/person/data'

export const fetchData = ( { page, entity } ) => fetch( GET_DATA( { ENTITY: entity.replace(/-/g, "_") } ), { page: page } , (resp) => { return { ...resp, data: resp.data.storyRemakes } } )

const GET_DATA = ( { ENTITY } ) => gql`
${PERSON_TINY_FRAGMENT}
query ${ENTITY}_remakes($page: Int){
  storyRemakes(page: $page){
    name
    count
    recs{
      id: _id
      releaseYear
      directed{
        id{
          ...PersonTinyFragment
        } 
      }
    }
  }
}
`