import React from 'react'
import { getLastError } from 'data/lastError';
import Stack from 'com/ui/stack';
import { Title } from 'style/banner'
import { Frame } from 'style/boxes'
import { number as format } from 'core/lib/format'
import Indicator from 'com/ui/dashboard/indicator';

export default function Sources( props ){
  const data = getLastError();
  var days = (new Date() - new Date(data.lastError))
  days = Math.round(days/(1000*60*60*24))
  return (
    <Frame>
      <Stack>
        <Title>Q&A</Title>
        <Indicator title={"days since last accident"} value={days} format={"0a"} width={150}/>
      </Stack>
    </Frame>
  )
}
