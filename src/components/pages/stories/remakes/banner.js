import React from 'react'
import _Banner from 'components/ui/banner';
import TextLink from "core/ui/text-link"
import Carousel from 'components/ui/carousel'
import Item from './item';
import { useSelector } from 'react-redux'

const Banner = function( props ){
    const page = useSelector(( state ) => state.stories_remakes )
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
            <TextLink border href={`/${(page.props) ? page.props.entity : ""}/stories/remakes`}> See more</TextLink>
          }
      />
    )
}

export default Banner;