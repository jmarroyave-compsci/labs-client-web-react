import React, { useEffect, useState, useReducer } from 'react'

import TopicTimeline from './topic-timeline';
import TopicsMarquee from './topics-marquee';


const initialState = {
  showLines: true,
  showTimeline: false,
  topic: "",
}

function reducer(state, action){
  switch( action.type ){
    case "INIT":
      return {
        ...state,
        showLines: true,
        showTimeline: false,
        topic: "",
      };
    case "SELECT_WORD":
      return {
        ...state,
        showLines: false,
        showTimeline: true,
        topic: action.payload.topic,
      }    
    case "EXIT_TIMELINE":
      return {
        ...state,
        showLines: true,
        showTimeline: false,
        topic: "",
      }
    default:
      throw new Error(`operation ${ action.type?.toUpperCase() } not implemented`)      
  }
}

function Topics( props ){
  const { max, min, words, genre, year } = props.props;

  const [ state, dispatch ] = useReducer( reducer, initialState )

  const onTopicClick = ( topic ) => {
    if(props.onTopicClick) props.onTopicClick(topic)
    dispatch({type: "SELECT_WORD", payload: { topic: topic } })
  }

  const onTopicExit = ( topic ) => {
    dispatch({ type: "EXIT_TIMELINE"})
  }

  return (
    <div>
      {state.showLines && <TopicsMarquee max={max} min={min} data={words} onTopicClick={onTopicClick} />}
      {state.showTimeline && <TopicTimeline topic={state.topic} genre={genre} year={year} data={props.topicData} onExit={onTopicExit} />}
    </div>
  )

}

export default Topics