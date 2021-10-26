import React from 'react'
import Card from 'core/ui/cards/media';
import Link from 'com/entities/movie-festival/link'

export default function MovieItem( props ){
  const { id, name, box } = props;

  return (
    
    <Link box id={id} entity={name}>
      <Card
        title={name}
      />
    </Link>    
    
  )
  
}
