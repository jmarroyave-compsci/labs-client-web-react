import React from 'react'
import Markdown from 'components/ui/markdown';

function Post( props ){
  const { article } = props;
  return (
    <div>
          <div >
              <img src={article.meta.thumbnail} width="100%"/>
          </div>

          <div>
              <Markdown content={article.content} />
          </div>
    </div>
    )
}

export default Post;