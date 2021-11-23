import React from 'react'
import Card from 'core/ui/cards/media';
import Link from 'com/entities/movie-festival/link'
import Typography from '@material-ui/core/Typography';
import { ItemFrame, ItemContent, Title, Small } from 'style/item'
import Field from 'com/field'


export default function Item( props ){
  const { tiny } = props;
  var { format } = props;

  format = (tiny) ? "tiny" : format;

  switch( format ){
    case "list":
      return ItemList( props ); 
    case "tiny":
      return ItemTiny( props ); 
    case "card":
    default:
      return ItemCard( props )
  }
}

function ItemTiny( props ){

  return (
      <Link id={props.id}>
        <Field title={props?.startYear ?? "?"} value={props?.name ?? "?"} />
      </Link>
  )
}

function ItemList( props ){
  const {id, name, startYear, as } = props;

  return (
    <ItemFrame key={id} width="220px" height="125px">
      <Link id={id}>
          <Small>{startYear ?? "?"}</Small>
          <Title>{name ?? "?"}</Title>
          {as && <div><Small>as {as.replace(/[\[\]\'\"]/g, "")}</Small></div>}
      </Link>
    </ItemFrame>
  )
}


function ItemCard( props ){
  const { id, name, box, image } = props;

  return (
    
    <Link box id={id} entity={name}>
      <Card
        title={name}
        image={image?.poster}        
      />
    </Link>    
    
  )
  
  
}

