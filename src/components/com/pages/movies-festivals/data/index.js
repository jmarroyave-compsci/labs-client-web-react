import { gql } from "@apollo/client";
import { fetch }  from 'lib/graphql'; 
import { FESTIVAL_FRAGMENT } from 'com/pages/movie-festival/data'

export const fetchData = ( page ) => fetch( GET_DATA, { page: page } , (resp) => { return { ...resp, data: resp.data.movieFestivals } } )

const GET_DATA = gql`
  ${FESTIVAL_FRAGMENT}
  query GetData($page: Int)
  {
    movieFestivals(page: $page) {
      ...FestivalFragment
    }
  }
`

const GET_DASHBOARD = gql`
  query GetData
  {
    dashboardFestivals {
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