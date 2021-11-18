import React, { useRef } from 'react'
import { styled } from '@mui/material/styles';
import { useRouter } from 'next/router'
import Stack from 'com/ui/stack';
import Button from '@mui/material/Button';
import { Frame } from 'style/boxes'
import { Title } from 'style/detail'


export default function Paging(props){
  const router = useRouter();
  var { children, route, loading, data, url, skeleton, onPageChange, page, pageSize=10 } = props || {};

  page = (page) ? page : ((route && route.page) ? route.page : null); 
  page = (page) ? parseInt(page) : 1;

  const goToPage = ( toPage ) => {
    if(onPageChange) {
      onPageChange(toPage)
    }

    if(url){
      var urlTo = `${url}/${toPage}`;
      router.push(urlTo)      
    }
  }
  const nextPage = () => goToPage(page + 1)
  const nextButton = ( data && data.length < pageSize )
  const previousPage = () => goToPage(page - 1)
  const previousButton = (page == 1)

  return (
    <>
      <Frame>
        { (data && data.length > 0) ? 
          <Stack
              spacing={2}
          >
            {children}
            <Stack direction='row' spacing={2} justifyContent='center'>
              <Button variant="outlined" disabled={previousButton} onClick={ previousPage }>Back</Button>
              <Button variant="outlined" disabled={nextButton} onClick={ nextPage }>Next</Button>
            </Stack>
          </Stack>
        :
          <Title>{(loading) ? ((skeleton) ? skeleton : "loading") : "No results"}</Title>
        }
      </Frame>
    </>
  )
}


