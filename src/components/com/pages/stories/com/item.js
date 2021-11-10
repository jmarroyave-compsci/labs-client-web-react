import React from 'react'
import Tile from 'com/tile';

export default function Item( props ){
  const { title, url } = props
  return <Tile name={title} url={url} img="/img/ba_pro_act.jpg"/>  
}
