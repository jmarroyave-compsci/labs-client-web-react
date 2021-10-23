import React from 'react'
import Markdown from 'com/ui/markdown';
import { Title, Small } from 'style/detail'

function Post( props ){
  const { article } = props;
  return (
    <div>
      <Small>srpint {article.meta.sprint} - day {article.meta.day}</Small>
      <Title>{article.meta.title}</Title>
      <div>
          <Markdown content={article.content} />
      </div>
    </div>
    )
}

export default Post;