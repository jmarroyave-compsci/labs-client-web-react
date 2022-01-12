import React, { useContext, useEffect, useRef } from 'react'
import { ComponentContext } from '../../context';
import Stack from 'com/ui/stack';
import Paper from 'com/ui/paper';
import TopicTimeline from 'com/entities/topics/topic-timeline';
import { Frame } from 'style/component'


/*
          <h2>Movies</h2>
          <h2>Actors</h2>
          <h2>Directors</h2>

*/

function Item(props){
    const context = useContext( ComponentContext );
    const { topic, genre, year } = context.state.parameters;
    const topicData = context.data.topic

    if(!topic) return null

    return (
      <Frame>      
        <Stack>
          <h1>Topic</h1>
          {<TopicTimeline topic={topic} genre={genre} year={year} data={topicData}  />}
        </Stack>
      </Frame>
    )

}

export default Item