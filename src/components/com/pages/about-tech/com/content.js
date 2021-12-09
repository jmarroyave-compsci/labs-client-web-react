import React from 'react'
import Stack from 'com/ui/stack';
import LoC from './loc';
import Devops from './devops';
import LastError from './last-error';

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