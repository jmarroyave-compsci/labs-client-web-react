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
import Title from "components/entities/pieces/title";
import Genres from "components/entities/pieces/genres";
import Date from "core/ui/date";
import Pill from 'core/ui/pill'
import Media from 'components/entities/pieces/media';
import Value from 'core/ui/value';
import Stack from '@mui/material/Stack';
import Text from 'components/entities/pieces/text';


const Section = styled('h4')({
  margin: '1rem 0 0.5rem 0',
  padding: 0,
});

const Field = styled('div')({
  fontSize: '0.9rem',
  lineHeight: "1rem",
  marginBottom: '0.5rem',
});


export default function Dashboard( props ){
  var { data, loading } = props;
  data = (data) ? data : {};

  return (
    <Stack>
      <Media src={(data.image) ? data.image.poster : null}/>
      <Body> 
        <Stack direction='row'>
          <Pill color='primary' text={data.type}/>
          <Genres data={data.genre}/>
        </Stack>
        <Title text={data.title}/>

        <Section>general information</Section>
        {data && data.createdDate && <Field>Created: <Date value={data.createdDate}/></Field>}
        {data && data.language && <Field>Language: {data.language}</Field>} 
        {data && data.country && <Field>Country: {data.country}</Field>}  

        <Rating data={ (data) ? data.rating : null }/>

        <StreamBy data={ (data) ? data.streamBy : null }/>

        <People type="directors" data={ (data) ? data.director : null }/>

        <People type="writers" data={ (data) ? data.writer : null }/>

        <People type="cast" data={ (data) ? data.cast : null }/>
      </Body>
    </Stack>
  )
}
