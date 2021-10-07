import React from 'react'
import Card from 'core/ui/cards/img-text';
import LinkPodcast from 'components/entities/podcast/link'
import Awards from 'components/entities/pieces/awards'
import Typography from '@material-ui/core/Typography';

export default function Item(item){
  const { id, title, awards, full, image, description} = item;
  return (
    <Card
      image={image}
      imageHeight={100}
      text={description}
      title={title}
      actions={[
        <LinkPodcast id={id} entity={title}>Go</LinkPodcast>,
      ]}
    />
  )
  
}
