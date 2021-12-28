import React, { useEffect, useState, useReducer } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Title, Subtitle, Small, ItemFrame } from 'style/item'
import { Frame } from 'style/boxes'
import { fetchTopic } from '../automata'

import Topics from './topics';

export const ItemMarquee = ( props ) => {
  const dispatch = useDispatch()
  const topicData = useSelector(( state ) => state['story-topics'] )   
  const { max, min, words, genre, year, header=true } = props

  const onTopicClick = ( topic ) => {
    if(props.onTopicClick) props.onTopicClick(topic)
    dispatch( fetchTopic( { entity: "movie", topic: topic } ) )
  }

  return (
    <div style={{padding: '1rem', width: '100%'}}>
        {header && 
          <Frame>
            <Title>{genre.toUpperCase()} {year}</Title>
          </Frame>
        }
        <Topics {...props} onTopicClick={onTopicClick} props={props} topicData={topicData} />
    </div>
  )
}