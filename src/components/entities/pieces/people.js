import React from 'react'
import { Frame } from 'components/styles/boxes'
import { SubTitle } from 'components/styles/detail'
import LinkPerson from 'components/entities/person/link'
import Link from 'components/entities/person/link'
import GridContainer from 'core/ui/layout/grid_container';
import GridItem from 'core/ui/layout/grid_item';

function People( props ){
  const { data, loading, type, story } = props;

  if(!data || data.length == 0) return <div/>;

  return (
    <Frame>
      {data && data.length > 0 && <SubTitle>(story) ? <Link href={story}>{type}</Link> : {type}</SubTitle>}
      <GridContainer>
      {data && data.length > 0 && data.map( (item, key) => 
        <GridItem key={key} xs={12} sm={6} md={4} lg={3}>
          <div><LinkPerson id={item.id} >{item.name}</LinkPerson></div>
        </GridItem>
      )}
      </GridContainer>
    </Frame>
  )
}

export default People;
