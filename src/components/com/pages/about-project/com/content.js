import React from 'react'
import Stack from 'com/ui/stack';
import Section from 'core/ui/layout/section';
import BannerSitemap from 'com/pages/about-project-sitemap/banner'
import BannerRoadmap from 'com/pages/about-project-roadmap/banner'
import BannerLog from 'com/pages/about-project-blog/banner'

const Content = ( props ) => {
  return (
    <Stack>
      <Section className="section-1"><BannerLog data={props.blog}/></Section>
      <Section className="section-3"><BannerRoadmap/></Section>
      <Section className="section-0"><BannerSitemap/></Section>
   </Stack>
  )
}

export default Content;