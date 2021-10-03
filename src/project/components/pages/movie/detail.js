import React from 'react'
import { styled } from '@mui/material/styles';
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


const Frame = styled('div')({
  margin: "0rem 2rem 2rem 2rem"
});

export default function Dashboard( props ){
  var { data, loading } = props;
  data = (data) ? data : {};

  return (
    <Stack>
      <Media src={data.image}/>
      <Frame> 
        <Genres data={data.genre}/>
        <Title text={data.title}/>

        <Rating data={ (data) ? data.rating : null }/>

        <StreamBy data={ (data) ? data.streamBy : null }/>

        <People type="directors" data={ (data) ? data.director : null }/>

        <People type="writers" data={ (data) ? data.writer : null }/>

        <People type="cast" data={ (data) ? data.cast : null }/>

        <Awards data={ (data) ? data.awards : null }/>
      </Frame>
    </Stack>
  )
}


/*
      <h4>General information</h4>
      {data && data.country && data.country.length > 0 &&  <Value label="Country" value={data.country.reduce( (_item, tot), tot + `${ _item } `, "")}/>}
      {data && data.type && data.type.length > 0 &&  <Value label='Type' value={data.type}/>}
      {data && data.duration  &&  <Value label="Duration" value={data.duration}/>}
      {data && data.releasedDate > 0 &&  <Value label="Released date" value={<Date value={data.releasedDate}/>}/>}
      {data && data.endedDate > 0 &&  <Value label="Ended date" value={<Date value={data.endedDate}/>}/>}
*/