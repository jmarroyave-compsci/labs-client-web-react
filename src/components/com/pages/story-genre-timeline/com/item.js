import React, { useEffect, useState, useReducer } from 'react'
import { Title, Subtitle, Small, ItemFrame } from 'style/item'
import { Frame } from 'style/boxes'
import Topics from './topics';

export const Item = ( props ) => {
  const { genre, header=true } = props

  return (
    <div style={{padding: '1rem', width: '100%'}}>
        {header && 
          <Frame>
            <Title>{genre.toUpperCase()}</Title>
          </Frame>
        }
        <Topics {...props} data={props.timeline} />
    </div>
  )
}