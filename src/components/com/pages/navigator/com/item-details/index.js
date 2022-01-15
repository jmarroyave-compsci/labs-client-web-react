import React, { useContext, useEffect, useRef } from 'react'
import { ComponentContext } from '../../context';
import Stack from 'com/ui/stack';
import Paper from 'com/ui/paper';
import TopicTimeline from 'com/entities/topics/topic-timeline';
import { Frame, Title } from 'style/component'

function Item(props){
    const context = useContext( ComponentContext );
    const { topic, genre, year } = context.state.parameters;
    const topicData = context.data.topic

    return (
      <Frame style={{height: '100%', display: 'flex', flexDirection : 'column'}}>
        <div>
          <Title>Topic: {(topic) ? topic : "no topic selected"}</Title>
          <br/>
        </div>
        <div style={{display: 'flex', flexDirection: 'column', height: '100%'}}>
          {topic && <TopicTimeline topic={topic} genre={genre} year={year} data={topicData}  />}
        </div>
      </Frame>
    )

}

export default Item