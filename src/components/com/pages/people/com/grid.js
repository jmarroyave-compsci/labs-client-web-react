import React, { useState } from 'react'
import Grid from 'com/ui/grid';
import Stack from 'com/ui/stack'
import Item from 'com/entities/person/item';

function PeopleGrid( props ){
  const { data, loading } = props;

 
  console.log(props);

  return (
    <Stack>
      <Grid 
          data={data}
          loading={loading}
          item={(data) => <Item {...data}/>}
      />
    </Stack>
  )

}


export default PeopleGrid;