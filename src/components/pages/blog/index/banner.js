import React from 'react'
import _Banner from 'components/ui/banner';
import TextLink from "core/ui/text-link"
import Carousel from 'components/ui/carousel'
import Item from './item';

const Banner = function( props ){
    const { data, loading, hero } = props;

    return (
      <_Banner
          {...props}      
          title="Latest posts"
          description="some lessons learned while programming this project"
          carousel={
            <Carousel 
              data={data}
              renderItem={ (item) => <Item {...item}/>}
            />            
          }
          footer={
            <TextLink border href={`/about/log`}> See more</TextLink>
          }
      />
    )
}

export default Banner;
