import React from 'react'
import GridContainer from 'core/ui/layout/grid_container';
import GridItem from 'core/ui/layout/grid_item';
import Pill from 'core/ui/pill'

function References( props ){
  const { data, loading, route } = props;

  return (
    <GridContainer>
      <GridItem xs={12} sm={12} md={12}>        
        <h4>More information</h4>
      </GridItem>
      <GridItem xs={12} sm={12} md={12}>        
        {data && data.imdb && <a href={data.imdb}><Pill text="IMDB"/></a>}
        {data && data.imdb && <a href={data.imdb}><Pill text="IMDB"/></a>}
        {data && data.imdb && <a href={data.imdb}><Pill text="IMDB"/></a>}
      </GridItem>
    </GridContainer>
  )
}

export default References;