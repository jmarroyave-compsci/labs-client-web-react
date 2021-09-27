import React from 'react'
import GridContainer from 'core/ui/layout/grid_container';
import GridItem from 'core/ui/layout/grid_item';
import References from "components/entities/pieces/references";
import Awards from "components/entities/pieces/awards";
import Date from "core/ui/date";
import Pill from 'core/ui/pill'
import Media from 'components/entities/pieces/media';

function Dashboard( props ){
  var { data, loading } = props;
  data = (data) ? data : {};

  return (
    <GridContainer justifyContent='center' fill style={{width: '100%'}}>
      <GridItem xs={12} sm={12} md={12}>
        <h1>{data.name}</h1>
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
        {data && data.birthDate &&  <span>Birth date: <Date value={data.birthDate}/></span>}
      </GridItem>
      <GridItem xs={12} sm={12} md={12}>
        {data && data.directed && data.directed.length > 0 &&  <span>Directed: {data.directed.map( _item => `${ _item } ` )}</span>}
      </GridItem>
      <GridItem xs={12} sm={12} md={12}>
        {data && data.acted && data.acted.length > 0 &&  <span>Acted: {data.acted.map( _item => `${ _item } ` )}</span>}
      </GridItem>
        <GridItem xs={12} sm={12} md={12}>
          <Awards data={ (data) ? data.awards : null }/>
        </GridItem>
    </GridContainer>
  )
}

export default Dashboard;