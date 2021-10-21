import React from 'react'
import _Banner from 'components/ui/banner';
import TextLink from "core/ui/text-link"

const Banner = function( props ){
    const { data, loading, hero } = props;

    return (
      <_Banner
          {...props}      
          title="Data"
          footer={
            <TextLink border href="/about/data">See more</TextLink>
          }
      />
    )
}

export default Banner;

