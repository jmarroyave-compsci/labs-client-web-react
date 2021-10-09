import React from 'react'
import { gql, useQuery } from "@apollo/client";

const QRY = gql`
  query getStory($page: Int)
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

export default DataComponent => (
  function fetch( props ) {
    const { route } = props
    var qry = ( props.data )  ? {} : useQuery(QRY, { variables: { page: (route && route.page) ? parseInt(route.page) : 1 } });
    var data = (props.data) ? props.data : (( qry.data ) ? qry.data.storiesRemakes : null);
    return <DataComponent {...props} {...qry} data={data} />
  }
)

