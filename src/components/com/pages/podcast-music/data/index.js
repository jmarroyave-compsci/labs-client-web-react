import { gql } from "@apollo/client";
import { fetch }  from 'lib/graphql'; 

export const fetchData = ( page ) => fetch( GET_DATA, { page: page } , (resp) => { return { ...resp, data: resp.data.podcastsCategoryMusic } } )

const GET_DATA = gql`
  query getStory($page: Int)
{
  podcastsCategoryMusic(page: $page) {
    id
    title
    link
    image{
      poster
    }
  }
}
`