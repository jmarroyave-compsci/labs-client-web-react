import React from 'react'
import _Banner from 'components/ui/banner';
import TextLink from "core/ui/text-link"

const Banner = function( props ){
    const { data, loading, hero } = props;

    return (
      <_Banner
          {...props}      
          title="Project"
          footer={
            <TextLink border href="/about/project">See more</TextLink>
          }
      />
    )
}

export default Banner;

