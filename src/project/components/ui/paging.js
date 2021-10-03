import React from 'react'
import { styled } from '@mui/material/styles';
import { useHistory } from 'react-router-dom'
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

const ResultText = styled('h3')({
  marginTop: 0,
});

export default function Paging(props){
  const history = useHistory();
  const { children, route, loading, data, url, skeleton } = props;
  const page = (route && route.page) ? parseInt(route.page) : 1;

  const goToPage = ( toPage ) => {
    var urlTo = `${url}/${toPage}`;
    history.push(urlTo)
    window.scrollTo(0,0);
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


