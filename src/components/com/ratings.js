import React from 'react'
import { Frame } from 'style/boxes'
import { SubTitle } from 'style/detail'
import Field from 'com/field';
import GridContainer from 'core/ui/layout/grid_container';
import GridItem from 'core/ui/layout/grid_item';

function Ratings( props ){
  const { data, loading, route } = props;

  if(!data || "name" in data ) return <div/>;

  return (
    <Frame>
      <SubTitle>Ratings</SubTitle>
      <GridContainer>
        {data && data.length > 0 && data.map( (item, key) => 
        <GridItem key={key} xs={6} sm={4} md={3} lg={2}>
            <Field title={item.name} data={item.averageRating}/>
        </GridItem>
        )}
      </GridContainer>
    </Frame>
  )
}

export default Ratings;
