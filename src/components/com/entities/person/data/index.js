import { gql } from "@apollo/client";
import { fetch }  from 'lib/graphql'; 
import { ENTITY_TINY_FRAGMENT } from 'com/entities/entity/data';
import { MOVIE_FESTIVAL_TINY_FRAGMENT } from 'com/entities/movie-festival/data';

export const PERSON_TINY_FRAGMENT = gql`
fragment PersonTinyFragment on Person {
  id: _id
  name
}
`;

export const fetchItems = ( { page, op, qryName="", withDirected=true, withActed=false, withWrote=false, withProduced=false, withActedWith=false, withDirectedTo=false, withDirectedBy=false } ) => fetch( GET_ITEMS( { qryName } ) , { page: page, withActed: withActed, withDirected: withDirected ?? false, withProduced: withProduced, withWrote: withWrote, withActedWith, withDirectedBy, withDirectedTo, field: JSON.stringify(op) } , (resp) => { return { ...resp, data: resp.data.people } } )
const GET_ITEMS = ( { qryName, withActed, withDirected, withProduced, withWrote, withDirectedTo, withDirectedBy, withActedWith } ) => gql`
  ${ENTITY_TINY_FRAGMENT}
  ${PERSON_TINY_FRAGMENT}
  query people_${qryName}($page: Int, $field: String, $withActed: Boolean!, $withProduced: Boolean!, $withDirected: Boolean!, $withWrote: Boolean!)
  {
    people(page: $page, field: $field, withActed: $withActed, withWrote: $withWrote, withDirected: $withDirected, withProduced: $withProduced){
      ...PersonTinyFragment
      directed @include(if: $withDirected){
        id{
          ...EntityTinyFragment
        } 
      }
      acted @include(if: $withActed){
        id{
          ...EntityTinyFragment
        } 
      }
      produced @include(if: $withProduced){
        id{
          ...EntityTinyFragment
        } 
      }
      wrote @include(if: $withWrote){
        id{
          ...EntityTinyFragment
        } 
      }
    }
  }
`
export const fetchDashboard = (  ) => fetch( GET_DASHBOARD(  ), {  } , (resp) => { return { ...resp, data: resp.data.dashboardPeople } } )
const GET_DASHBOARD = (  ) => gql`
  query dashboard_people
  {
    dashboardPeople {
      total
      birthYear
      birthDecade
      professionsPerPerson
      professions
      professionsByDecade
      awards
      directors
      producers
      actors
      writers
    }
  }
`

export const fetchItem = ( {id, qryName=""} ) => fetch( GET_ITEM({qryName}), { id } , (resp) => { return { ...resp, data: resp.data.person } } )
const GET_ITEM = ( { qryName } ) => gql`
${PERSON_TINY_FRAGMENT}
${MOVIE_FESTIVAL_TINY_FRAGMENT}
${ENTITY_TINY_FRAGMENT}
query person($id:String!) {
  person(id: $id){
    id: _id
    name
    birthYear
    deathYear
    profession
    awards {
      category
      festival{
        ...MovieFestivalTinyFragment
      }
      won
      year
    }
    references {
      imdb
    }
    produced{
      id{
        ...EntityTinyFragment
      } 
    }
    directed{
      id{
        ...EntityTinyFragment
      } 
    }
    acted {
      id{
        ...EntityTinyFragment
      } 
      as
    }
    wrote{
      id{
        ...EntityTinyFragment
      } 
    }
    crew{
      id{
        ...EntityTinyFragment
      } 
      as
      cat
      job
    }    
    directedTo{
      p{
        ...PersonTinyFragment
      }
      n
    }
    directedBy{
      p{
        ...PersonTinyFragment
      }
      n
    }
    actedWith{
      p{
        ...PersonTinyFragment
      }
      n
    }    
  }
}
`