import React from 'react'
import References from "components/entities/pieces/references";
import _Title from "components/entities/pieces/title";
import Media from 'components/entities/pieces/media';
import Field from 'components/entities/pieces/field';
import Stack from '@mui/material/Stack';
import { Title } from 'components/styles/detail'

export default function Dashboard( props ){
  var { data } = props;

  return (
    <Stack>
        <Media src={(data.image) ? data.image.poster : null}/>
        <_Title text={data.name}/>

        <Title>general information</Title>
        <Field title="established" data={data.established}/>
        <Field title="country" data={data.country}/>
        <Field title="continent" data={data.continent}/>

        <References data={data}/>
    </Stack>
  )
}
