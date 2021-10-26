import React from 'react';
import Stack from 'com/ui/stack';
import Body from 'core/ui/layout/body';
import Section from 'core/ui/layout/section';
import GridContainer from 'core/ui/layout/grid_container';
import GridItem from 'core/ui/layout/grid_item';
import RelatedStories from "com/related_stories"
import { FrameSkeleton } from 'style/boxes';

export default function Cols2Layout( props ){
  const { banner, mainCol, rightCol, id } = props 
  const noPadding = (props.noPadding) ? props.noPadding : false;
  return (
    <Stack>
      {banner &&
        <div style={{marginBottom: '2rem'}}>
          <Section compact className="section-0">
            {banner}
          </Section>
        </div>
      }
      <Body noPadding={noPadding}>
        <GridContainer className="page-module" fill>
          <GridItem xs={12} sm={12} md={9} lg={10}>
            <FrameSkeleton>
              {mainCol}
            </FrameSkeleton>
          </GridItem>
          <GridItem xs={12} sm={12} md={3} lg={2}>
            <div style={{paddingLeft: '1rem', paddingRight: '0.5rem'}}>
              <RelatedStories {...props} filter={id} breadcrumbs={props.breadcrumbs}/>
              {rightCol}
            </div>
          </GridItem>
        </GridContainer>
      </Body>
    </Stack>

  )
} 