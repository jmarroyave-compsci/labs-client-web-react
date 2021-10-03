import React from 'react'
import { styled } from '@mui/material/styles';
import GridContainer from 'core/ui/layout/grid_container';
import GridItem from 'core/ui/layout/grid_item';
import AwardItem from './award-item';
import Paper from '@material-ui/core/Paper';
import Stack from '@mui/material/Stack';
import Skeleton from '@mui/material/Skeleton';

const Frame = styled('div')({
  padding: "0.5rem",
});

const ItemFrame = styled('div')({
  padding: "0.5rem",
});


export default function AwardGrid( props ){
    var { data, loading, year, all } = props;
    loading = (loading || !data || data.length == 0 )
    data = (data && data.length > 0) ? data : [1,2,3,4,5];

    return (
      <Frame>
          <GridContainer justifyContent='center' fill style={{width: '100%'}}>
            {data.map( (item, idx) => 
              <GridItem key={idx} xs={12} sm={6} md={6} lg={4}>
                <ItemFrame>
                  {(loading) ?
                    <Placeholder/>
                    : 
                    <Item data={item} year={year} all={all}/>
                  }          
                </ItemFrame>  
              </GridItem>
            )}
          </GridContainer>
      </Frame>
    )
}

function Placeholder(){
  return (
    <Paper style={{padding: '0.5rem'}}>
      <Stack spacing={1}>
        <Skeleton variant="text" width={"80%"}/>
        <Skeleton variant="rectangular" height={40} />
      </Stack>  
    </Paper>
  )    
}

function Item( props ){
  return <AwardItem {...props}/>
}
