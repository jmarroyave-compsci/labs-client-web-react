import React from 'react'
import Stack from 'com/ui/stack';
import DataSources from './sources';
import DataRepos from './repos';

const Content = ( props ) => {
  return (
    <Stack>
      <DataSources/>
      <DataRepos/>
   </Stack>
  )
}

export default Content;