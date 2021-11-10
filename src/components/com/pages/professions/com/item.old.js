import React from 'react'
import Card from 'core/ui/cards/media';
import Link from 'core/ui/link'

export default function Item( props ){
  console.log(props)
  const { id, name, url, img } = props;


  return (
    <Link box href={url}>
      <Card
        title={name}
        image={img}
      />
    </Link>    
    
  )
  
}
