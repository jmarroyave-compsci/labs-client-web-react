import React from 'react'
import GridContainer from 'core/ui/layout/grid_container';
import GridItem from 'core/ui/layout/grid_item';

function Dashboard( props ){
  const { data, loading, route } = props;

  return (
    <div style={{width: '100%'}}>
      <GridContainer justifyContent='center' fill style={{width: '100%'}}>
        <GridItem xs={12} sm={12} md={12}>
          <GridContainer justifyContent='center' fill>
            <h1>{route.name}</h1>
          </GridContainer>
        </GridItem>
      </GridContainer>
    </div>
  )
}

export default Dashboard;