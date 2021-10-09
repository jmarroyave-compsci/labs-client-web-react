import React from 'react';
import Body from 'core/ui/layout/body';
import Post from './post';
import RelatedStories from 'components/ui/related_stories'

function LayoutXS( props ){
  return (
    <Body>
      <Post {...props} />
      <RelatedStories {...props} filter={"log"} />
    </Body>
  )
}

export default LayoutXS;