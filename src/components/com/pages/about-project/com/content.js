import React from 'react'
import Stack from 'com/ui/stack';
import Section from 'core/ui/layout/section';
import BannerSitemap from 'com/pages/about-project-sitemap/banner'
import BannerRoadmap from 'com/pages/about-project-roadmap/banner'
import BannerLog from 'com/pages/about-project-blog/banner'

const Content = ( props ) => {
  return (
    <Stack>
      <Section><BannerLog data={props.data}/></Section>
      <Section><BannerRoadmap/></Section>
      <Section><BannerSitemap/></Section>
   </Stack>
  )
}

export default Content;