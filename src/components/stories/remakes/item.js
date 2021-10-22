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
                  {recs.map( (r, key) =>                     
                    <Field 
                      title={date(r.releasedDate, "YYYY")} 
                      value={<Linkit id={r.id} key={key}>{(r.directors[0]) ? r.directors[0].name : "?"}</Linkit>}
                    />                    
                  )}
                </div>
              }
        title={name}
        actions={[
          
        ]}
      />
    
  )
  
}

function Linkit( {id, children} ){
  if( id ) return <LinkMovie id={id}><div>{children}</div></LinkMovie>
  return children;
}