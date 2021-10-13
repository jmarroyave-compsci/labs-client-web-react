import React from 'react'
import _Banner from 'components/ui/banner';
import TextLink from "core/ui/text-link"
import Carousel from 'components/ui/carousel'
import Item from './item';
import withData from './data/fetch'

const Banner = function( props ){
    const { data, loading, hero, route } = props;

    return (
      <_Banner
          {...props}      
          title="History"
          carousel={
            <Carousel 
              data={data}
              renderItem={ (item) => <Item {...item}/>}
            />            
          }
          footer={
            <TextLink border href={`/movies/stories/history`}> See more</TextLink>
          }
      />
    )
}

export default withData(Banner);