import React from 'react'
import Card from 'core/ui/cards/img-text';
import Link from 'core/ui/text-link'
import Awards from 'components/entities/pieces/awards'
import Typography from '@material-ui/core/Typography';

export default function Item(item){
  const { id, title, thumbnail, description, slug} = item;
  return (
    <Card
      image={thumbnail}
      imageHeight={100}
      text={description}
      title={title}
      actions={[
        <Link href={`/about/log/posts/${slug}`}>Go</Link>,
      ]}
    />
  )
  
}
