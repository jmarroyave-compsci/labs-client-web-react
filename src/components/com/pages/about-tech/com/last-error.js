import React from 'react'
import { getLastError } from 'data/lastError';
import Stack from 'com/ui/stack';
import { Title, SubTitle } from 'style/banner'
import { Frame } from 'style/boxes'
import { number as format } from 'core/lib/format'
import Indicator from 'com/ui/dashboard/indicator';
import LastErrorChart from './last-error-chart';

export default function LastError( props ){
  const data = getLastError();
  var days = (new Date() - new Date(data.lastError))
  days = Math.round(days/(1000*60*60*24))
  return (
    <Frame>
      <Stack>
        <Title>Q&A</Title>
        <Indicators lastError={data.lastError} log={data.log} />
        <FailuresLog log={data.log}/>
      </Stack>
    </Frame>
  )
}


function Indicators( props ){
  const maxFailures = props.log.reduce( (tot, cur) => (tot < cur.failures ) ? cur.failures : tot , 0 )
  var days = (new Date() - new Date(props.lastError))
  days = Math.round(days/(1000*60*60*24))
  return (
    <Frame>
      <Stack direction='row' spacing={2}>
        <span><Indicator title={"last failure"} value={days} format={"0a"} width={150} suffix={'days ago'}/></span>
        <span><Indicator title={"max failures"} value={maxFailures} format={"0a"} width={150}/></span>
      </Stack>
    </Frame>
  )
}

function FailuresLog( props ){
  const { log } = props;
  return (
    <Frame>
      <Stack>
        <SubTitle>Failures across time</SubTitle>
        <LastErrorChart data={log} height={250}/>
      </Stack>
    </Frame>
  )
}
