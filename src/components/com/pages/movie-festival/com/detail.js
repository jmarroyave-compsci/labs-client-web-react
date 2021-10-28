import React from 'react'
import References from "com/references";
import _Title from "com/title";
import Media from 'com/media';
import Stack from 'com/ui/stack';
import { Frame } from 'style/boxes'
import { SubTitle } from 'style/detail'
import Field from 'com/field';

export default function Dashboard( props ){
  var { data } = props;
  return (
    <Frame>    
      <Stack>
          <Media src={(data.image) ? data.image.poster : null}/>
          <_Title text={data.name}/>

          <Frame>
            <SubTitle>general information</SubTitle>
            <Field title="established" data={data.established}/>
            <Field title="country" data={data.country}/>
            <Field title="continent" data={data.continent}/>
          </Frame>

          <References data={data}/>
      </Stack>
    </Frame>
  )
}
