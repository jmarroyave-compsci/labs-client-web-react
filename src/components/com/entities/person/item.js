import React from 'react'
import Card from 'core/ui/cards/media';
import Link from 'com/entities/person/link'
import Awards from 'com/awards'
import Typography from '@material-ui/core/Typography';
import { ItemFrame, ItemContent, Title, Small } from 'style/item'


export default function MovieItem( props ){
  const { format } = props;

  switch( format ){
    case "mini":
      return ItemMini( props ); 
    case "card":
    default:
      return ItemCard( props )
  }
}

function ItemMini( props ){
  const {id, title, releaseYear} = props;

  console.log(props)

  return (
    <ItemFrame key={id} width="250px">
      <Link id={id}>
          <Small>{releaseYear}</Small>
          <Title>{title}</Title>
      </Link>
    </ItemFrame>
  )
}


function ItemCard( props ){
  const { id, name, text, box } = props;

  return (
    
    <Link box id={id} entity={name}>
      <Card
        title={name}
        text={text}
      />
    </Link>    
    
  )  
}


