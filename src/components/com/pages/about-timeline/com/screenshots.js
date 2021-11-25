import React, { useEffect, useMemo } from 'react'
import Stack from 'com/ui/stack';
import Image from 'core/ui/image';
import { Title, SubTitle } from 'style/infography'
import { getScreenshots } from 'data/screenshots';
import { Small } from 'style/detail'

export default function ScreenshotsViewer( props ){
  const pages = ["home", "movies", "person"];
  return (
    <Stack>
        <Title>Screenshots</Title>
        {pages.map( page => 
          <React.Fragment key={page}>
              <SubTitle>{page}</SubTitle>
              <Screenshots page={page}/>
          </React.Fragment>
        )}
    </Stack>
 )

}

function Screenshots( props ){
  const { page } = props;
  const data = useMemo( () => getScreenshots( page ), [page]);

  return (
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
 )

}

