import React from 'react'
import References from "components/entities/pieces/references";
import _Title from "components/entities/pieces/title";
import Media from 'components/entities/pieces/media';
import Stack from '@mui/material/Stack';
import { Frame } from 'components/styles/boxes'
import { SubTitle } from 'components/styles/detail'
import Field from 'components/entities/pieces/field';

export default function Dashboard( props ){
  var { data } = props;

    console.log(data)


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
