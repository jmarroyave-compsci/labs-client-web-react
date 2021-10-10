import React from 'react'
import _Banner from 'components/ui/banner';
import TextLink from "core/ui/text-link"
import Carousel from 'components/ui/carousel'
import Item from './item';
import withData from './data/with-data-stories-movie-awards'

const Banner = function( props ){
    const { data, loading, hero, year } = props;

    return (
      <_Banner
          {...props}
          title="Awards"
          description="search and visualize the award's information from the Oscars, Golden Globes and Emmys"
          carousel={
              <Carousel 
                data={data}
                renderItem={ (item) => <Item data={item}/>}
              />
          }
          footer={
            <TextLink border href={`/stories/awards/${year}`}> See more</TextLink>
          }
      />
    )
}

export default withData(Banner);
