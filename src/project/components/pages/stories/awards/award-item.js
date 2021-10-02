import React from 'react'
import { styled } from '@mui/material/styles';
import MDCard from '@material-ui/core/Card';
import MDCardContent from '@material-ui/core/CardContent';
import MDCardHeader from '@material-ui/core/CardHeader';
import LinkMovie from 'components/entities/movie/link'
import Awards from 'components/entities/pieces/awards'
import Typography from '@material-ui/core/Typography';

export default function AwardItem(item){
  const { id, title, awards, full} = item;
  return (
    <LinkMovie id={id} entity={title}>
        <MDCard>
          <MDCardHeader 
            title={<Typography noWrap variant="h6" component="h4">{title}</Typography>}
            style={{ display: "block", overflow: "hidden"}}
          />
          <MDCardContent>
            <Awards mini={!full} data={awards}/>
          </MDCardContent>
        </MDCard>
    </LinkMovie>
  )
  
}
