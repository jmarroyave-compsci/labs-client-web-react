import React from 'react'
import GridContainer from 'core/ui/layout/grid_container';
import GridItem from 'core/ui/layout/grid_item';

function Ratings( props ){
  const { data, loading, route } = props;

  return (
    <GridContainer justifyContent='center' fill style={{width: '100%'}}>
      {data && data.length > 0 && data.map( item => 
        <GridItem xs={12} sm={12} md={12}>
            {item.name && <div>By: {item.name}</div>}
            {item.averageRating && <div>Rating: {item.averageRating}</div>}
            {item.votes && <div>Votes: {item.votes}</div>}
        </GridItem>
      )}
    </GridContainer>
  )
}

export default Ratings;
