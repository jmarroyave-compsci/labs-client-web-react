import React from 'react'
import { styled } from '@mui/material/styles';
import MDCard from '@material-ui/core/Card';
import MDCardContent from '@material-ui/core/CardContent';
import MDCardHeader from '@material-ui/core/CardHeader';
import LinkMovie from 'components/entities/movie/link'
import Awards from 'components/entities/pieces/awards'
import Typography from '@material-ui/core/Typography';

export default function AwardItem( props ){
  const { full, year, all } = props;
  const { id, title, awards} = props.data;
  return (
    <LinkMovie id={id} entity={title}>
        <MDCard>
          <MDCardHeader 
            title={<Typography noWrap variant="h6" component="h4">{title}</Typography>}
            style={{ display: "block", overflow: "hidden"}}
          />
          <MDCardContent style={{marginTop : '-1.5rem'}}>
            <Awards mini={!full} data={awards} year={year} all={all}/>
          </MDCardContent>
        </MDCard>
    </LinkMovie>
  )
  
}
