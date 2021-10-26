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

export default function AwardItem( props ){
  const { entity, year, festival, image, awarded } = props;

    //<LinkAward box id={festival.id} year={year} entity={entity}>
    //</LinkAward> 
  return (      
      <Card
        image={(image) ? image.poster : image}
        imageHeight={100}
        text={ 
          <div>
            {awarded.slice(0,5).map( (a, key) => 
              <Field key={key} title={a.category} value={ (!a.entity_id && !a.id) ? 
                a.entity 
                : 
                <LinkEntity type={(a.entity_type) ? a.entity_type : ((a.id.startsWith("nm") ? "person" : "movie") )} id={(a.entity_id) ? a.entity_id : a.id}>{a.entity}</LinkEntity>}/>
            )}
          </div> 
        }
        title={
          <LinkFestival id={festival.id}>{festival.name}</LinkFestival>
        }
        subtitle={year}
      />
    
  ) 
}