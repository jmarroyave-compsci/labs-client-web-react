import React from 'react'
import Button from '@mui/material/Button'
import { useRouter } from 'next/router'

const LinkButton = function( props ){
  var { url, href, children, border } = props;
  url = (url) ? url : href;
  const router = useRouter();
  const onClick = () => {
    //console.log(url)
    router.push(url)
  }
  return <Button variant="contained" size="large" onClick={() => onClick()}>{children}</Button>
}

export default LinkButton;
