import React from 'react'
import { Frame } from 'components/styles/boxes'
import { SubTitle } from 'components/styles/detail'
import Link from 'components/entities/movie/link'
import GridContainer from 'core/ui/layout/grid_container';
import GridItem from 'core/ui/layout/grid_item';
import Date from "core/ui/date";

function Movies( props ){
  const { data, loading, type } = props;

  if(!data || data.length == 0) return <div/>;

  return (
    <Frame>
      {data && data.length > 0 && <SubTitle>{type}</SubTitle>}
      <GridContainer>
      {data && data.length > 0 && data.map( (item, key) => 
        <GridItem key={key} xs={12} sm={12} md={6} lg={4}>
          <div><Link id={item.id}><div>{item.title} [<Date value={item.releasedDate} format="YYYY"/>]</div></Link></div>
        </GridItem>
      )}
      </GridContainer>
    </Frame>
  )
}

export default Movies;
