import React from 'react'
import { styled } from '@mui/material/styles';

const Title = styled('h1')({
  margin: 0,
  padding: 0,
  paddingBottom: "0.5rem",
  fontSize: '3rem',
  lineHeight: '3rem',
});

export default function _Title( props ){
  const { text } = props;

  return (
    <Title>{text}</Title>
  )
}
