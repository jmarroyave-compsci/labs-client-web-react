import React from 'react'
import Stack from 'com/ui/stack';
import LoC from './loc';
import Screenshots from './screenshots';
import Sitemap from './sitemap';

const Content = ( props ) => {
  return (
    <Stack>
      <LoC/>
      <Screenshots/>
   </Stack>
  )
}

export default Content;