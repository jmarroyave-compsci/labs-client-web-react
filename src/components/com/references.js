import React from 'react'
import Stack from 'com/ui/stack';
import Pill from 'core/ui/pill'
import { Frame } from 'style/boxes'
import { SubTitle } from 'style/detail'

export default function References( props ){
  const { data, website } = props;
  if(!data || !( website || 
    data.id?.startsWith("tt") || 
    data.id?.startsWith("nm") || 
    data.wikiTopic ) ) return <div/>;

  return (
    <Frame>
      <SubTitle>More information</SubTitle>
      <Stack direction='row'>
          {website && <a href={website}><Pill text="website"/></a>}
          {data.id && data.id.startsWith("tt") && <a href={`https://www.imdb.com/title/${data.id}/`}><Pill text="IMDB"/></a>}
          {data.id && data.id.startsWith("nm") && <a href={`https://www.imdb.com/name/${data.id}/`}><Pill text="IMDB"/></a>}
          {data.wikiTopic && <a href={`https://wikipedia.com/wiki/${data.wikiTopic.replace(/ /g, "_")}`}><Pill text="wikipedia"/></a>}
      </Stack>
    </Frame>
  )
}
