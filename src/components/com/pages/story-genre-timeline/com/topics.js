import React, { useEffect, useState, useReducer } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import TopicTimeline from './topic-timeline';
import GenreTimeline from './genre-timeline';
import Skeleton from "./skeleton";
import { fetchTopic } from '../automata'

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
  const appDispatch = useDispatch()
  const topicData = useSelector(( state ) => state['story-genre-timeline'] )   
  const { data, genre, year, loading } = props;

  const [ state, dispatch ] = useReducer( reducer, initialState )

  const onTopicClick = ( topic ) => {
    dispatch({type: "SELECT_WORD", payload: { topic: topic } })
    appDispatch( fetchTopic( { entity: "movie", topic: topic } ) )
  }

  const onTopicExit = ( topic ) => {
    dispatch({ type: "EXIT_TIMELINE"})
  }

  if(data == null || loading ){
    return <Skeleton/>
  } 

  return (
    <div>
      {<GenreTimeline topic={state.topic} data={data} onTopicClick={onTopicClick} />}
      <br/>
      {state.showTimeline && <TopicTimeline topic={state.topic} genre={genre} year={year} data={topicData} onExit={onTopicExit} />}
    </div>
  )

}

export default Topics