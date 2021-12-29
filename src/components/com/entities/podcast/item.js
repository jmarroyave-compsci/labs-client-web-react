import React from 'react'
import Card from 'core/ui/cards/media';
import Link from 'com/entities/podcast/link'
import Typography from '@mui/material/Typography';
import { ItemFrame, ItemContent, Title, Small } from 'style/item'
import Field from 'com/field'


export default function Item( props ){  
  const { tiny } = props;
  var { format } = props;

  format = (tiny) ? "tiny" : format;

  switch( format ){
    case "list":
      return ItemList( { ...props } ); 
    case "tiny":
      return ItemTiny( { ...props } ); 
    case "card":
    default:
      return ItemCard( { ...props } )
  }
}

function ItemTiny( props ){

  return (
      <Link id={props.id}>
        <Field value={props?.title ?? "?"} />
      </Link>
  )
}

function ItemList( props ){
  const {id, title, as } = props;

  return (
    <ItemFrame key={id} width="220px" height="125px">
      <Link id={id}>
          <Title>{title ?? "?"}</Title>
          {as && <div><Small>as {as.replace(/[\[\]\'\"]/g, "")}</Small></div>}
      </Link>
    </ItemFrame>
  )
}


function ItemCard( props ){
  const { id, title, author, image, box} = props;
  return (
    <Link box id={id} entity={name} style={{width : '100%'}}>
      <Card
        image={image?.poster}
        title={title}
        subtitle={author}
      />
    </Link>    
  )
  
}



