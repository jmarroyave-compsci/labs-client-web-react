import React from 'react'
import Card from 'core/ui/cards/media';
import Link from 'com/entities/movie/link'
import Awards from 'com/awards'
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
        <Field title={props?.releaseYear ?? "?"} value={props?.title ?? "?"} />
      </Link>
  )
}

function ItemList( props ){
  const {id, title, releaseYear, as } = props;

  return (
    <ItemFrame key={id} width="220px" height="125px">
      <Link id={id}>
          <Small>{releaseYear ?? "?"}</Small>
          <Title>{title ?? "?"}</Title>
          {as && <div><Small>as {as.replace(/[\[\]\'\"]/g, "")}</Small></div>}
      </Link>
    </ItemFrame>
  )
}


function ItemCard( props ){
  const { full, releaseYear, all, id, title, awards, image } = props;
  return (
    <Link box={true} id={id}>
      <Card
        image={(image) ? image.poster : image}
        text={(awards) ? <Awards mini={!full} data={awards} year={year} all={all}/> : null}
        title={title}
        subtitle={releaseYear}
      />
    </Link>    
  )
  
}
