import React, { useEffect, useMemo } from 'react'
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
  const quote = useMemo(() => getQuote(tag), [tag]);
  
  return (
    <>
      <Medium suppressHydrationWarning>{quote.text}</Medium>
      <Small suppressHydrationWarning>{quote.from}</Small>
    </>
  )
}
