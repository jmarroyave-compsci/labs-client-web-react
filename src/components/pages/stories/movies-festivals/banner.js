import React from 'react'
import _Banner from 'components/ui/banner';
import TextLink from "core/ui/text-link"

const Banner = function( props ){
    const { data, loading, hero, route } = props;

    return (
      <_Banner
          {...props}      
          title="Festivals"
          footer={
            <TextLink border href={`/movies/stories/festivals`}> See more</TextLink>
          }
      />
    )
}

export default Banner;