import React from 'react'
import Stack from 'com/ui/stack';
import TextLink from "core/ui/text-link"
import { Title, Description, Footer } from 'style/banner'
import Carousel from 'com/ui/carousel'
import LinkButton from 'com/ui/link-button';

const Banner = function( props ){
    const { title, description, carousel, footer, hero, actions, data, item, showData } = props;
    return (
      <Stack>
        <Title>{title}</Title>
        {description &&  <Description>{description}</Description>}
        {!hero && carousel }
        {!hero && showData === true && !carousel && Data( "carousel", data, item ) }
        {!hero &&
          <Footer>
            {actions && actions.map( (item, idx) => 

              <LinkButton key={idx} border href={item.url}>{item.title}</LinkButton>
            )}
            {footer}
            
          </Footer>
        }
      </Stack>
    )
}

const Data = function( renderer, data, item ){
  return (
      <Carousel 
        data={data}
        renderItem={ item }
      />            
  )
}

export default Banner;
