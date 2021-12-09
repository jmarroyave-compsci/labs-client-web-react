import { gql } from "@apollo/client";
import { post }  from 'lib/graphql'; 

export const postComment = ( { text, who, from } ) => post( POST_COMMENT(  ) , { text: text, who: who, from: from } , (resp) => { return { ...resp, data: resp.data.postCommentTmp } } )
const POST_COMMENT = ( ) => gql`
  query comment_post($text: String, $who: String, $from: String){
    postCommentTmp(text: $text, who: $who, from: $from)
  }
`