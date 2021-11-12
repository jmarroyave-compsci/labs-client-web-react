import React from 'react'
import PersonItem from 'com/entities/person/item';
import Movies from 'com/movies'

export default function DirectorItem( props ){
  const { id, name, wrote } = props;

  console.log(props)

  return (
      <PersonItem
        id={id}
        name={name}
        text={<Movies tiny data={wrote}/>}
      />
  )
}
