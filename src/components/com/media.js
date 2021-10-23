import React from 'react'
import GridContainer from 'core/ui/layout/grid_container';
import GridItem from 'core/ui/layout/grid_item';
import Image from 'core/ui/image';
import Icon from '@material-ui/core/Icon';
import { Frame } from 'style/boxes'

function Media( props ){
  const { src, loading } = props;

  const height = 300;

  return (
    <Frame>
      <div style={{height: height, width: '100%', backgroundColor: '#333'}}>
        <MainImage src={src} height={height} width={250}/>
      </div>
    </Frame>
  )
}

function MainImage( props ){
  const { src, height, width } = props
  if ( !src) return <Placeholder {...props}/>

  return (
    <Image src={src} height={height}/>
    )  
}

function Placeholder(props){
  const { height, width } = props
  return (
    <div style={{width: `${width}px`, height: `${height}px`, display: 'flex', alignItems: "center", justifyContent: "center", backgroundColor: '#888'}}>
      <Icon>broken_image</Icon>
    </div>
    )  
}

export default Media;
