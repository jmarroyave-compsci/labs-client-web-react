import React from 'react'
import _Banner from 'components/ui/banner';
import TextLink from "core/ui/text-link"
import withData from './data/with-data-stories-podcast-music'
import Carousel from 'components/ui/carousel'
import Item from './item';

const Banner = function( props ){
    const { data, loading, hero } = props;

    return (
      <_Banner
          {...props}      
          title="Music Podcasts"
          carousel={
            <Carousel 
              data={data}
              renderItem={ (item) => <Item {...item}/>}
            />        
          }
          footer={
            <TextLink border href={`/podcasts/stories/music`}> See more</TextLink>
          }
      />
    )
}

export default withData(Banner);


