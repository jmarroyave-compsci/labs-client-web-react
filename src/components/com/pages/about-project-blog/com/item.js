import React from 'react'
import Card from 'core/ui/cards/img-text';
import Link from 'core/ui/text-link'
import { Paragraph, Small, Padding } from 'style/detail';
import config from '../.config';

export default function PostItem(item){
  const { id, title, thumbnail, description, slug, sprint, day} = item;
  return (
      <Link href={`${config.page.url}/posts/${slug}`}>
        <Padding>
          <Small>{`srpint ${sprint} - day ${day}`.toUpperCase()}</Small>
          <Paragraph>{title}</Paragraph>
        </Padding>
      </Link>
  )  
}
