import React from 'react'
import { styled } from '@mui/material/styles';
import Card from 'core/ui/cards/media';
import Link from 'core/ui/link'
import config from 'app/config'

const Tile = styled('div')( ({theme, img}) =>({
  width: '100%',
  height: '7rem',
  padding: '1rem',
  color: theme.palette.primary.contrastText, 
  backgroundColor: theme.palette.background.paper, 
  backgroundImage: `url('${config.APP.BASE_PATH}${img}')`, 
  margin: '0 2px 2px 0',
  display: 'flex',
  textAlign : 'center',
  justifyContent: 'center',
  alignItems: 'center',
  flex: 1,
  fontSize: "1.8rem",
  lineHeight: "2rem",
  textTransform: 'lowercase',
}));


export default function TileItem( props ){
  const { id, name, url, img } = props;

  return (
    <Link box href={url}>
      <Tile img={img}>
          {name}
      </Tile>
    </Link>    
    
  )
  
}
