import React from 'react'
import Card from 'core/ui/cards/media';
import LinkMovie from 'com/entities/movie/link'
import Awards from 'com/awards'
import Typography from '@material-ui/core/Typography';
import { date } from 'core/lib/format'
import Field from 'com/field'

export default function RemakeItem( props ){
  const { image, name, count, recs } = props;
  return (   
      <Card
        image={(image) ? image.poster : image}
        text={ <div>
                  {recs.slice(0,3).map( (r, key) =>                    
                      (r.directed[0]?.id) ? 
                        <Field key={key}
                          title={r.releaseYear} 
                          value={<Linkit id={r.id} key={key}>{r.directed[0]?.id?.name}</Linkit>}
                        />       
                      :
                        <Field key={key}
                          title="&nbsp;"
                          value={<Linkit id={r.id} key={key}>{r.releaseYear}</Linkit>} 
                        />                                               
                  )}
                </div>
              }
        title={name}
      />
    
  )
  
}

function Linkit( {id, children} ){
  if( id ) return <LinkMovie id={id}><div>{children}</div></LinkMovie>
  return children;
}