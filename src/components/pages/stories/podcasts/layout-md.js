import React from 'react';
import Body from 'core/ui/layout/body';
import GridContainer from 'core/ui/layout/grid_container';
import GridItem from 'core/ui/layout/grid_item';
import Dashboard from './dashboard';
import RelatedStories from 'components/ui/related_stories'

function LayoutMD( props ){
  return (
    <Body>
      <GridContainer className="page-module" fill>
        <GridItem xs={12} sm={12} md={9} lg={10} style={{paddingRight: '1rem'}}>
	        <Dashboard {...props} />
        </GridItem>
        <GridItem xs={12} sm={12} md={3} lg={2} style={{paddingRight: '1rem'}}>
        	<RelatedStories {...props} filter={"podcasts"} />
        </GridItem>
      </GridContainer>
    </Body>
  )
}

export default LayoutMD;