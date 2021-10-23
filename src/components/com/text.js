import React from 'react'
import { Frame } from 'style/boxes'
import { SubTitle, Paragraph } from 'style/detail'


export default function Text( props ){
  var { title, text } = props;

  if(!text) return <div/>;
  
  return (
    <Frame>
        {title && <SubTitle>{title}</SubTitle>}
        <Paragraph>{text}</Paragraph>        
    </Frame>
  )
}
