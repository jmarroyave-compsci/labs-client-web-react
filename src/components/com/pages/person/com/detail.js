import React from 'react'
import Body from 'core/ui/layout/body';
import GridContainer from 'core/ui/layout/grid_container';
import GridItem from 'core/ui/layout/grid_item';
import References from "com/references";
import Awards from "com/awards";
import Date from "core/ui/date";
import Pill from 'core/ui/pill'
import Media from 'com/media';
import Stack from 'com/ui/stack';
import Professions from "com/professions";
import _Title from "com/title";
import Movies from "com/movies";
import { Frame } from 'style/boxes'
import { SubTitle } from 'style/detail'
import Field from 'com/field';

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