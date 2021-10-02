import React from 'react'
import Carousel from 'components/ui/carousel'
import LinkPodcast from 'components/entities/podcast/link'
import Card from 'core/ui/cards/img-text'
import PodcastItem from './item';

export default function BannerCarousel( props ){
    const { data, loading } = props;
    return (
        <Carousel 
          data={data}
          renderItem={renderItem}
        />
    )
}

function renderItem(item){
  return <PodcastItem {...item}/>
}
