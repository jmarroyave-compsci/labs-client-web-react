import React from 'react'
import GridContainer from 'core/ui/layout/grid_container';
import GridItem from 'core/ui/layout/grid_item';
import Value from 'core/ui/value';

function Dashboard( props ){
  const { data, loading, route } = props;

  if(!data) return null;

  return (
    <GridContainer justifyContent='center' fill style={{width: '100%'}}>
      <h4>Awards</h4>
      {data && data.length > 0 && data.map( item => 
        <GridItem xs={12} sm={12} md={12}>
            {item.year && <Value label='Year' value={item.year}/>}
            {item.name && <Value label='Name' value={item.name}/>}
            {item.category && <Value label='Category' value={item.category}/>}
            {item.won && <Value label='Won' value={item.won}/>}
        </GridItem>
      )}
    </GridContainer>
  )
}

export default Dashboard;