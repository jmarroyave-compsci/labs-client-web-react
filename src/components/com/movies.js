import React from 'react'
import { Frame } from 'style/boxes'
import { SubTitle, Small } from 'style/detail'
import Link from 'com/entities/movie/link'
import GridContainer from 'core/ui/layout/grid_container';
import GridItem from 'core/ui/layout/grid_item';
import Date from "core/ui/date";

function Movies( props ){
  const { data, loading, type, tiny } = props;

  if(!data || data.length == 0) return <div/>;

  var movies = ( tiny ) ? data.slice(0,5) : data;

  var subtitle = <SubTitle>{type}<Small> [{data.length}]</Small></SubTitle>

  return (
    <Frame>
      {!tiny && subtitle}
      <GridContainer>
      {movies.map( (item, key) => 
        <GridItem key={key} xs={12} sm={12} md={6} lg={4}>
          <div><Link id={item.id}><div>{item.title} <Small>(<Date value={item.releasedDate} format="YYYY"/>)</Small></div></Link></div>
        </GridItem>
      )}
      </GridContainer>
      {tiny && data.length > movies.length && <Small>and {data.length - movies.length} more</Small>}
    </Frame>
  )
}

export default Movies;
