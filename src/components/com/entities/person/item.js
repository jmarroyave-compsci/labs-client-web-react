import React from 'react'
import Card from 'core/ui/cards/media';
import Link from 'com/entities/person/link'
import Awards from 'com/awards'
import Typography from '@material-ui/core/Typography';
import { ItemFrame, ItemContent, Title, Small } from 'style/item'


export default function MovieItem( props ){
  const { tiny } = props;
  var { format } = props;

  format = (tiny) ? "mini" : format;

  switch( format ){
    case "mini":
      return ItemMini( props ); 
    case "card":
    default:
      return ItemCard( props )
  }
}

function ItemMini( props ){
  const {id, name, as} = props;

  return (
    <ItemFrame key={id} width="250px">
      <Link id={id}>
          {as && <Small>{as.replace(/[\[\]\'\"]/g, "")}</Small>}
          <Title>{name ?? "?"}</Title>
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


