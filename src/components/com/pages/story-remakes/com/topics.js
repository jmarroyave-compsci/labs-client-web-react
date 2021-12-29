import React, { useEffect, useState, useReducer } from 'react'

import TopicTimeline from 'com/entities/topics/topic-timeline';
import TopicsMarquee from 'com/entities/topics/topics-marquee';


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
  const { words, genre, year } = props.props;
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
      {<TopicsMarquee 
          data={words} 
          onTopicClick={onTopicClick} 
          wordName={(w) => w.name }
          wordCount={(w) => w.count }
        />}
      <br/>
      {state.topic && <TopicTimeline topic={state.topic} data={props.topicData} onExit={onTopicExit} />}
    </div>
  )

}

export default Topics