import React from 'react'
import { gql, useQuery } from "@apollo/client";

const QRY = gql`
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
  function WithDataStoriesPodcastsMusic( props ) {
    const { page } = props
    var qry = ( props.data )  ? {} : useQuery(QRY, { variables: { page: parseInt(page) } });
    var data = (props.data) ? props.data : (( qry.data ) ? qry.data.storiesPodcastMusic : null);
    return <DataComponent {...props} {...qry} data={data} />
  }
)

