import React from 'react'
import { styled } from '@mui/material/styles';


const Frame = styled('div')({
    margin: 0,
    marginBottom: '1rem',
});

const _Text = styled('p')({
    margin: 0,
    marginBottom: '1rem',
});

const SubTitle = styled('h4')({
  margin: 0,
});


export default function Text( props ){
  var { title, text } = props;

  if(!text) return null;
  
  return (
    <Frame>
        {title &&
          <SubTitle>{title}</SubTitle>
        }
        <_Text>{text}</_Text>        
    </Frame>
  )
}
