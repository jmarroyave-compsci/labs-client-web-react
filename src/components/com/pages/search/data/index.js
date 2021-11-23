import { gql } from "@apollo/client";
import { fetch }  from 'lib/graphql'; 

export const fetchResults = ( { qry, page, entities, year, timeFrame } ) => fetch( QRY_RESULTS, { qry: qry, page: page, entities: encodeURIComponent(JSON.stringify(entities, null, 0)), year: year, timeframe: timeFrame  } , (resp) => { return { ...resp, data: resp.data.search } } )
export const fetchSuggestions = ( qry ) => fetch( QRY_SUGGESTIONS, { qry: qry } , (resp) => { return { ...resp, data: resp.data.suggestions } } )

export const QRY_SUGGESTIONS = gql`
query suggestions($qry:String) {
  suggestions(qry: $qry){
    suggestions
  }
}
`;

export const QRY_RESULTS = gql`
query search($qry:String, $page: Int, $entities : String, $year: Int, $timeframe : Int) {
  search(qry: $qry, page: $page, entities: $entities, year: $year, timeframe: $timeframe){
    entity
    entityId
    type
    desc
    year
  }
}
`;
