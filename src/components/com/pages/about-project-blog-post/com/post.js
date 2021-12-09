import React from 'react'
import Markdown from 'com/ui/markdown';
import { Title, Small } from 'style/detail'
import Comments from 'com/modules/comments'
import Stack from 'com/ui/stack';

function Post( props ){
  const { article } = props;
  return (
    <Stack>
      <Markdown content={article.content} />
    </Stack>
    )
}

export default Post;