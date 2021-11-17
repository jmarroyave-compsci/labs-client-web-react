import { gql } from "@apollo/client";
import { fetch }  from 'lib/graphql'; 
import { MOVIE_TINY_FRAGMENT } from 'com/pages/person/data';

export const fetchItems = ( {page, op} ) => fetch( GET_ITEMS, { page: page, field: JSON.stringify(op) } , (resp) => { return { ...resp, data: resp.data.movies } } )

const GET_ITEMS = gql`
  query GetItems($page: Int, $field: String)
  {
    movies(page: $page, field: $field){
      id
      title
    }
  }
`