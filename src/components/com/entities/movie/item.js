import React from 'react'
import Card from 'core/ui/cards/img-text';
import LinkMovie from 'com/entities/movie/link'
import Awards from 'com/awards'
import Typography from '@material-ui/core/Typography';

export default function MovieItem( props ){
  const { full, year, all, id, title, awards, image } = props;

  return (
    
      <Card
        image={(image) ? image.poster : image}
        imageHeight={100}
        text={<Awards mini={!full} data={awards} year={year} all={all}/>}
        title={title}
        actions={[
          <LinkMovie id={id} entity={title}>Go</LinkMovie>,
        ]}
      />
    
  )
  
}
