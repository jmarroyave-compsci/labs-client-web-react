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
      <SubTitle>More information</SubTitle>
      <Stack direction='row'>
          {data.id.startsWith("tt") && <a href={`https://www.imdb.com/title/${data.id}/`}><Pill text="IMDB"/></a>}
          {data.id.startsWith("nm") && <a href={`https://www.imdb.com/name/${data.id}/`}><Pill text="IMDB"/></a>}
          {data.wikiTopic && <a href={`https://wikipedia.com/wiki/${data.wikiTopic.replace(/ /g, "_")}`}><Pill text="wikipedia"/></a>}
      </Stack>
    </Frame>
  )
}
