import React from 'react'
import Card from 'core/ui/cards/img-text';
import LinkMovie from 'components/entities/movie/link'
import Awards from 'components/entities/pieces/awards'
import Typography from '@material-ui/core/Typography';
import { date } from 'core/lib/format'
import Field from 'components/entities/pieces/field'

export default function MovieItem( props ){
  const { image, name, count, recs } = props;

  return (
    
      <Card
        image={(image) ? image.poster : image}
        imageHeight={100}
        text={ <div>
                  {recs.map( r => 
                    <div>
                      <LinkMovie id={r.id}>
                        <Field title={date(r.releasedDate, "YYYY")} value={(r.directors[0]) ? r.directors[0].name : "?"}/>
                      </LinkMovie>
                    </div>
                  )}
                </div>
              }
        title={name}
        actions={[
          
        ]}
      />
    
  )
  
}
