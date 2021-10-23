import React from 'react'
import Card from 'core/ui/cards/img-text';
import Link from 'com/entities/movie-festival/link'

export default function MovieItem( props ){
  const { id, name } = props;

  return (
    
      <Card
        title={name}
        actions={[
          <Link id={id} entity={name}>Go</Link>,
        ]}
      />
    
  )
  
}
