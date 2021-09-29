import React from 'react'
import Carousel from 'components/ui/carousel'
import LinkMovie from 'components/entities/movie/link'
import Card from 'core/ui/cards/img-text'

export default function BannerCarousel( props ){
    const { data, loading } = props;
    const {  } = data || {};

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
    <LinkMovie id={id} entity={title}>
      <div style={{padding: '0.5rem'}} >
      <Card
        image={image}
        imageWidth={100}
        text={item.awards[0].category}
        title={title}
      />
      </div>
    </LinkMovie>
  )
  
}
