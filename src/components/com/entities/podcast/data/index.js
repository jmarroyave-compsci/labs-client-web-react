import { gql } from "@apollo/client";
import { fetch }  from 'lib/graphql'; 


const fixAuthor = ( author ) => ( !author ) ? "-" : author.replace(/_/g, " ")

export const fetchItems = ( { page, op, qryName="" } ) => fetch( GET_ITEMS( { qryName } ) , { page: page, field: JSON.stringify(op) } , (resp) => ( { ...resp, data: resp.data.podcasts.map( item => ( { ...item, author: fixAuthor(item.author)} ) ) } ) )
const GET_ITEMS = ( { qryName } ) => gql`
  query podcasts_${qryName}($page: Int, $field: String)
  {
    podcasts(page: $page, field: $field){
      id: _id
      title
      author
    }
  }
`

export const fetchDashboard = (  ) => fetch( GET_DASHBOARD(  ), {  } , (resp) => { return { ...resp, data: resp.data.dashboardPodcasts } } )
const GET_DASHBOARD = (  ) => gql`
query dashboard_podcasts
  {
    dashboardPodcasts {
      total
      author
      countries
      languages
      category
      subcategory
    }
  }
`

export const fetchItem = ( {id, qryName=""} ) => fetch( GET_ITEM({qryName}), { id } , (resp) => { return { ...resp, data: { ...resp.data.podcast, author: fixAuthor(resp.data.podcast.author) } } } )
const GET_ITEM = ( { qryName } ) => gql`
query podcast($id: String!)
{
  podcast(id: $id){
    id: _id 
    title
    subtitle
    feedUrl
    description
    summary
    author
    link
    language
    image{
      poster
    }
    category
    subcategory
    createdDate
  }
}
`