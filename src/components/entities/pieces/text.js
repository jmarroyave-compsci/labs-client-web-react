import React from 'react'
import { Frame } from 'components/styles/boxes'
import { SubTitle, Paragraph } from 'components/styles/detail'


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
