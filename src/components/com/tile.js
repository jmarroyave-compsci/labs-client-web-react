import React from 'react'
import { styled } from '@mui/material/styles';
import Card from 'core/ui/cards/media';
import Link from 'core/ui/link'
import { Title } from 'style/detail';
import config from 'app/config'

const Tile = styled('div')( ({theme, img}) =>({
  width: '100%',
  height: '150px',
  padding: '1rem',
  color: theme.palette.primary.contrastText, 
  backgroundColor: theme.palette.background.paper, 
  backgroundImage: `url('${config.APP.BASE_PATH}${img}')`, 
  margin: '0 1px 1px 0',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flex: 1,
}));


export default function TileItem( props ){
  const { id, name, url, img } = props;

  return (
    <Link box href={url}>
      <Tile img={img}>
          <Title>{name}</Title>
      </Tile>
    </Link>    
    
  )
  
}
