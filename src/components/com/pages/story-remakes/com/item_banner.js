import React, { useEffect, useState, useReducer } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Title, Subtitle, Small, ItemFrame } from 'style/item'
import { Frame } from 'style/boxes'
import { fetchTopic } from '../automata'

import Topics from './topics';

export const ItemBanner = ( props ) => {
  const dispatch = useDispatch()
  const topicData = useSelector(( state ) => state['stories-remakes'] )   
  const { max=0, min=0, words } = props

  const onTopicClick = ( topic ) => {
    topic = topic.toLowerCase().replace(/ /g, ",")
    if(props.onTopicClick) props.onTopicClick(topic)
    dispatch( fetchTopic( { entity: "movie", topic: topic } ) )
  }

  return (
    <div style={{padding: '1rem', width: '100%'}}>
        <Topics onTopicClick={onTopicClick} props={props} topicData={topicData} />
    </div>
  )
}