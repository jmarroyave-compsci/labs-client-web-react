import React from 'react'
import { styled } from '@mui/material/styles';
import Stack from '@mui/material/Stack';
import Pill from 'core/ui/pill'

const Frame = styled('div')({
  marginTop: '1rem',
  marginBottom: '1rem',
});

const SubTitle = styled('h4')({
  margin: 0,
});

export default function References( props ){
  const { data } = props;

  if(!data) return <div/>;

  return (
    <Frame>
      <Stack>
          <SubTitle>More information</SubTitle>
          <div>
            {data && data.imdb && <a href={data.imdb}><Pill text="IMDB"/></a>}
          </div>
      </Stack>
    </Frame>
  )
}
