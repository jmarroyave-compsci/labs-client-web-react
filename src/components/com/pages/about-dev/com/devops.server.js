import React from 'react'
import Body from 'core/ui/layout/body'
import Stack from 'com/ui/stack';
import { Title, SubTitle, Description } from 'style/banner'
import { Frame } from 'style/boxes'
import { getCICD } from 'data/ci-cd'
import Indicator from 'com/ui/dashboard/indicator.server';

export default function Devops( props ){
  var data = getCICD();
  data = data[Object.keys(data).pop()]
  return (
    <Stack>
      <Title>CI/CD</Title>
      <Description>
        <div>number of commits</div>
        <Stack direction='row' spacing={2}>
        { data.map( d => 
          <span key={d.name}>
            <Indicator key={d.name} title={d.name} value={d.commits} format={"0a"} width={150}/>
          </span>
        )}
        </Stack>
      </Description>
    </Stack>
  )

}

