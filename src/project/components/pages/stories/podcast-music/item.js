import React from 'react'
import { styled } from '@mui/material/styles';
import Card from 'core/ui/cards/img-text';
import LinkMovie from 'components/entities/movie/link'
import Awards from 'components/entities/pieces/awards'
import Typography from '@material-ui/core/Typography';

export default function Item(item){
  const { id, title, awards, full, image, description} = item;
  return (
    <LinkMovie id={id} entity={title}>
      <Card
        image={image}
        imageHeight={100}
        text={description}
        title={title}
      />
    </LinkMovie>
  )
  
}
