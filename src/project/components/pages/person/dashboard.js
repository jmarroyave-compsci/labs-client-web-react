import React from 'react'
import GridContainer from 'core/ui/layout/grid_container';
import GridItem from 'core/ui/layout/grid_item';
import Detail from './detail'

function Dashboard( props ){
  const { data, loading } = props;

  return (
    <GridContainer justifyContent='center' fill style={{width: '100%'}}>
      <GridItem xs={12} sm={12} md={12}>
          <Detail data={data}/>
      </GridItem>
    </GridContainer>
  )
}

export default Dashboard;