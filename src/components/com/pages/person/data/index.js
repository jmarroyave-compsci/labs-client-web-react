import { gql } from "@apollo/client";
import { fetch }  from 'lib/graphql'; 

export const fetchData = ( id ) => fetch( GET_DATA, { id: id } , (resp) => { return { ...resp, data: resp.data.person } } )

const GET_DATA = gql`
query getPerson($id:String!) {
  person(id: $id){
    id
    name
    birthDate
    deathDate
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
    directed {
      id
      title
      releasedDate
    }
    wrote {
      id
      title
      releasedDate
    }
    acted {
      id
      title
      releasedDate
    }
  }
}
`