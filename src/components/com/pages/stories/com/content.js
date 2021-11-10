import React, { useMemo } from 'react';
import Stories from './stories'
import Stack from 'com/ui/stack'

export default function Content( props ){
  return (
      <Stack>
        <Stories tag={props.tag}/>
      </Stack>
  )
}
