import React from 'react'
import _Banner from 'components/ui/banner';
import TextLink from "core/ui/text-link"

const Banner = function( props ){
    const { data, loading, hero } = props;

    return (
      <_Banner
          {...props}      
          title="People"
          description="a dashboard with information from over 11M people, their professions and age distribution"
          footer={
            <TextLink border href={`/people`}> See more</TextLink>
          }
      />
    )
}

export default Banner;


