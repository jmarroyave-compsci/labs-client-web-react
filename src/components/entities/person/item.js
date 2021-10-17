import React from 'react'
import Card from 'core/ui/cards/img-text';
import LinkPerson from 'components/entities/person/link'
import Typography from '@material-ui/core/Typography';

export default function MovieItem( props ){
  const { id, name, text } = props;

  return (
    
      <Card
        title={name}
        text={text}
        actions={[
          <LinkPerson id={id}>Go</LinkPerson>,
        ]}
      />
    
  )
  
}
