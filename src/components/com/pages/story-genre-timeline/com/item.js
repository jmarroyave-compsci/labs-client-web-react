import React, { useEffect, useState, useReducer } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Title, Subtitle, Small, ItemFrame } from 'style/item'
import { Frame } from 'style/boxes'
import { fetchTopic } from '../automata'

import Topics from './topics';

export const Item = ( props ) => {
  const dispatch = useDispatch()
  const topicData = useSelector(( state ) => state['story-topics'] )   
  const { genre, header=true } = props

  const onTopicClick = ( topic ) => {
    dispatch( fetchTopic( { entity: "movie", topic: topic } ) )
  }

  return (
    <div style={{padding: '1rem', width: '100%'}}>
        {header && 
          <Frame>
            <Title>{genre.toUpperCase()}</Title>
          </Frame>
        }
        <Topics {...props} data={props.timeline} onTopicClick={onTopicClick} topicData={topicData} />
    </div>
  )
}