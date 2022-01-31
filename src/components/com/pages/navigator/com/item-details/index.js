import React, { useContext, useEffect, useRef } from 'react'
import { ComponentContext } from '../../context';
import Stack from 'com/ui/stack';
import Paper from 'com/ui/paper';
import TopicTimeline from 'com/entities/topics/topic-timeline';
import { Frame } from 'style/component'
import SectionTitle from '../section-title'

function Item(props){
    const context = useContext( ComponentContext );
    const { topic, genre, year } = context.state.parameters;
    const topicData = context.data.topic

    const onClick = ( {decade, genre }) => {
      context.dispatch( { type: "CHANGE_GENRE", payload: genre })
      context.dispatch( { type: "CHANGE_DECADE", payload: decade })
    }

    return (
      <Frame style={{height: '100%', display: 'flex', flexDirection : 'column'}}>
        <SectionTitle 
          text={(topic) ? topic.toUpperCase() : "No topic selected"}
          help="presents the ocurrences of a word for the different genres through all the timeline"
        />
        <Frame border style={{display: 'flex', flexDirection: 'column', height: '100%'}}>
          {topic && <TopicTimeline v3 topic={topic} genre={genre} year={year} data={topicData.records} loading={topicData.loading} onClick={onClick} />}
        </Frame>
      </Frame>
    )

}

export default Item