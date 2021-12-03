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
import People from "com/people";
import { Frame } from 'style/boxes'
import { SubTitle } from 'style/detail'
import Field from 'com/field';

function Dashboard( props ){
  var { data, loading } = props;
  data = (data) ? data : {};

  return (
    <Stack>
      <Media src={(data.image) ? data.image.poster : null}/>
      <Professions data={data.profession}/>
      <_Title text={data.name}/>

      <Frame>
        <SubTitle>General information</SubTitle>
        <Field title="Birth" data={data.birthYear}/>
        <Field title="Death" data={data.deathYear}/>
      </Frame>

      <References data={data}/>

      <Awards data={ (data) ? data.awards : null }/>

      <Movies type="acted" data={data.acted}/>
      <Movies type="directed" data={data.directed}/>
      <Movies type="produced" data={data.produced}/>
      <Movies type="wrote" data={data.wrote}/>

      <People type="directed by" data={data.directedBy}/>
      <People type="directed to" data={data.directedTo}/>
      <People type="acted with" data={data.actedWith}/>      

    </Stack>
  )
}

export default Dashboard;