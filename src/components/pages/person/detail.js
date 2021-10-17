import React from 'react'
import Body from 'core/ui/layout/body';
import GridContainer from 'core/ui/layout/grid_container';
import GridItem from 'core/ui/layout/grid_item';
import References from "components/entities/pieces/references";
import Awards from "components/entities/pieces/awards";
import Date from "core/ui/date";
import Pill from 'core/ui/pill'
import Media from 'components/entities/pieces/media';
import Stack from '@mui/material/Stack';
import Professions from "components/entities/pieces/professions";
import _Title from "components/entities/pieces/title";
import Movies from "components/entities/pieces/movies";
import { Frame } from 'components/styles/boxes'
import { SubTitle } from 'components/styles/detail'
import Field from 'components/entities/pieces/field';

function Dashboard( props ){
  var { data, loading } = props;
  data = (data) ? data : {};

console.log(data)

  return (
    <Stack>
      <Media src={data.image}/>
      <Professions data={data.profession}/>
      <_Title text={data.name}/>

      <Frame>
        <SubTitle>General information</SubTitle>
        <Field title="Birth" data={data.birthDate} format="year"/>
        <Field title="Death" data={data.deathDate} format="year"/>
      </Frame>

      <References data={data}/>

      <Awards data={ (data) ? data.awards : null }/>

      <Movies type="acted" data={data.acted}/>
      <Movies type="directed" data={data.directed}/>
      <Movies type="wrote" data={data.wrote}/>
    </Stack>
  )
}

export default Dashboard;