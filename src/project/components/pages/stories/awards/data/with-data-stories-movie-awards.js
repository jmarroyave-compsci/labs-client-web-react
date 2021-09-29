import React from 'react'
import { useParams } from "react-router-dom";
import { gql, useQuery } from "@apollo/client";

export const QRY = gql`
  query getStory
{
  storiesMovieAwards {
    id
    title
    image
    link
    awards {
      category
      name
      won
      year
    }
  }
}
`;

export default DataComponent => (
  function WithDataStoriesMovieAwards( props ) {
    var qry = useQuery(QRY);
    qry.data = (qry.data) ? qry.data.storiesMovieAwards : {};

    return <DataComponent {...props} {...qry} />
  }
)