import React from 'react'
import { styled } from '@mui/material/styles';
import Card from 'core/ui/cards/img-text';
import MDCard from '@material-ui/core/Card';
import MDCardContent from '@material-ui/core/CardContent';
import MDCardHeader from '@material-ui/core/CardHeader';
import LinkMovie from 'components/entities/movie/link'
import Awards from 'components/entities/pieces/awards'
import Typography from '@material-ui/core/Typography';

export default function AwardItem( props ){
  const { full, year, all, id, title, awards, image } = props;

  console.log(props);

  return <div>hola</div>
  return (
      
      <Card
        image={(image) ? image.poster : image}
        imageHeight={100}
        text={<Awards mini={true} data={awards} year={year} all={all}/>}
        title={title}
        actions={[
          <LinkMovie id={id} entity={title}>Go</LinkMovie>,
        ]}
      />
    
  )
  
}
