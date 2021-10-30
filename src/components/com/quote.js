import React, { useEffect } from 'react'
import { styled } from '@mui/material/styles';
import { Frame } from 'style/boxes'
import { Medium, Small } from 'style/detail'
import { getQuote } from 'data/quotes';

export const Group = styled('div')({
  padding: 0,
  margin: '0 0 0.5rem 0',
});


export default function Quote( props ){
  var { tag } = props;
  const quote = getQuote(tag);
  return (
    <>
      <Medium>{quote.text}</Medium>
      <Small>{quote.from}</Small>
    </>
  )
}
