import React from 'react'
import Stack from 'com/ui/stack';
import TextLink from "core/ui/link"
import { Title, Description, Footer } from 'style/banner'
import Carousel from 'com/ui/carousel'
import Tiles from 'com/ui/tiles'
import LinkButton from 'com/ui/link-button';

const Banner = function( props ){
    const { title, description, carousel, footer, hero, actions, data, item, showData, renderer="carousel", xs=12, sm=6, md=4, lg=3 } = props;
    return (
      <Stack>
        <Title>{title}</Title>
        {description &&  <Description>{description}</Description>}
        {!hero && carousel }
        {!hero && showData === true && !carousel && Data( renderer, data, item, xs, sm, md, lg ) }
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

const Data = function( renderer, data, item, xs, sm, md, lg ){

  switch(renderer) {
    case "tiles":
      return (
          <Tiles 
            data={data}
            item={ item }
            xs={xs} sm={sm} md={md} lg={lg}
            noPaging={true}
            noPadding={true}
          />
      )
    case "carousel":
    default:
      return (
          <Carousel 
            data={data}
            xs={xs} sm={sm} md={md} lg={lg}
            renderItem={ item }
          />            
      )
  }

}


export default Banner;
