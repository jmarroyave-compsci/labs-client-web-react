import React from 'react'
import Card from 'core/ui/cards/img-text';
import LinkMovie from 'components/entities/movie/link'
import Awards from 'components/entities/pieces/awards'
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
          
        ]}
      />
    
  )
  
}
