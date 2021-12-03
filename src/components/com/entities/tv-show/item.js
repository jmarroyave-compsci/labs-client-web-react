import React from 'react'
import Card from 'core/ui/cards/media';
import Link from 'com/entities/movie/link'
import Awards from 'com/awards'
import Typography from '@mui/material/Typography';
import { ItemFrame, ItemContent, Title, Small } from 'style/item'
import Field from 'com/field'
import { Badge, Tooltip } from 'style/item'

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
    <Tooltip content={title}>    
      <Link id={props.id}>
        <Field title={props?.releaseYear ?? "?"} value={props?.title ?? "?"} />
      </Link>
    </Tooltip>
  )
}

function ItemList( props ){
  const {id, title, releaseYear, as } = props;

  return (
    <Tooltip content={title}>
      <ItemFrame key={id} width="220px" height="125px">
        <Link id={id}>
            <Small>{releaseYear ?? "?"}</Small>
            <Tooltip><Title>{title ?? "?"}</Title></Tooltip>
            {as && <div><Small>as {as.replace(/[\[\]\'\"]/g, "")}</Small></div>}
        </Link>
      </ItemFrame>
    </Tooltip>
  )
}


function ItemCard( props ){
  const { full, releaseYear, all, id, title, awards, image } = props;
  return (
    <Tooltip content={title}>
      <Link box={true} id={id}>
        <Card
          image={(image) ? image.poster : image}
          text={(awards) ? <Awards mini={!full} data={awards} year={year} all={all}/> : null}
          title={title}
          subtitle={releaseYear}
        />
      </Link>    
    </Tooltip>
  )
  
}
