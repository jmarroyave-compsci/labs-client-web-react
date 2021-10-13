import { gql } from "@apollo/client";

export const GET_DATA = gql`
  query GetData($page: Int)
  {
    storiesRemakes(page: $page) {
      id
      title
      image{
        poster
      }
    }
  }
`