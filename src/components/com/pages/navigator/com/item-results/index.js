import React, { useContext, useEffect, useRef } from 'react'
import { ComponentContext } from '../../context';
import Stack from 'com/ui/stack';
import Paper from 'com/ui/paper';
import TopicResults from './results';
import { Frame, Title } from 'style/component'
import Help from "../help"

function Item(props){
    const context = useContext( ComponentContext );
    const { topic, genre, decade } = context.state.parameters;
    const topicData = context.data.topic
    return (
      <Frame style={{height: '100%', display: 'flex', flexDirection : 'column'}}>
        <div style={{paddingLeft: '0.5rem'}}>
          <Title>Results for: {(topic) ? `${topic.toUpperCase()} [ ${decade} - ${decade + 10} ]` : "No topic selected"} <Help text="presents the search results for the word selected and the specified [decade]"/></Title>
          <br/>
        </div>
        <Frame border style={{padding: '1rem', display: 'flex', flexDirection: 'column', height: '100%'}}>
          {topic && <TopicResults/>}
        </Frame>
      </Frame>
    )

}

export default Item