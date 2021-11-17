import React from 'react'
import { Frame } from 'style/boxes'
import { SubTitle, Small } from 'style/detail'
import PersonItem from 'com/entities/person/item'
import Link from 'core/ui/link'
import HList from 'com/ui/hlist';
import Stack from 'com/ui/stack';

function People( props ){
  const { data, loading, type, story, format="list" } = props;

  if(!data || data.length == 0) return <div/>;

  var subtitle = (type) ? <SubTitle>{type}<Small> [{data.length}]</Small></SubTitle> : ""
  subtitle = (type && story) ? <Link href={story}>{subtitle}</Link> : subtitle;

  return (
    <Frame>
      {data && data.length > 0 && subtitle}
      {format === "list" && <HList
        data={data}
        item={(item) => <PersonItem format="list" {...item} {...item.id} />}
      />}
      {format === "tiny" && <Stack>
        {data.map( (item, idx) => 
          <React.Fragment key={idx}>
            <PersonItem format="tiny" {...item} {...item.id} />
          </React.Fragment>
        )}
      </Stack>}
    </Frame>
  )
}

export default People;
