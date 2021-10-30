import React from 'react'
import Card from 'core/ui/cards/media';
import Link from 'com/entities/movie/link'
import Awards from 'com/awards'
import Typography from '@material-ui/core/Typography';

export default function MovieItem( props ){
  const { full, year, all, id, title, awards, image, box } = props;

  return (
    
    <Link box id={id} entity={name}>
      <Card
        image={(image) ? image.poster : image}
        text={<Awards mini={!full} data={awards} year={year} all={all}/>}
        title={title}
      />
    </Link>    
    
  )
  
}
