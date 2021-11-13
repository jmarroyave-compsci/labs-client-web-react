import React from 'react'
import { Frame } from 'style/boxes'
import { SubTitle, Small } from 'style/detail'
import PersonItem from 'com/entities/person/item'
import Link from 'core/ui/link'
import HList from 'com/ui/hlist';

function People( props ){
  const { data, loading, type, story } = props;

  if(!data || data.length == 0) return <div/>;

  var subtitle = <SubTitle>{type}<Small> [{data.length}]</Small></SubTitle>
  subtitle = (story) ? <Link href={story}>{subtitle}</Link> : subtitle;

  return (
    <Frame>
      {data && data.length > 0 && subtitle}
      <HList
        data={data}
        item={(item) => <PersonItem tiny {...item} {...item.id} />}
      />
    </Frame>
  )
}

export default People;
