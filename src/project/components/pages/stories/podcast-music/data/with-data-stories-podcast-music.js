import React from 'react'
import { useParams } from "react-router-dom";
import { gql, useQuery } from "@apollo/client";

export const QRY = gql`
  query getStory($page: Int)
{
  storiesPodcastMusic(page: $page) {
    id
    title
    link
    image
  }
}
`;

export default DataComponent => (
  function WithDataStoriesMovieAwards( props ) {
    var { route } = props;
    route = (route) ? route : {};

    var page = (route.page) ? route.page : 1;
    var qry = ( props.data )  ? {} : useQuery(QRY, { variables: { page: parseInt(page) } });
    var data = (props.data) ? props.data : (( qry.data ) ? qry.data.storiesPodcastMusic : null);
    return <DataComponent {...props} {...qry} data={data} />
  }
)