import React from 'react'
import Card from 'core/ui/cards/media';
import Link from 'core/ui/link'
import { Title, Padding } from 'style/detail';

export default function MovieItem( props ){
  const { id, name, url, img } = props;

  return (
    <Link box href={url}>
      <div style={{width: '100%', flex: 1, backgroundImage: `url(${img})`, color: 'white', padding: '1rem', height: '150px', textAlign: 'center', border:'1px solid transparent', margin: '0 1px 1px 0'}}>
        <Padding>
          <Title>{name}</Title>
        </Padding>
      </div>
    </Link>    
    
  )
  
}
