import React from 'react'
import { styled } from '@mui/material/styles';
import Body from 'core/ui/layout/body';
import GridContainer from 'core/ui/layout/grid_container';
import GridItem from 'core/ui/layout/grid_item';
import References from "components/entities/pieces/references";
import StreamBy from "components/entities/pieces/stream_by";
import Rating from "components/entities/pieces/ratings";
import People from "components/entities/pieces/people";
import Awards from "components/entities/pieces/awards";
import _Title from "components/entities/pieces/title";
import Genres from "components/entities/pieces/genres";
import Date from "core/ui/date";
import Pill from 'core/ui/pill'
import Media from 'components/entities/pieces/media';
import Value from 'core/ui/value';
import Stack from '@mui/material/Stack';
import Text from 'components/entities/pieces/text';
import { Frame } from 'components/styles/boxes'
import { SubTitle } from 'components/styles/detail'
import Field from 'components/entities/pieces/field';

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
        <Field title="Released" data={data.releasedDate} format="year"/>
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

      <People type="directors" data={data.directors} story="/movies/stories/directors"/>

      <People type="writers" data={data.writers} story="/movies/stories/writers"/>

      <People type="crew" data={data.cast}/>

      <StreamBy data={data.streamBy}/>

    </Stack>
  )
}
