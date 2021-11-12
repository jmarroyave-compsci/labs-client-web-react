import React from 'react'
import { styled } from '@mui/material/styles';
import Body from 'core/ui/layout/body';
import GridContainer from 'core/ui/layout/grid_container';
import GridItem from 'core/ui/layout/grid_item';
import References from "com/references";
import StreamBy from "com/stream_by";
import Rating from "com/ratings";
import People from "com/people";
import Awards from "com/awards";
import _Title from "com/title";
import Genres from "com/genres";
import Date from "core/ui/date";
import Pill from 'core/ui/pill'
import Media from 'com/media';
import Value from 'core/ui/value';
import Stack from 'com/ui/stack';
import Text from 'com/text';
import { Frame } from 'style/boxes'
import { SubTitle } from 'style/detail'
import Field from 'com/field';
import Movies from 'com/movies';

export default function Dashboard( props ){
  var { data, loading } = props;
  data = (data) ? data : {};

  return (
    <Stack>
      <Media src={(data.image) ? data.image.poster : null}/>

      <Stack direction='row'>
        <Pill color='primary' text={data.type}/>
        <Genres data={data.genre}/>
      </Stack>
      <_Title text={data.title}/>

      <Frame>
        <SubTitle>general information</SubTitle>
        <Field title="Released" data={data.releaseYear}/>
        <Field title="Duration" data={data.duration} sufix="mins"/>
        <Field title="Classification" data={data.classification}/>
        <Field title="Language" data={data.language}/>
        <Field title="Country" data={data.country}/>
        <Field title="Production" data={data.production}/>
      </Frame>

      <References data={data}/>

      <Rating data={data.rating}/>

      <People type="cast" data={data.cast} story="/movies/stories/actors"/>

      <Awards data={data.awards}/>

      <Text title='plot' text={ (data.plot) ? data.plot : data.description }/>

      <Movies type="remakes" data={data.remakes}/>

      <People type="directors" data={data.directors} story="/movies/stories/directors"/>

      <People type="writers" data={data.writers} story="/movies/stories/writers"/>

      <People type="crew" data={data.cast}/>


      <StreamBy data={data.streamBy}/>

    </Stack>
  )
}
