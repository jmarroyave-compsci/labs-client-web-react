import React from 'react'
import Carousel from 'components/ui/carousel'
import LinkPodcast from 'components/entities/podcast/link'
import Card from 'core/ui/cards/img-text'

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
  const { id, description, title, image, link} = item;
  return (
    <LinkPodcast id={id} entity={title}>
      <div style={{padding: '0.5rem'}} >
      <Card
        image={image}
        imageHeight={100}
        text={description}
        title={title}
      />
      </div>
    </LinkPodcast>
  )
  
}
