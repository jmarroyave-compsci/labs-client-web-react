import React from 'react'
import { gql, useQuery } from "@apollo/client";

export const QRY = gql`
query get($entity:String, $year: Int, $page: Int) {
  storiesAwards(entity: $entity, year: $year, page: $page){
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
    var { route } = props;
    route = (route) ? route : {};

    var entity = (route.entity) ? route.entity : "movies";
    var year = (route.year) ? route.year : new Date().getFullYear();
    var page = (route.page) ? route.page : 1;

    var qry = ( props.data )  ? {} : useQuery(QRY, { variables: { entity: entity, year: parseInt(year), page: parseInt(page) } });
    var data = (props.data) ? props.data : (( qry.data ) ? qry.data.storiesAwards : null);

    return <DataComponent {...props} {...qry} data={data} />
  }
)