import React from 'react'
import { styled } from '@mui/material/styles';
import Body from 'core/ui/layout/body';
import _Title from "com/title";
import { Frame } from 'style/boxes'
import { SubTitle, Medium, Small } from 'style/detail'
import Awarded from 'com/awarded';
import Field from 'com/field';
import Media from 'com/media';
import Stack from 'com/ui/stack';
import LinkEntity from 'com/entities/entity/link'

export default function Dashboard( props ){
  var { data, loading } = props;
  data = (data) ? data : {};

  return (
    <Stack>
      <Media src={(data.image) ? data.image.poster : null}/>

      <_Title text={`${data.festival.name} [${data.year}]`}/>

      <Frame>
        <SubTitle>awarded</SubTitle>
        <Awarded data={data.awarded}/>
      </Frame>

    </Stack>
  )
}
