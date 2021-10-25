import React from 'react'
import Section from 'core/ui/layout/section';
import Stack from 'com/ui/stack';
import DataSources from './sources';
import DataRepos from './repos';

const Content = ( props ) => {
  return (
    <Stack>
      <Section><DataSources/></Section>
      <Section><DataRepos/></Section>
   </Stack>
  )
}

export default Content;