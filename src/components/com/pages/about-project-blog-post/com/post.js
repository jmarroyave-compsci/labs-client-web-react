import React from 'react'
import Markdown from 'com/ui/markdown';
import { Title, Small } from 'style/detail'

function Post( props ){
  const { article } = props;
  return (
      <Markdown content={article.content} />
    )
}

export default Post;