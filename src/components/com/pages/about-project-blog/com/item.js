import React from 'react'
import Card from 'core/ui/cards/img-text';
import Link from 'core/ui/text-link'
import Typography from '@material-ui/core/Typography';
import config from '../.config';

export default function Item(item){
  const { id, title, thumbnail, description, slug, sprint, day} = item;
  return (
    <Card
      text={description}
      title={title}
      noImage
      subtitle={`srpint ${sprint} - day ${day}`.toUpperCase()}
      actions={[
        <Link href={`${config.page.url}/posts/${slug}`}>Go</Link>,
      ]}
    />
  )
  
}
