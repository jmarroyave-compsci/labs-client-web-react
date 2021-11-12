import React from 'react'
import Grid from 'com/ui/grid';

export default function Tiles( props ){
    var { data, item, xs=12, sm=6, md=6, lg=4 } = props;
    return (
          <Grid
            data={data}
            item={ item }
            xs={xs} sm={sm} md={md} lg={lg}
            noPaging={true}
            noPadding={true}
          />
    )
}

