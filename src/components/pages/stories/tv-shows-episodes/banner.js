import React from 'react'
import _Banner from 'components/ui/banner';
import TextLink from "core/ui/text-link"

const Banner = function( props ){
    const { data, loading, hero } = props;

    return (
      <_Banner
          {...props}      
          title="Podcasts"
          description="a dashboard with information from over 30K podcasts, their categories and language distribution"
          footer={
            <TextLink border href={`/podcasts`}> See more</TextLink>
          }
      />
    )
}

export default Banner;

