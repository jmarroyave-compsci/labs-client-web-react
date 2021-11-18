import React, { useRef } from 'react'
import { styled } from '@mui/material/styles';
import Stack from '@mui/material/Stack';
import Paging from 'com/ui/paging';
import Paper from '@material-ui/core/Paper';
import Skeleton from '@mui/material/Skeleton';

const Frame = styled('div')(() => ({
  padding: '1rem',
  marginBottom: '0rem',
  backgroundColor: 'transparent',
}))

export default function HList( props ){
    var { skeleton, data, item, noPaging=true, pageSize, loading, onPageChange, page, url } = props;
    const start = useRef(null)

    data = (data && data.length > 0) ? data : [1,2,3,4];

    const itemWrapper = ( data ) => data

    const goToPage = ( toPage ) => {
      start.current.scrollIntoView(false)
      if(onPageChange) onPageChange(toPage)
    }


    var output = (
        <Frame>
          <Stack direction="row" style={{overflowX: 'auto'}}>
            <div ref={start}/>
            {data.map( (it, idx) =>
              <div key={idx} style={{width: '100%'}}>
                {itemWrapper((loading) ?
                  (skeleton) ? skeleton : <Placeholder/>
                  : 
                  (item) ? item(it) : null
                )} 
              </div>
            )}
          </Stack>
        </Frame>
    )


    if(!noPaging){
      output = (
        <Paging pageSize={pageSize} data={ data } url={url} onPageChange={goToPage} page={page} loading={loading}>
          {output}
        </Paging>
      )      
    }

    return output;
}

function Placeholder(){
  return (
    <Paper style={{width: "200px", backgroundColor: 'transparent', flexGrow: 1, padding: '1rem', margin: '0.5rem'}}>
      <Stack spacing={1}>
        <Skeleton variant="text" width={"20%"}/>
        <Skeleton variant="text"/>
        <Skeleton variant="text" width={"60%"}/>
      </Stack>  
    </Paper>
  )    
}