import React from 'react'
import { useParams } from "react-router-dom";
import { gql, useQuery } from "@apollo/client";

export const QRY = gql`
  query getStory
{
  storiesPodcastMusic {
    id
    title
    link
    image
  }
}
`;

export default DataComponent => (
  function WithDataStoriesMovieAwards( props ) {
    var qry = ( props.data )  ? {} : useQuery(QRY);
    var data = (props.data) ? props.data : (( qry.data ) ? qry.data.storiesPodcastMusic : null);
    return <DataComponent {...props} {...qry} data={data} />
  }
)