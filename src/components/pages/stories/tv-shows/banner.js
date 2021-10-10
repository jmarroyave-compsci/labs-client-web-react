import React from 'react'
import _Banner from 'components/ui/banner';
import TextLink from "core/ui/text-link"

const Banner = function( props ){
    const { data, loading, hero } = props;

    return (
      <_Banner
          {...props}      
          title="TV Shows"
          description="a dashboard with information from over 8M tv shows, how they are segmented, awards and ratings"
          footer={
            <TextLink border href={`/tv-shows`}> See more</TextLink>
          }
      />
    )
}

export default Banner;
