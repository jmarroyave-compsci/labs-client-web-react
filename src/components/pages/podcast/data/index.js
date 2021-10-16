import { gql } from "@apollo/client";
import { fetch }  from 'lib/graphql'; 

export const fetchData = ( id ) => fetch( GET_DATA, { id: id } , (resp) => { return { ...resp, data: resp.data.podcast } } )

const GET_DATA = gql`
query getPodcast($id:String!) {
  podcast(id: $id){
    id
    title
    subtitle
    feedUrl
    description
    summary
    author
    link
    language
    image
    category
    subcategory
    createdDate
  }
}
`;
