import React from 'react'
import GridContainer from 'core/ui/layout/grid_container';
import GridItem from 'core/ui/layout/grid_item';

function StreamBy( props ){
  const { data, loading, route } = props;

  return (
    <GridContainer justifyContent='center' fill style={{width: '100%'}}>
      {data && data.length > 0 && data.map( item => 
        <GridItem xs={12} sm={12} md={12}>
            {item.name && <div>Name: {item.name}</div>}
            {item.yearAdded && <div>Year added: {item.yearAdded}</div>}
        </GridItem>
      )}
    </GridContainer>
  )
}

export default StreamBy;
