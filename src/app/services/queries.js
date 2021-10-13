import { gql } from 'graphql-request'

export const QRY = gql`
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
`;
