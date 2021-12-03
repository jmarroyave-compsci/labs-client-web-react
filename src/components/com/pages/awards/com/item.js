import React from 'react'
import { styled } from '@mui/material/styles';
import Card from 'core/ui/cards/media';
import MDCard from '@mui/material/Card';
import MDCardContent from '@mui/material/CardContent';
import MDCardHeader from '@mui/material/CardHeader';
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