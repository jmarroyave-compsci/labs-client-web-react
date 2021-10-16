import React from 'react'
import Stack from '@mui/material/Stack';
import Pill from 'core/ui/pill'
import { Frame } from 'components/styles/boxes'
import { SubTitle } from 'components/styles/detail'


export default function References( props ){
  const { data } = props;
  if(!data) return <div/>;

  return (
    <Frame>
      <Stack>
          <SubTitle>More information</SubTitle>
          <div>
            {data.imdb && <a href={data.imdb}><Pill text="IMDB"/></a>}
          </div>
          <div>
            {data.wikiTopic && <a href={`https://wikipedia.com/wiki/${data.wikiTopic.replace(/ /g, "_")}`}><Pill text="wikipedia"/></a>}
          </div>
      </Stack>
    </Frame>
  )
}
