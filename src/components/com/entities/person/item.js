import React from 'react'
import Card from 'core/ui/cards/media';
import Link from 'com/entities/person/link'
import Awards from 'com/awards'
import Typography from '@material-ui/core/Typography';
import { ItemFrame, ItemContent, Title, Small } from 'style/item'
import Field from 'com/field'

export default function PersonItem( props ){
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
  const {id, name, as} = props;

  return (
      <Link id={item.id}>
        <Field value={item.title} title={item.releaseYear}/>
      </Link>
  )
}

function ItemList( props ){
  const {id, name, as} = props;

  return (
    <ItemFrame key={id} width="220px" height="125px">
      <Link id={id}>
          <div><Title>{name ?? "?"}</Title></div>
          {as && <div><Small>as {as.replace(/[\[\]\'\"]/g, "")}</Small></div>}
      </Link>
    </ItemFrame>
  )
}

function ItemCard( props ){
  const { id, name, text, box } = props;

  return (
    
    <Link key={id} box id={id} entity={name}>
      <Card
        title={name}
        text={text}
      />
    </Link>    
    
  )  
}


