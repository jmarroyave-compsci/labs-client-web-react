import React, { useState } from 'react'
import { postComment } from "./data/"

export default function Comments( props ){
  var { data } = props;
  var [ text, setText ] = useState("")

  data = (data) ? data : [1,2,3,4]

  const onClick = () => {
    postComment({ text: "hola", who: "yo", from: window.location.href})
  }

  return (
    <div>
      <div>
      <input type="text" onChange={ (e) => {
          setText(e.target.value) 
        }} 
        value={text}/>
      <button onClick={ onClick }>Post</button>
      </div>
      {data.map( (d, idx) => 
        <div key={idx}>
          comment
        </div>
      )}
    </div>
  )
}

