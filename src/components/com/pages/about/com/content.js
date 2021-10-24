import React from 'react'
import Stack from 'com/ui/stack';
import Section from 'core/ui/layout/section';
import BannerData from 'com/pages/about-data/banner'
import BannerProject from 'com/pages/about-project/banner'
import BannerTech from 'com/pages/about-tech/banner'
import BannerTimeline from 'com/pages/about-timeline/banner'

const Content = ( props ) => {
  return (
    <Stack>
      <Section><BannerProject/></Section>
      <Section><BannerData/></Section>
      <Section><BannerTech/></Section>
      <Section><BannerTimeline/></Section>
   </Stack>
  )
}

export default Content;