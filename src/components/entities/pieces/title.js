import React from 'react'
import { Frame } from 'components/styles/boxes'
import { styled } from '@mui/material/styles';

export const Title = styled('h2')({
  fontSize: "2.5rem",
  lineHeight: "2.75rem",
  padding: '0',
  margin: '0',
});

const SubTitle1 = styled('div')({
  margin: 0,
  padding: 0,
  fontSize: '0.9rem',
  lineHeight: '1.3rem',
});

const SubTitle2 = styled('div')({
  margin: 0,
  padding: 0,
  fontSize: '0.8rem',
  lineHeight: '1.2rem',
  fontWeight: 500,
});


export default function _Title( props ){
  var { text, subText1, subText2, subText, link } = props;
  subText = (subText) ? subText : subText1;

  var _Title = <Title>{text}</Title>

  if( link ){
    _Title = <a href={link}>{_Title}</a>
  }

  return (
    <Frame>
        {_Title}        
        {subText && <SubTitle1>{subText}</SubTitle1>}
        {subText2 && <SubTitle2>by {subText2}</SubTitle2>}
    </Frame>
  )
}

