import React from 'react'
import Card from 'core/ui/cards/img-text';
import Link from 'core/ui/text-link'
import Typography from '@material-ui/core/Typography';

export default function Item(item){
  const { id, title, thumbnail, description, slug, sprint, day} = item;
  return (
    <Card
      text={description}
      title={title}
      noImage
      subtitle={`srpint ${sprint} - day ${day}`.toUpperCase()}
      actions={[
        <Link href={`/about/log/posts/${slug}`}>Go</Link>,
      ]}
    />
  )
  
}
