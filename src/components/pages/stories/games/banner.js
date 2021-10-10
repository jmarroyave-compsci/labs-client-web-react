import React from 'react'
import _Banner from 'components/ui/banner';
import TextLink from "core/ui/text-link"

const Banner = function( props ){
    const { data, loading, hero } = props;

    return (
      <_Banner
          {...props}      
          title="Games"
          description="a dashboard with information from games, how they are segmented, awards and ratings"
          footer={
            <TextLink border href="/games"> See more</TextLink>
          }
      />
    )
}

export default Banner;
