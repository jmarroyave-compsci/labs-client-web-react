import React from 'react'
import Stack from 'com/ui/stack';
import LoC from './loc.server';
import Devops from './devops.server';
import LastError from './last-error.server';

const Content = ( props ) => {
  return (
    <Stack>
      <Devops/>
      <LastError/>
      <LoC/>
   </Stack>
  )
}

export default Content;