import { gql } from "@apollo/client";
import { fetch }  from 'lib/graphql'; 

export const MOVIE_FESTIVAL_TINY_FRAGMENT = gql`
fragment MovieFestivalTinyFragment on MovieFestival {
  id: _id
  name
  startYear
}
`;

export const fetchItems = ( { page, op, qryName="" } ) => fetch( GET_ITEMS( { qryName } ) , { page: page, field: JSON.stringify(op) } , (resp) => { return { ...resp, data: resp.data.movieFestivals } } )
const GET_ITEMS = ( { qryName } ) => gql`
  query movie_festivals_${qryName}($page: Int, $field: String)
  {
    movieFestivals(page: $page, field: $field){
      id: _id
      startYear
      name
    }
  }
`

export const fetchDashboard = (  ) => fetch( GET_DASHBOARD(  ), {  } , (resp) => { return { ...resp, data: resp.data.dashboardMovieFestivals } } )
const GET_DASHBOARD = (  ) => gql`
query dashboard_movie_festivals
  {
    dashboardMovieFestivals {
      total
      startYear
      startDecade
      countries
      continent
      withAwards
      awardYear
      awardedByYear
    }
  }
`

export const fetchItem = ( {id, qryName=""} ) => fetch( GET_ITEM({qryName}), { id } , (resp) => { return { ...resp, data: resp.data.movieFestival } } )
const GET_ITEM = ( { qryName } ) => gql`
query movie_festival($id: String!)
{
  movieFestival(id: $id) {
    id: _id
    name
    wiki
    startYear
    country
    continent
    image{
      poster
    }
  }
}
`