import React from 'react'
import GridContainer from 'core/ui/layout/grid_container';
import GridItem from 'core/ui/layout/grid_item';

function Dashboard( props ){
  const { data, loading, route } = props;

  return (
    <GridContainer justifyContent='center' fill style={{width: '100%'}}>
      {data && data.length > 0 && data.map( item => 
        <GridItem xs={12} sm={12} md={12}>
            {item.name && <div>Name: {item.name}</div>}
            {item.year && <div>Year: {item.year}</div>}
            {item.category && <div>Category: {item.category}</div>}
            {item.won && <div>Won: {item.won}</div>}
            {item._id && <div>Id: {item._id}</div>}
        </GridItem>
      )}
    </GridContainer>
  )
}

export default Dashboard;