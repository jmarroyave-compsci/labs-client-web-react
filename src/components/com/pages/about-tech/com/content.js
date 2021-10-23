import React from 'react'
import Stack from 'com/ui/stack';
import LoC from './loc';
import Devops from './devops';

const Content = ( props ) => {
  return (
    <Stack>
      <LoC/>
      <Devops/>
   </Stack>
  )
}

export default Content;