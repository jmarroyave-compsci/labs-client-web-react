import React from 'react'
import { styled } from '@mui/material/styles';
import { useRouter } from 'next/router'
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

const ResultText = styled('h3')({
  marginTop: 0,
});

export default function Paging(props){
  const router = useRouter();
  var { children, route, loading, data, url, skeleton, onPageChange, page } = props || {};

  page = (page) ? page : ((route && route.page) ? route.page : null); 
  page = (page) ? parseInt(page) : 1;

  const goToPage = ( toPage ) => {
    window.scrollTo(0,0);

    if(onPageChange) {
      onPageChange(toPage)
      return;
    }

    var urlTo = `${url}/${toPage}`;
    router.push(urlTo)
  }
  const nextPage = () => goToPage(page + 1)
  const nextButton = ( data && data.length < 10 )
  const previousPage = () => goToPage(page - 1)
  const previousButton = (page == 1)

  return (
    <>
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
        <ResultText>{(loading) ? ((skeleton) ? skeleton : "loading") : "No results"}</ResultText>
      }
    </>
  )
}


