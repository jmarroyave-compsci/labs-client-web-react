import React from 'react'
import Stack from '@mui/material/Stack';
import Grid from 'components/ui/grid';
import Item from './item';
import { useRouter } from 'next/router'
import config from './.config'

export default function Content( props ){
  const router = useRouter();
  const onPageChange = ( page ) => {
    router.push(`${config.page.url()}/${page}`)  
  }

  return (
    <Stack>
      <Grid {...props}
          page={props.route.page} 
          onPageChange={onPageChange}
          item={(data) => <Item full {...data}/>}
      />
    </Stack>
  )
}