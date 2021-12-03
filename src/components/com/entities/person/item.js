import React from 'react'
import Card from 'core/ui/cards/media';
import Link from 'com/entities/person/link'
import Awards from 'com/awards'
import Typography from '@mui/material/Typography';
import { ItemFrame, ItemContent, Title, Small } from 'style/item'
import Field from 'com/field'
import { Badge, Tooltip } from 'style/item'

export default function PersonItem( props ){
  const { tiny } = props;
  var { format } = props;

  format = (tiny) ? "tiny" : format;

  const item = ( props.p ) ? props.p : ((props.id) ? props.id : null)

  var attrs = { ...props, ...item, n: (props.n) ? props.n : 0 }

  switch( format ){
    case "list":
      return ItemList( attrs ); 
    case "tiny":
      return ItemTiny( attrs ); 
    case "card":
    default:
      return ItemCard( attrs )
  }
}


function ItemTiny( props ){
  const {id, name, releaseYear} = props;

  return (
    <Tooltip content={name}>
      <Link id={id}>
        <Field value={name} title={releaseYear}/>
      </Link>
    </Tooltip>
  )
}

function ItemList( props ){
  const {id, name, as, n} = props;

  return (
    <Tooltip content={name}>
      <ItemFrame key={id} width="220px" height="125px">
        <Badge content={n}>
          <Link id={id}>
            <div><Title>{name ?? "?"}</Title></div>
            {as && <div><Small>as {as.replace(/[\[\]\'\"]/g, "")}</Small></div>}
          </Link>
        </Badge>
      </ItemFrame>
    </Tooltip>
  )
}

function ItemCard( props ){
  const { id, name, text, box, n } = props;

  return (
    <Tooltip content={name}>
      <Link key={id} box id={id} entity={name}>
        <Card
          title={<Badge content={n}>{name}</Badge>}
          text={text}
        />
      </Link>    
    </Tooltip>    
  )  
}


