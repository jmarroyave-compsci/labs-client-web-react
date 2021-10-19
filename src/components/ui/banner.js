import React from 'react'
import Stack from '@mui/material/Stack';
import TextLink from "core/ui/text-link"
import { Title, Description, Footer } from 'components/styles/banner'
import Carousel from 'components/ui/carousel'

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
              <TextLink key={idx} border href={item.url}>{item.title}</TextLink>
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
