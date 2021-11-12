import React from 'react'
import Card from 'core/ui/cards/media';
import Link from 'com/entities/podcast/link'
import Awards from 'com/awards'
import Typography from '@material-ui/core/Typography';

export default function Item(item){
  const { id, title, awards, full, image, description, box} = item;
  return (
    <Link box id={id} entity={name} style={{width : '100%'}}>
      <Card
        image={image?.poster}
        text={description}
        title={title}
      />
    </Link>    
  )
  
}
