import React, { useEffect, useRef } from 'react'
import Stack from 'com/ui/stack';
import Image from 'core/ui/image';
import { Title, SubTitle } from 'style/infography'
import { getScreenshots } from 'data/screenshots';
import { Small } from 'style/detail'

export default function Screenshots( props ){
  const page = "home";
  const data = getScreenshots( page );

  return (
    <Stack>
      <Title>Screenshots</Title>
      <SubTitle>{page}</SubTitle>
      <div style={{ width: '100%', overflowX: 'auto'}}> 
        <Stack direction='row' spacing={2}>
          {data.map( (img, idx) => 
            <div key={idx}>          
              <Small>{img.date}</Small>
              <div style={{height: "200px", overflow: 'hidden'}}><Image src={`/img/screenshots/${img.file}`} width="200"/></div>
            </div>
          )}
        </Stack>
      </div>
    </Stack>
 )

}

