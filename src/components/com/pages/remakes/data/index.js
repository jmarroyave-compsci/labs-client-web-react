import { gql } from "@apollo/client";
import { fetch }  from 'lib/graphql'; 
import { PERSON_TINY_FRAGMENT } from 'com/entities/person/data'

export const fetchData = ( { page, entity, extended, limit } ) => fetch( GET_DATA( { ENTITY: entity.replace(/-/g, "_") } ), { page: page, extended: extended, limit: limit } , (resp) => { return { ...resp, data: resp.data.storyRemakes } } )

const GET_DATA = ( { ENTITY } ) => gql`
${PERSON_TINY_FRAGMENT}
query ${ENTITY}_remakes($page: Int, $limit: Int, $extended: Boolean){
  storyRemakes(page: $page, limit : $limit, extended : $extended){
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