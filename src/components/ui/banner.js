import React from 'react'
import Stack from '@mui/material/Stack';
import TextLink from "core/ui/text-link"
import { Title, Description, Footer } from 'components/styles/banner'

const Banner = function( props ){
    const { title, description, carousel, footer, hero } = props;

    return (
      <Stack>
        <Title>{title}</Title>
        {description && <Description>{description}</Description>}
        {!hero && carousel }
        {!hero &&
          <Footer>
            {footer}
          </Footer>
        }
      </Stack>
    )
}

export default Banner;
