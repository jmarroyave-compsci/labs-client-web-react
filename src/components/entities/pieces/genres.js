import React from 'react'
import { styled } from '@mui/material/styles';
import Pill from 'core/ui/pill'
import Stack from '@mui/material/Stack';

const Title = styled('h1')({
  margin: 0,
});

export default function Genres( props ){
  const { data } = props;

  if(!data) return <div/>;

  return (
    <Stack direction={'row'}>
      {data.map( (_item, idx) => <Pill variant='outlined' key={idx} text={_item}/> )}
    </Stack>
  )
}
