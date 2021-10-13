import React from 'react'
import _Banner from 'components/ui/banner';
import TextLink from "core/ui/text-link"
import Carousel from 'components/ui/carousel'
import Item from './item';
import withData from './data/fetch'

const Banner = function( props ){
    const { data, loading, hero } = props;

    return (
      <_Banner
          {...props}      
          title="Remakes"
          carousel={
            <Carousel 
              data={data}
              renderItem={ (item) => <Item {...item}/>}
            />            
          }
          footer={
            <TextLink border href={`/stories/${(props && props.route && props.route.entity) ? props.route.entity : props.entity}/remakes`}> See more</TextLink>
          }
      />
    )
}

export default withData(Banner);