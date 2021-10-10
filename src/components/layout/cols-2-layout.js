import React from 'react';
import Stack from '@mui/material/Stack';
import Body from 'core/ui/layout/body';
import Section from 'core/ui/layout/section';
import GridContainer from 'core/ui/layout/grid_container';
import GridItem from 'core/ui/layout/grid_item';
import RelatedStories from 'components/ui/related_stories'

export default function Cols2Layout( props ){
  const { banner, mainCol, rightCol, id } = props 
  return (
    <Stack>
      {banner &&
        <div style={{marginBottom: '1rem'}}>
          <Section compact className="section-0">
            {banner}
          </Section>
        </div>
      }
      <Body>
        <GridContainer className="page-module" fill>
          <GridItem xs={12} sm={12} md={9} lg={10} style={{paddingRight: '1rem'}}>
              {mainCol}
          </GridItem>
          <GridItem xs={12} sm={12} md={3} lg={2} style={{paddingRight: '1rem'}}>
            <RelatedStories {...props} filter={id} />
            {rightCol}
          </GridItem>
        </GridContainer>
      </Body>
    </Stack>

  )
} 