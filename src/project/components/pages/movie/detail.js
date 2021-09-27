import React from 'react'
import GridContainer from 'core/ui/layout/grid_container';
import GridItem from 'core/ui/layout/grid_item';
import References from "components/entities/pieces/references";
import StreamBy from "components/entities/pieces/stream_by";
import Rating from "components/entities/pieces/ratings";
import People from "components/entities/pieces/people";
import Awards from "components/entities/pieces/awards";
import Date from "core/ui/date";
import Pill from 'core/ui/pill'
import Media from 'components/entities/pieces/media';

function Dashboard( props ){
  var { data, loading } = props;
  data = (data) ? data : {};

  console.log(data)

  return (
    <GridContainer justifyContent='center' fill style={{width: '100%'}}>
      <GridItem xs={12} sm={12} md={12}>
        <h1>{data.title}</h1>
        {data && data.profession && data.profession.length > 0 && <span>{data.profession.map( _item => <Pill text={_item}/> )}</span>}
      </GridItem>
      <GridItem xs={12} sm={12} md={12}>
        <Media data={data}/>
      </GridItem>
      <GridItem xs={12} sm={12} md={12}>
        <References data={ (data) ?  data.references : null }/>
      </GridItem>
      <GridItem xs={12} sm={12} md={12}>
        <h4>General information</h4>
          {data && data.country && data.country.length > 0 &&  <span>Country: {data.country.map( _item => `${ _item } ` )}</span>}
          {data && data.type && data.type.length > 0 &&  <span>Type: {data.type}</span>}
          {data && data.genre && data.genre.length > 0 &&  <span>Genre: {data.genre.map( _item => <Pill text={_item}/> )}</span>}
          {data && data.duration  &&  <span>Duration: {data.duration}</span>}
          {data && data.releasedDate > 0 &&  <span>Released date: <Date value={data.releasedDate}/></span>}
          {data && data.endedDate > 0 &&  <span>Ended date: <Date value={data.endedDate}/></span>}
      </GridItem>
      <GridItem xs={12} sm={12} md={12}>
        <StreamBy data={ (data) ? data.streamBy : null }/>
      </GridItem>
      <GridItem xs={12} sm={12} md={12}>
          <Rating data={ (data) ? data.rating : null }/>
      </GridItem>
      <GridItem xs={12} sm={12} md={12}>
        <People type="directors" data={ (data) ? data.director : null }/>
      </GridItem>
      <GridItem xs={12} sm={12} md={12}>
        <People type="writers" data={ (data) ? data.writer : null }/>
      </GridItem>
      <GridItem xs={12} sm={12} md={12}>
        <People type="cast" data={ (data) ? data.cast : null }/>
      </GridItem>
        <GridItem xs={12} sm={12} md={12}>
          <Awards data={ (data) ? data.awards : null }/>
        </GridItem>
    </GridContainer>
  )
}

export default Dashboard;