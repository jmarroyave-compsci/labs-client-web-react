import React, { useContext, useEffect, useRef } from 'react'
import { ComponentContext } from '../../context';
import Stack from 'com/ui/stack';
import Paper from 'com/ui/paper';
import TopicTimeline from 'com/entities/topics/topic-timeline';
import { Frame, Title } from 'style/component'
import Help from "../help"

function Item(props){
    const context = useContext( ComponentContext );
    const { topic, genre, year } = context.state.parameters;
    const topicData = context.data.topic
    return (
      <Frame style={{height: '100%', display: 'flex', flexDirection : 'column'}}>
        <div style={{paddingLeft: '0.5rem'}}>
          <Title>{(topic) ? topic.toUpperCase() : "No topic selected"} <Help text="presents the ocurrences of a word for the different genres through all the timeline"/></Title>
          <br/>
        </div>
        <Frame border style={{display: 'flex', flexDirection: 'column', height: '100%'}}>
          {topic && <TopicTimeline v3 topic={topic} genre={genre} year={year} data={topicData.records} loading={topicData.loading}  />}
        </Frame>
      </Frame>
    )

}

export default Item