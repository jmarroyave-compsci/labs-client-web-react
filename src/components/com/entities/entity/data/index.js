import { gql } from "@apollo/client";
import { fetch }  from 'lib/graphql'; 

export const ENTITY_TINY_FRAGMENT = gql`
fragment EntityTinyFragment on Entity {
  id: _id
  title
}
`;