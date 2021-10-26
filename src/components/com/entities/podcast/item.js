import React from 'react'
import Card from 'core/ui/cards/media';
import Link from 'com/entities/podcast/link'
import Awards from 'com/awards'
import Typography from '@material-ui/core/Typography';

export default function Item(item){
  const { id, title, awards, full, image, description, box} = item;
  return (
    <Link box id={id} entity={name}>
      <Card
        image={image}
        imageHeight={100}
        text={description}
        title={title}
      />
    </Link>    
  )
  
}
