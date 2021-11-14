import React from 'react'
import { Frame } from 'style/boxes'
import { SubTitle, Small } from 'style/detail'
import HList from 'com/ui/hlist';
import Item from 'com/entities/movie/item'

function Movies( props ){
  const { data, loading, type, filter } = props;

  if(!data || data.length == 0) return <div/>;

  var movies = ( props.tiny ) ? data.slice(0,3) : data;
  movies = (filter) ? movies.filter(filter) : movies;

  var subtitle = <SubTitle>{type}<Small> [{movies.length}]</Small></SubTitle>

  return (
    <Frame>
      {!props.tiny && subtitle}
      {props.tiny && movies.map( (item, key) => 
        <div key={key}>
          <Item format='tiny' {...item.id}/>
        </div>
      )}
      {!props.tiny &&
        <HList
          data={movies}
          item={(item) => <Item format='list' {...item} {...item.id} />}
        />
      }
      {props.tiny && data.length > movies.length && <Small>and {data.length - movies.length} more</Small>}
    </Frame>
  )
}

export default Movies;
