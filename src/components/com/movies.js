import React from 'react'
import { Frame } from 'style/boxes'
import { SubTitle, Small } from 'style/detail'
import HList from 'com/ui/hlist';
import Item from 'com/entities/movie/item'

function Movies( props ){
  const { data, loading, type, tiny } = props;

  if(!data || data.length == 0) return <div/>;

  var movies = ( tiny ) ? data.slice(0,5) : data;

  var subtitle = <SubTitle>{type}<Small> [{data.length}]</Small></SubTitle>

  return (
    <Frame>
      {!tiny && subtitle}
      <HList
        data={movies}
        item={(item) => <Item format="mini" {...item} />}
      />
      {tiny && data.length > movies.length && <Small>and {data.length - movies.length} more</Small>}
    </Frame>
  )
}

export default Movies;
