import { gql } from "@apollo/client";
import { fetch }  from 'lib/graphql'; 
import { PERSON_TINY_FRAGMENT } from 'com/entities/person/data';
import { MOVIE_FESTIVAL_TINY_FRAGMENT } from 'com/entities/movie-festival/data';

export const MOVIE_TINY_FRAGMENT = gql`
fragment MovieTinyFragment on Movie {
  id: _id
  title
}
`;

export const fetchItems = ( { page, op, qryName="" } ) => fetch( GET_ITEMS( { qryName } ) , { page: page, field: JSON.stringify(op) } , (resp) => { return { ...resp, data: resp.data.movies } } )
const GET_ITEMS = ( { qryName } ) => gql`
  query movies_${qryName}($page: Int, $field: String)
  {
    movies(page: $page, field: $field){
      id: _id
      releaseYear
      title
    }
  }
`

export const fetchDashboard = ( {dataEntity, qryName} ) => fetch( GET_DASHBOARD( { ENTITY: dataEntity, qryName } ), {  } , (resp) => { return { ...resp, data: resp.data.dashboardMovies } } )
const GET_DASHBOARD = ( { ENTITY, qryName } ) => gql`
  query dashboard_movies
  {
    dashboardMovies {
      total
      type
      releaseDecade
      duration
      genres
      awards
      countries
      ratings
      production
      boxOffice
      cast
      directors
      producers
      writers
    }
  }
`

export const fetchItem = ( {id, qryName=""} ) => fetch( GET_ITEM({qryName}), { id } , (resp) => { return { ...resp, data: resp.data.movie } } )
const GET_ITEM = ( { qryName } ) => gql`
${MOVIE_FESTIVAL_TINY_FRAGMENT}
${PERSON_TINY_FRAGMENT}
query movie($id:String!) {
  movie(id: $id){
    id: _id
    title
    countries
    type
    genres
    duration
    ratings {
      averageRating
      name
    }
    releaseYear
    classification
    streamBy {
      name
      yearAdded
    }
    produced{
      id{
        ...PersonTinyFragment
      } 
    }
    directed{
      id{        
        ...PersonTinyFragment
      } 
    }
    cast {
      id{
        ...PersonTinyFragment
      } 
      as
    }
    written{
      id{
        ...PersonTinyFragment
      } 
    }
    crew{
      id{
        ...PersonTinyFragment
      } 
      as
      cat
      job
    }    
    awards {
      category
      festival{
        ...MovieFestivalTinyFragment
      }
      won
      year
    }
    image {
      poster
    }
    boxOffice
    production
    language
    plot
    remakes{
      title
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