import React, { useContext, useEffect, useRef } from 'react'
import { ComponentContext } from '../../context';
import Stack from 'com/ui/stack';
import Paper from 'com/ui/paper';
import TopicResults from './results';
import { Frame } from 'style/component'
import SectionTitle from '../section-title'

function Item(props){
    const context = useContext( ComponentContext );
    const { topic, genre, decade } = context.state.parameters;
    const topicData = context.data.topic
    return (
      <Frame style={{height: '100%', display: 'flex', flexDirection : 'column'}}>
        <SectionTitle 
          text={((topic) ? `Results for: ${topic.toUpperCase()}` : "Results: No topic selected")}
          help="presents the search results for the word selected and the specified [decade]"
        />
        <Frame border style={{padding: '1rem', display: 'flex', flexDirection: 'column', height: '100%'}}>
          {topic && <TopicResults/>}
        </Frame>
      </Frame>
    )

}

export default Item