import React from 'react'
import { styled } from '@mui/material/styles';
import Card from 'core/ui/cards/media';
import MDCard from '@material-ui/core/Card';
import MDCardContent from '@material-ui/core/CardContent';
import MDCardHeader from '@material-ui/core/CardHeader';
import LinkEntity from 'com/entities/entity/link'
import LinkFestival from 'com/entities/movie-festival/link'
import LinkAward from 'com/entities/award/link'
import Awards from 'com/awards'
import Field from 'com/field'
import Awarded from 'com/awarded';

export default function AwardItem( props ){
  const { entity, year, festival, image, awarded } = props;

  return (      
    <LinkAward box id={festival.id} year={year} entity={entity}>  
      <Card
        image={image?.poster}
        text={<Awarded data={awarded} mini/>}
        title={
          <LinkFestival id={festival.id}>{festival.name}</LinkFestival>
        }
        subtitle={year}
      />
    </LinkAward>     
  ) 
}