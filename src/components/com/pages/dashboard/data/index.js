import { gql } from "@apollo/client";
import { fetch }  from 'lib/graphql'; 
import { MOVIE_TINY_FRAGMENT } from 'com/pages/person/data';

export const fetchPeople = ( {page, op} ) => fetch( GET_PEOPLE, { page: page, field: JSON.stringify(op) } , (resp) => { return { ...resp, data: resp.data.people } } )

const GET_PEOPLE = gql`
  query GetPeople($page: Int, $field: String)
  {
    people(page: $page, field: $field){
      id
      name
    }
  }
`
export const fetchMovies = ( {page, op} ) => fetch( GET_MOVIES, { page: page, field: JSON.stringify(op) } , (resp) => { return { ...resp, data: resp.data.movies } } )

const GET_MOVIES = gql`
  query GetMovies($page: Int, $field: String)
  {
    movies(page: $page, field: $field){
      id
      title
    }
  }
`