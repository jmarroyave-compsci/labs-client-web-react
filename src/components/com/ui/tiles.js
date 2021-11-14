import React from 'react'
import GridContainer from 'core/ui/layout/grid_container';
import GridItem from 'core/ui/layout/grid_item';

export default function Tiles( props ){
    var { data, item, xs=12, sm=6, md=6, lg=4 } = props;
    return (
      <GridContainer>
        {data.map( _item => 
          <GridItem xs={xs} sm={sm} md={md} lg={lg}>
            {item(_item)}
          </GridItem>
        )}
      </GridContainer>
    )
}

