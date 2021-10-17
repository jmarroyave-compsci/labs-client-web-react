import React from 'react'
import PersonItem from 'components/entities/person/item';
import Movies from 'components/entities/pieces/movies'

export default function DirectorItem( props ){
  const { id, name, acted } = props;

  return (
      <PersonItem
        id={id}
        name={name}
        text={<Movies data={acted}/>}
      />
  )
}
