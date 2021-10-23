import React from 'react'
import Card from 'core/ui/cards/img-text';
import Link from 'core/ui/link'

export default function MovieItem( props ){
  const { id, name, url, img } = props;

  return (
    
      <Card
        title={name}
        image={img}
        actions={[
          <Link href={url}>Go</Link>,
        ]}
      />
    
  )
  
}
