import React from 'react';
import Body from 'core/ui/layout/body';
import Dashboard from './dashboard';
import RelatedStories from 'components/ui/related_stories'

function LayoutXS( props ){
  return (
    <Body>
      <Dashboard {...props} />
      <RelatedStories {...props} filter={"people"} />
    </Body>
  )
}

export default LayoutXS;