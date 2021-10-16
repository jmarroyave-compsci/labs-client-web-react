import { gql } from "@apollo/client";
import { fetch }  from 'lib/graphql'; 

export const fetchResults = ( qry, page ) => fetch( QRY_RESULTS, { qry: qry, page: page  } , (resp) => { return { ...resp, data: resp.data.searchResults } } )
export const fetchSuggestions = ( qry ) => fetch( QRY_SUGGESTIONS, { qry: qry } , (resp) => { return { ...resp, data: resp.data.searchSuggestions } } )

export const QRY_SUGGESTIONS = gql`
query getSuggestions($qry:String) {
  searchSuggestions(qry: $qry){
    suggestions
  }
}
`;

export const QRY_RESULTS = gql`
query getResults($qry:String, $page: Int) {
  searchResults(qry: $qry, page: $page){
    entity
    entityId
    type
  }
}
`;
